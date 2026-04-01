import ScrollAnimation from '../components/ScrollAnimation';

export default function YouWereMade() {
  return (
    <section id="question" className="bg-alt-bg py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <ScrollAnimation delay={0}>
              <p
                className="font-amiri text-gold text-3xl md:text-4xl lg:text-5xl leading-relaxed"
                lang="ar"
                dir="rtl"
              >
                نَحْنُ خَلَقْنَـٰكُمْ فَلَوْلَا تُصَدِّقُونَ · أَفَرَءَيْتُم مَّا
                تُمْنُونَ
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <h2 className="font-playfair text-primary-text text-2xl md:text-3xl lg:text-4xl">
                "It is We Who created you. Will you not then believe? Have you
                considered what you ejaculate?"
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <p className="font-inter text-secondary-text text-sm md:text-base">
                Surah Al-Waqi'ah · 56:57-58
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={600}>
              <div className="space-y-4 font-inter text-primary-text text-base md:text-lg leading-relaxed">
                <p>
                  Every human being who has ever lived began as something they had no control over. You did not choose your DNA. You did not design your nervous system. You did not engineer the 37 trillion cells that coordinate right now to keep you reading this sentence.
                </p>
                <p>
                  The question is not whether design exists. You are looking at it every time you look in the mirror. The question is whether you are honest enough to ask who the Designer is.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={800}>
              <div className="border-l-[3px] border-gold bg-crimson/10 pl-6 py-4 italic">
                <p className="font-playfair text-primary-text text-lg md:text-xl leading-relaxed">
                  "You trust your eyes to see, your lungs to breathe, your heart to beat: all systems you did not build and cannot fully explain. On what basis do you then distrust the One who built them?"
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={400}>
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=1200&q=80"
                alt="Human eye macro shot showing biological precision"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
