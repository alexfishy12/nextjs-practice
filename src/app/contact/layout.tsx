import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "A contact page where multiple forms of contact are made available.",
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
