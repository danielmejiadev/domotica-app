"use client";

import type { ReactNode } from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

export interface AccordionItem {
  value: string;
  title: string;
  content: ReactNode;
}

// Behavior (keyboard navigation, aria-expanded, panel linking) comes from Base UI's Accordion primitive; this file only supplies our own tokens.
export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <AccordionPrimitive.Root className="flex flex-col divide-y divide-line rounded-lg bg-surface shadow-soft">
      {items.map((item) => (
        <AccordionPrimitive.Item key={item.value} value={item.value}>
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-heading text-lg font-semibold text-ink">
              {item.title}
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-pill bg-surface-2 text-xl leading-none text-accent-ink transition-transform group-data-[panel-open]:rotate-45"
              >
                +
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Panel className="px-6 pb-6 text-ink-dim">
            {typeof item.content === "string" ? <p>{item.content}</p> : item.content}
          </AccordionPrimitive.Panel>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
