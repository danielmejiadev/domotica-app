import { ContactSection } from "@/modules/leads/components/ContactSection";
import { NeedsGuideSection } from "@/modules/guide/components/NeedsGuideSection";
import { BenefitsSection } from "./BenefitsSection";
import { CapabilitiesSection } from "./CapabilitiesSection";
import { DayTimelineSection } from "./DayTimelineSection";
import { FaqSection } from "./FaqSection";
import { HeroSection } from "./HeroSection";
import { LevelsSection } from "./LevelsSection";
import { MythsSection } from "./MythsSection";
import { ProcessSection } from "./ProcessSection";
import { SolutionsSection } from "./SolutionsSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <SolutionsSection />
      <CapabilitiesSection />
      <MythsSection />
      <DayTimelineSection />
      <LevelsSection />
      <NeedsGuideSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
