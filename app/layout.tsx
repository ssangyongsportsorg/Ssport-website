import { RootProvider } from "next-docs-ui/provider";
import type { ReactNode } from "react";
import "next-docs-ui/style.css";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-tw">
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
