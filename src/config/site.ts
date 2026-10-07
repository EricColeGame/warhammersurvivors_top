export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Warhammer Survivors Wiki",
  shortName: "Warhammer Survivors",
  logoText: "W",
  tagline: "Grimdark Bullet Heaven Survival Guides, Builds & Weapon Evolutions",
  description: "A complete Warhammer Survivors wiki covering gameplay guides, characters, weapons, upgrades, builds, enemies, and survival strategies for players.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://warhammersurvivors.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://warhammersurvivors.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3669620/Warhammer_Survivors/",
  heroVideoId: "WODiRnsHQYk", // Warhammer Survivors - Official Reveal Trailer
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
