import { Approach } from "@/components/approach";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  description: site.description,
  sameAs: [site.links.github, site.links.linkedin].filter(Boolean),
  knowsAbout: [
    "TypeScript",
    "Next.js",
    "React",
    "Large language model applications",
    "Realtime voice interfaces",
    "Full-stack product engineering",
  ],
  subjectOf: projects.map((project) => ({
    "@type": "SoftwareApplication",
    name: project.title,
    url: project.liveUrl,
    applicationCategory: "WebApplication",
  })),
};

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="skip-link bg-accent-signal px-4 py-2 text-sm font-medium text-background"
      >
        Skip to content
      </a>

      <SiteHeader />

      {/* tabIndex lets the skip link actually move focus here in every browser. */}
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <Hero />
        <SelectedWork />
        <Approach />
        <Contact />
      </main>

      <SiteFooter />
    </>
  );
}
