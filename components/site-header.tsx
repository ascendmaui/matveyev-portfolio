import { navigation, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[92rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="type-mono flex items-center gap-2.5 text-[0.78rem] tracking-tight"
        >
          <span aria-hidden="true" className="size-1.5 shrink-0 bg-accent-signal" />
          <span className="hidden sm:inline">{site.name}</span>
          <span className="sm:hidden">JM</span>
        </a>

        <nav aria-label="Sections" className="flex items-center gap-7">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="type-label text-dim transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
