import Link from "next/link";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length < 2) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="pt-1 pb-0 text-sm md:pt-2 md:pb-0">
      <ol className="flex flex-wrap items-center gap-2 text-slate-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="font-semibold text-slate-900">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="underline underline-offset-4 hover:text-[#8C4337]">
                  {item.name}
                </Link>
              )}
              {!isLast ? <span aria-hidden className="text-slate-400">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
