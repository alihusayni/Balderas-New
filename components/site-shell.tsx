"use client";

import { usePathname } from "next/navigation";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGatePage = pathname === "/gate";

  if (isGatePage) return null;

  return <>{children}</>;
}
