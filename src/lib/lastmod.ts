import { execFileSync } from "node:child_process";

/** Instantané du build, utilisé seulement si l’historique git n’est pas fiable. */
const buildDate = new Date();

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

function lastCommitDate(files: readonly string[]): Date | null {
  try {
    const iso = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", ...files],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    if (!iso) return null;
    const date = new Date(iso);
    return Number.isNaN(date.getTime()) ? null : date;
  } catch {
    return null;
  }
}

/** Dernier commit des fichiers de la page, ou la date de build si git ne peut pas la donner. */
export function pageLastModified(files: readonly string[]): Date {
  if (!gitDatesAreReliable) return buildDate;
  return lastCommitDate(files) ?? buildDate;
}
