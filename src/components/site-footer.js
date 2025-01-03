"use client";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();
  console.log(pathname);
  if (
    pathname === "/explore" ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/view") ||
    pathname.startsWith("/certificate")
  )
    return <></>;
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={"https://"}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Swayam and Vivek
          </a>
          . The source code is available on{" "}
          <a
            href={"https://"}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
