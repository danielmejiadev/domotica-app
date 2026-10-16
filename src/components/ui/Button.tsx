import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ComponentProps } from "react";
import Link from "next/link";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "accent" | "whatsapp" | "outline-light";
export type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-ink text-bg hover:opacity-90",
  secondary: "bg-surface-2 text-ink hover:bg-line",
  ghost: "bg-transparent text-ink hover:bg-surface-2",
  accent: "bg-accent text-ink shadow-glow hover:bg-accent-strong",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-strong",
  "outline-light": "border border-night-ink-dim/40 bg-white/5 text-night-ink backdrop-blur hover:bg-white/15",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function buttonClassName(variant: ButtonVariant = "primary", size: ButtonSize = "md", className?: string) {
  return clsx(
    "inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50",
    sizeClasses[size],
    variantClasses[variant],
    className
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, ...props },
  ref
) {
  return <button ref={ref} className={buttonClassName(variant, size, className)} {...props} />;
});

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function ButtonLink({ variant = "primary", size = "md", className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClassName(variant, size, className)} {...props} />;
}

interface ButtonExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function ButtonExternalLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClassName(variant, size, className)}
      {...props}
    />
  );
}
