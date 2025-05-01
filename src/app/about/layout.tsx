import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "An about page that describes the website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}
