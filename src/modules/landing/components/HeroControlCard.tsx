import clsx from "clsx";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./HeroSection.module.css";

interface Control {
  icon: IconName;
  label: string;
  value: string;
  active: boolean;
}

const CONTROLS: Control[] = [
  { icon: "bulb", label: "Luces de la sala", value: "70%", active: true },
  { icon: "snowflake", label: "Aire acondicionado", value: "22 °C", active: true },
  { icon: "lock", label: "Puerta principal", value: "Cerrada", active: false },
  { icon: "blinds", label: "Cortinas", value: "Abiertas", active: true },
];

export function HeroControlCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className={clsx("rounded-xl border border-white/15 bg-night/70 p-5 shadow-lift backdrop-blur-xl", styles.floating)}>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-night-ink-dim">Escena activa</p>
            <p className="font-heading text-lg font-semibold text-night-ink">Llegué a casa</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-pill bg-accent text-ink shadow-glow">
            <Icon name="home" className="h-5 w-5" />
          </span>
        </div>
        <ul className="flex flex-col gap-2.5">
          {CONTROLS.map((control) => (
            <li
              key={control.label}
              className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3.5 py-3"
            >
              <span className="flex items-center gap-3 text-sm text-night-ink">
                <span
                  className={clsx(
                    "flex h-8 w-8 items-center justify-center rounded-pill",
                    control.active ? "bg-accent/20 text-accent" : "bg-white/10 text-night-ink-dim"
                  )}
                >
                  <Icon name={control.icon} className="h-4 w-4" />
                </span>
                {control.label}
              </span>
              <span className={clsx("text-sm font-semibold", control.active ? "text-accent" : "text-night-ink-dim")}>
                {control.value}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={clsx(
          "absolute -bottom-6 -left-4 hidden items-center gap-2.5 rounded-pill border border-white/15 bg-night/80 px-4 py-2.5 text-sm text-night-ink shadow-lift backdrop-blur-xl sm:flex",
          styles.floatingSlow
        )}
      >
        <span className="h-2.5 w-2.5 rounded-pill bg-success" />
        Todo en orden en casa
      </div>
    </div>
  );
}
