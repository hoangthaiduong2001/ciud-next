import { Metadata } from "next";

export const metadata: Metadata = {
  title: "This page view blogs",
  description: "This page view blogs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
