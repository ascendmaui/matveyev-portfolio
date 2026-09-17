import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-[92rem] flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="type-mono text-[0.72rem] text-dim">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="type-label text-dim">{site.role}</p>
      </div>
    </footer>
  );
}
