"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-03T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Wedding Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 space-y-6 max-w-3xl">
        <p className="text-primary text-lg tracking-widest uppercase font-lora">
          ይድረስ ለወዳጅ ለዘመድ
        </p>

        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground leading-tight">
          አለማየሁ ብርሃኑ <div className="flont-playfair">&</div> መሰረት ዳኜ
        </h1>
        <div className="flex items-center justify-center p-4">
          <div className="relative w-12 h-12">
            <div className="absolute top-0 left-0 w-8 h-8 rounded-full border-2 border-yellow-500"></div>

            <div className="absolute top-0 left-4 w-8 h-8 rounded-full border-2 border-yellow-500"></div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: "ቀናት", value: timeLeft.days },
            { label: "ሰዓታት", value: timeLeft.hours },
            { label: "ደቂቃዎች", value: timeLeft.minutes },
            { label: "ሴኮንዶች", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl bg-white/10 p-5 backdrop-blur-sm border border-white/10"
            >
              <p className="text-5xl md:text-6xl font-playfair font-bold text-foreground leading-none">
                {String(item.value).padStart(2, "0")}
              </p>
              <span className="text-sm uppercase tracking-[0.3em] text-foreground/60 mt-2 block">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl text-foreground/80 font-lora italic">
          "ስለዚህ እግዚአብሔር ያጣመረውን ሰው አይለየው" (ማርቆስ 10:9)
        </p>

        <div className="pt-8">
          <p className="text-foreground/60 text-lg">
            ቀጣዩን ለማየት ወደታች scroll ያርጉት
          </p>
          <div className="animate-bounce mt-4">
            <svg
              className="w-6 h-6 mx-auto text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
