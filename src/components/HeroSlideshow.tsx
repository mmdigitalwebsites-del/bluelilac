import { useEffect, useState } from "react";

type Props = {
  slides: string[];
  className?: string;
};

/**
 * Renders only the slides that are needed:
 *  - slide 0 is eager + high priority (this is your LCP element)
 *  - every other slide is lazy and is only mounted  once it has been reached
 * This avoids decoding 13 full-size images on first paint.
 */
export function HeroSlideshow({ slides, className = "" }: Props) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState<Set<number>>(() => new Set([0]));

  useEffect(() => {
    // Don't start the carousel until the browser is idle after load —
    // keeps the main thread free during the LCP window.
    let timer: ReturnType<typeof setInterval> | undefined;

    const start = () => {
      timer = setInterval(() => {
        setIndex((current) => {
          const next = (current + 1) % slides.length;
          setMounted((prev) => {
            if (prev.has(next)) return prev;
            const copy = new Set(prev);
            copy.add(next);
            // pre-mount the one after next so it can decode ahead of time
            copy.add((next + 1) % slides.length);
            return copy;
          });
          return next;
        });
      }, 6000);
    };

    const idle =
      typeof window !== "undefined" && "requestIdleCallback" in window
        ? window.requestIdleCallback(start, { timeout: 3000 })
        : window.setTimeout(start, 2500);

    return () => {
      if (timer) clearInterval(timer);
      if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idle as number);
      } else {
        clearTimeout(idle as number);
      }
    };
  }, [slides.length]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {slides.map((img, i) => {
        if (!mounted.has(i)) return null;
        const isFirst = i === 0;
        return (
          <img
            key={img}
            src={img}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1080}
            loading={isFirst ? "eager" : "lazy"}
            decoding={isFirst ? "sync" : "async"}
            // @ts-expect-error fetchPriority is valid DOM, types lag behind
            fetchpriority={isFirst ? "high" : "low"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        );
      })}
    </div>
  );
}
