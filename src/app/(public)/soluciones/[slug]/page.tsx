import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetail } from "@/modules/solutions/components/SolutionDetail";
import { SOLUTIONS, getSolutionBySlug } from "@/modules/solutions/utils/solutions";

export function generateStaticParams() {
  return SOLUTIONS.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: PageProps<"/soluciones/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  return solution ? { title: solution.name, description: solution.summary } : {};
}

export default async function Page({ params }: PageProps<"/soluciones/[slug]">) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return <SolutionDetail solution={solution} />;
}
