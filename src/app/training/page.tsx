import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { trainingGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Practical professional training from EKA Consulting and Trading PLC, including HSEQ, fire and emergency, technical safety, and soft skills.",
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        kicker="Training and competency development"
        title="Competence, taught for the workplace."
        lede="EKA provides practical professional training programs designed around workplace requirements."
        image="/images/training-site.jpg"
      />
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {trainingGroups.map((group) => (
            <section key={group.title} className="rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight">{group.title}</h2>
              <ul className="mt-5 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 rounded-2xl bg-paper px-4 py-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-4 rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-muted">
            Training sits beside the consulting work: fire and emergency, HSEQ, leadership, and
            the technical skills an operation actually uses.
          </p>
          <ButtonLink href="/contact">Ask about a program</ButtonLink>
        </div>
      </div>
    </>
  );
}
