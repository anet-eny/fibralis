"use client";

import { useEffect, useRef, useState } from "react";

type UseRevealOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useReveal<T extends HTMLElement = HTMLElement>({
  threshold = 0.14,
  rootMargin = "0px 0px -6% 0px",
  once = true,
}: UseRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
          return;
        }

        if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, visible };
}
