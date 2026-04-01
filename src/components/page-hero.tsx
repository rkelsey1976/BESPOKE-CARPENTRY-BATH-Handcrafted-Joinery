import Image from "next/image";
import Link from "next/link";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: "image" | "tinted" | "minimal";
  actions?: HeroAction[];
};

export function PageHero({
  badge,
  title,
  description,
  imageSrc,
  imageAlt,
  variant = "image",
  actions = [],
}: PageHeroProps) {
  const backgroundImage = imageSrc ?? "/hero-carpenter.webp";
  const computedHeroAlt =
    imageAlt ?? `${title} - bespoke carpentry and joinery service in Bath Somerset`;
  const overlayByVariant =
    variant === "minimal"
      ? "linear-gradient(120deg, rgba(36, 50, 61, 0.62) 0%, rgba(58, 74, 87, 0.5) 35%, rgba(200, 107, 90, 0.26) 70%, rgba(169, 83, 69, 0.36) 100%)"
      : variant === "tinted"
        ? "linear-gradient(120deg, rgba(36, 50, 61, 0.66) 0%, rgba(58, 74, 87, 0.54) 35%, rgba(200, 107, 90, 0.3) 70%, rgba(169, 83, 69, 0.4) 100%)"
        : "linear-gradient(120deg, rgba(36, 50, 61, 0.68) 0%, rgba(58, 74, 87, 0.56) 35%, rgba(200, 107, 90, 0.34) 70%, rgba(169, 83, 69, 0.44) 100%)";

  return (
    <header className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden py-10 text-[#F7F8F5] md:py-14">
      <Image
        src={backgroundImage}
        alt={computedHeroAlt}
        fill
        priority
        fetchPriority="high"
        loading="eager"
        sizes="100vw"
        quality={72}
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: overlayByVariant,
        }}
        aria-hidden
      />
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-2 md:items-center">
        <div className="hero-content-shade">
          {imageAlt ? <span className="sr-only">{imageAlt}</span> : null}
          <p className="hero-badge">
            {badge}
          </p>
          <h1 className="hero-title">
            {title}
          </h1>
          <p className="hero-copy md:text-lg">
            {description}
          </p>
          {actions.length ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {actions.map((action) => (
                <Link
                  key={action.href + action.label}
                  href={action.href}
                  className={
                    action.variant === "secondary"
                      ? "hero-btn-secondary"
                      : "hero-btn-primary"
                  }
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        <div className="hidden overflow-hidden rounded-xl bg-transparent p-2 sm:p-4 md:block">
          <Image
            src="/new-logo-light.svg"
            alt="Bespoke Carpentry Bath logo mark"
            width={720}
            height={720}
            className="hero-logo-twist hero-logo-watermark sm:w-[68%]"
          />
        </div>
      </div>
    </header>
  );
}
