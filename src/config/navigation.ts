import type { LucideIcon } from "lucide-react";
import { BookOpen, CalendarDays, Gamepad2, Package, Settings, Users, Zap } from "lucide-react";

export type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "evolutions", path: "/evolutions", icon: Zap, isContentType: true },
  { key: "items", path: "/items", icon: Package, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Settings, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Gamepad2, isContentType: true },
  { key: "release", path: "/release", icon: CalendarDays, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
