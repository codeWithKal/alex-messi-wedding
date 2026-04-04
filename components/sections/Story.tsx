"use client";

import Image from "next/image";

export function Story() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-[500px]">
            <Image
              src="/story-image.jpg"
              alt="Our Story"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-primary text-sm tracking-widest uppercase font-lora">
              ታሪካችን
            </p>

            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
              ትውውቅ
            </h2>

            <p className="text-foreground/70 text-lg font-lora leading-relaxed">
              ገና በለጋ እድሜያችን ነበር በአንዲት የተቀደሰች እለተ እሁድ ቀን፣  የሰንበት ት/ቤት አዳራሽ ውስጥ
              የተያየነው የእግዚያብሔር ስራ ድንቅ ኣይደል፧ እንደተያየንም አልቀረም ብዙ የህይወት ውጣ ውረዶችን
              አሳለፍን ትንሽ የማይባሉ ኣስተማሪ ፈተናዎችን መካክል በፍቅራችን ጸናን እናም የእግዚያብሔር ቸርነት
              ታክሎበት ለዚህች የተቀደሰች ቀን አደረሰን።
              <p className="text-foreground/70 text-lg font-lora leading-relaxed">
                በፈተናዎች መካከል እንድንጸና ከጎናችን ሆናችሁ ስታግዙን ለነበራችሁ ይህችን ውብ ቀን ከኛው እኩል
                ለማየት የጓጓችሁ በሙሉ እግዚያብሄር ረድቶን ለዚህ ደርሰናልና እኛን ደስ ብሎናል እናንተንም የደስታችን
                ተካፍይ ትሆኑ ዘንድ ጋብዘናችኋል
              </p>
            </p>

            <div className="pt-6">
              <p className="text-primary font-playfair text-2xl italic">
                ስለዚህ ሰው አባቱንና እናቱን ይተዋል፥ በሚስቱም ይጣበቃል፤ ሁለቱም አንድ ሥጋ ይሆናሉ ዘፍጥረት
                2፥24
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
