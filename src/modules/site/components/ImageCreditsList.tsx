import { IMAGE_CREDITS } from "../utils/imageCredits";

export function ImageCreditsList() {
  return (
    <ul className="flex flex-col gap-4">
      {IMAGE_CREDITS.map((credit) => (
        <li key={credit.file} className="rounded-md bg-surface p-4 shadow-soft">
          <a href={credit.source} target="_blank" rel="noopener noreferrer" className="font-medium text-ink">
            {credit.title}
          </a>
          <p className="text-sm">
            {credit.author} · {credit.license} · Wikimedia Commons
          </p>
        </li>
      ))}
    </ul>
  );
}
