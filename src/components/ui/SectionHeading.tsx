import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={clsx(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={clsx(
            "text-sm font-semibold uppercase tracking-[0.18em]",
            isDark ? "text-accent" : "text-accent-ink"
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={clsx(
          "text-3xl leading-tight font-semibold md:text-4xl",
          isDark && "text-night-ink"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={clsx("text-lg", isDark && "text-night-ink-dim")}>{description}</p>
      ) : null}
    </div>
  );
}
