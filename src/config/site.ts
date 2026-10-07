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
  supportEmail: "support@warhammersurvivors.top",
  gameUrl: "https://store.steampowered.com/app/3669620/Warhammer_Survivors/",
  heroVideoId: "XvvWBS2uMw8", // Warhammer Survivors: Official Trailer (Warhammer channel)
  social: {
    discord: "https://discord.com/invite/aurochdigital",
    youtube: "https://www.youtube.com/@AurochDigital",
  },
  locales: ["en", "de", "fr", "es"],
  defaultLocale: "en",
};
