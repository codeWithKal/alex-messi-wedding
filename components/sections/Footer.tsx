"use client";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-primary/20">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-primary font-playfair text-lg font-bold mb-4">
              አለማየሁ ብርሃኑ እና መሰረት ዳኜ
            </h3>
            <p className="text-foreground/60 font-lora text-sm">
              ኤፌሶን 5:33 - "ሆኖም ከእናንተ እያንዳንዱ ደግሞ የገዛ ሚስቱን እንደ ራሱ አድርጎ ይውደዳት፥ ሚስቱም
              ባሏን ትፍራ።"
            </p>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 font-lora text-sm">
            © 2018 አለማየሁ ብርሃኑ እና መሰረት ዳኜ. ሁሉም የቅጂ መብቶች እንደተጠበቁ ናቸው.
          </p>
          <p className="text-foreground/50 font-lora text-sm mt-4 md:mt-0">
            ስለመጡ አናመሰግናለን
          </p>
        </div>
        <div className="mt-8 bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
          <p className="text-primary font-semibold text-sm mb-1">
            መሰል ዘመናዊ መጥሪዎችን ለተለያዩ ዝግጅት ይፈለጋሉ? እንግዳውስ
          </p>
          <p className="text-foreground/70 text-xs">
            በቴሌግራም:{" "}
            <a
              className="text-primary underline"
              href="https://t.me/kaladorr"
              target="_blank"
              rel="noreferrer"
            >
              t.me/kaladorr
            </a>{" "}
            ወይም ስልክ{" "}
            <a className="text-primary underline" href="tel:+251973142596">
              +251 973 142 596
            </a>
            ላይ እንገኛለን ። እናመሰግናለን!
          </p>
        </div>
      </div>
    </footer>
  );
}
