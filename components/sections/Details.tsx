"use client";

export function Details() {
  const events = [
    {
      title: "ፕሮግራም መጀመርያ",
      time: "10:00 PM",
      location: "ሰንዳፋ",
      address: "በመኖርያ ቤት",
    },
    {
      title: "የምሳ ግብዣ ስነስርዐት",
      time: "1:00 PM",
      location: "ሰንዳፋ",
      address: "በመኖርያ ቤት",
    },
    {
      title: "የፎቶ መነሳትና የስጦታ ስነስርአት",
      time: "8:30 PM",
      location: "ሰንዳፋ",
      address: "በመኖርያ ቤት",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase font-lora">
            ዕለታዊ የመርሃግብር ዝርዝር
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mt-4">
            የጋብቻው ቀን
          </h2>
          <p className="text-foreground/60 text-lg font-lora mt-4">
            እሁድ ፣ ሚያዝያ 25, 2018
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-background/50 p-8 rounded-lg border border-primary/20"
            >
              <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                {event.title}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-primary text-sm uppercase tracking-wide">
                    ሰዐት
                  </p>
                  <p className="text-foreground text-lg font-lora">
                    {event.time}
                  </p>
                </div>
                <div>
                  <p className="text-primary text-sm uppercase tracking-wide">
                    አድራሻ
                  </p>
                  <p className="text-foreground text-lg font-lora">
                    {event.location}
                  </p>
                </div>
                <div>
                  <p className="text-primary text-sm uppercase tracking-wide">
                    ዝግጅቱ የሚከናወንበት ቦታ
                  </p>
                  <p className="text-foreground/70 text-sm font-lora">
                    {event.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
