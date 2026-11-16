import { execFileSync } from "node:child_process";

function gitHistoryIsComplete(): boolean {
  try {
    const inside = execFileSync("git", ["rev-parse", "--is-inside-work-tree"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (inside !== "true") return false;

    const shallow = execFileSync(
      "git",
      ["rev-parse", "--is-shallow-repository"],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    return shallow === "false";
  } catch {
    return false;
  }
}

const gitDatesAreReliable = gitHistoryIsComplete();

function lastCommitDate(files: readonly string[]): Date | undefined {
  try {
    const iso = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", ...files],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    if (!iso) return undefined;
    const date = new Date(iso);
    return Number.isNaN(date.getTime()) ? undefined : date;
  } catch {
    return undefined;
  }
}

/**
 * Retourne lastmod uniquement si l’historique Git permet de dater réellement
 * les fichiers. Une date de build n’est pas une date de modification de page.
 */
export function pageLastModified(
  files: readonly string[],
): Date | undefined {
  if (!gitDatesAreReliable) return undefined;
  return lastCommitDate(files);
}
