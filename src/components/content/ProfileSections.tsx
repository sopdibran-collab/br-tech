import { BookOpen, Building2, ClipboardList } from "lucide-react";
import { ContentSection } from "@/components/layout/ContentSection";
import { home } from "@/content/home";
import { profile } from "@/content/profile";

const prose = "prose-brt space-y-4";

const cardIcons = {
  clipboard: ClipboardList,
  book: BookOpen,
  building: Building2,
} as const;

function FrameworkCards() {
  return (
    <ul className="mt-6 grid gap-4 sm:grid-cols-3">
      {profile.frameworks.cards.map((card) => {
        const Icon = cardIcons[card.icon];
        return (
          <li
            key={card.title}
            className="rounded-[8px] border border-line bg-white p-5"
          >
            <Icon className="size-5 text-primary" strokeWidth={1.75} aria-hidden />
            <h3 className="mt-3 text-[17px] font-semibold text-navy">{card.title}</h3>
            <p className="mt-2 text-[16px] leading-[1.6] text-[#334155]">{card.text}</p>
          </li>
        );
      })}
    </ul>
  );
}

function Heading({
  level,
  children,
}: {
  level: "h2" | "h3";
  children: string;
}) {
  const className =
    level === "h2"
      ? "text-[22px] font-semibold text-navy"
      : "text-[18px] font-semibold text-navy";
  const Tag = level;
  return <Tag className={className}>{children}</Tag>;
}

function ProcessBody({ steps }: { steps: boolean }) {
  return (
    <div className={`mt-4 ${prose}`}>
      {steps ? (
        <>
          <p>{profile.process.intro}</p>
          <ol className="list-decimal space-y-3 pl-5">
            {home.method.steps.map((step) => (
              <li key={step.title}>
                <span className="font-medium text-navy">{step.title}.</span>{" "}
                {step.text}
              </li>
            ))}
          </ol>
          <p>{home.method.reception}</p>
        </>
      ) : (
        <p>{profile.process.compact}</p>
      )}
      <p>{profile.process.servicesIntro}</p>
      <ul className="list-disc space-y-1 pl-5">
        {profile.process.servicesList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{profile.process.servicesAfter}</p>
      <p className="callout-brt">{profile.process.team}</p>
    </div>
  );
}

function Paragraphs({ items }: { items: readonly string[] }) {
  return (
    <div className={`mt-4 ${prose}`}>
      {items.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
    </div>
  );
}

function Block({
  title,
  level,
  children,
}: {
  title: string;
  level: "h2" | "h3";
  children: React.ReactNode;
}) {
  return (
    <div>
      <Heading level={level}>{title}</Heading>
      {children}
    </div>
  );
}

/** Sections ajoutées après le texte À propos existant. */
export function ProfileSections({ surface }: { surface: "page" | "inset" }) {
  const level = surface === "page" ? "h2" : "h3";
  const steps = surface === "page";
  const blocks = (
    <>
      <Block title={profile.process.title} level={level}>
        <ProcessBody steps={steps} />
      </Block>
      <Block title={profile.clients.title} level={level}>
        <Paragraphs items={profile.clients.paragraphs} />
      </Block>
      <Block title={profile.frameworks.title} level={level}>
        <FrameworkCards />
      </Block>
      <Block title={profile.area.title} level={level}>
        <Paragraphs items={profile.area.paragraphs} />
      </Block>
    </>
  );

  if (surface === "inset") {
    return <div className="mt-10 max-w-[68ch] space-y-10">{blocks}</div>;
  }

  return (
    <>
      <ContentSection muted>
        <Block title={profile.process.title} level="h2">
          <ProcessBody steps />
        </Block>
      </ContentSection>
      <ContentSection>
        <Block title={profile.clients.title} level="h2">
          <Paragraphs items={profile.clients.paragraphs} />
        </Block>
      </ContentSection>
      <ContentSection muted>
        <Block title={profile.frameworks.title} level="h2">
          <FrameworkCards />
        </Block>
      </ContentSection>
      <ContentSection>
        <Block title={profile.area.title} level="h2">
          <Paragraphs items={profile.area.paragraphs} />
        </Block>
      </ContentSection>
    </>
  );
}
