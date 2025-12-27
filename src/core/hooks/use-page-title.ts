import { useEffect } from "react";

interface UsePageTitleOptions {
  title: string;
  suffix?: string;
}

export function usePageTitle({ title, suffix = "SIMS PPOB - Elham Syahrian Putra" }: UsePageTitleOptions) {
  useEffect(() => {
    const fullTitle = suffix ? `${title} | ${suffix}` : title;
    document.title = fullTitle;

    return () => {
      document.title = "SIMS PPOB";
    };
  }, [title, suffix]);
}
