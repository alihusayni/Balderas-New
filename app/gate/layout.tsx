import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preview Access | Balderas Demolition Inc.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
