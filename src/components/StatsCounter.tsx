import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 52000, suffix: "+", label: "Questions" },
  { value: 1100, suffix: "+", label: "Examens" },
  { value: 24000, suffix: "+", label: "Commentaires" },
];

const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
};

const StatsCounter = () => {
  return (
    <div className="flex flex-wrap gap-8">
      {stats.map((stat) => {
        const { count, ref } = useCountUp(stat.value);
        return (
          <div key={stat.label} ref={ref} className="animate-count-up">
            <div className="text-3xl md:text-4xl font-heading font-bold text-accent">
              {count.toLocaleString()}{stat.suffix}
            </div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCounter;
