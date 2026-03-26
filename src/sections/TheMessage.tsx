import ScrollAnimation from '../components/ScrollAnimation';

export default function TheMessage() {
  return (
    <section id="message" className="bg-black py-20 md:py-32">
      <div id="challenge" className="absolute -top-20" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center space-y-8">
          <div className="border border-gold/30 p-8 md:p-12 rounded-lg shadow-[0_0_30px_rgba(212,168,67,0.15)]">
            <ScrollAnimation delay={0}>
              <p
                className="font-amiri text-gold text-3xl md:text-4xl lg:text-5xl mb-6 leading-relaxed"
                lang="ar"
                dir="rtl"
              >
                وَإِن كُنتُمْ فِى رَيْبٍۢ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا
                فَأْتُوا۟ بِسُورَةٍۢ مِّن مِّثْلِهِۦ وَٱدْعُوا۟ شُهَدَآءَكُم مِّن
                دُونِ ٱللَّهِ إِن كُنتُمْ صَـٰدِقِينَ
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <h2 className="font-playfair text-primary-text text-2xl md:text-3xl lg:text-4xl mb-4">
                "And if you are in doubt about what We have revealed to Our
                servant, then produce a sûrah like it and call your helpers
                other than Allah, if what you say is true."
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <p className="font-inter text-secondary-text text-sm md:text-base">
                Surah Al-Baqarah · 2:23
              </p>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={600}>
            <div className="space-y-6 font-inter text-primary-text text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                This challenge was issued 1,400 years ago. It has never been
                met.
              </p>
              <p>
                Not by the poets of pre-Islamic Arabia — the most
                linguistically sophisticated civilisation of their age. Not by
                the empires that opposed Islam militarily. Not by the
                Orientalist scholars who studied it for centuries.
              </p>
              <p>
                The Quran does not ask for blind faith. It asks you to test it.
                Bring your best minds, your best arguments, your best
                alternatives — and produce something comparable. The challenge
                stands open. It always has.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <ScrollAnimation delay={800}>
              <div className="border-t-2 border-gold pt-6">
                <p className="font-inter text-primary-text text-base md:text-lg leading-relaxed">
                  Not a history book — though its historical claims have never
                  been disproven.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={900}>
              <div className="border-t-2 border-gold pt-6">
                <p className="font-inter text-primary-text text-base md:text-lg leading-relaxed">
                  Not a science textbook — though it contains no contradiction
                  with established science.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={1000}>
              <div className="border-t-2 border-gold pt-6">
                <p className="font-inter text-primary-text text-base md:text-lg leading-relaxed">
                  Not a philosophy treatise — though it answers questions
                  philosophy cannot.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={1100}>
            <p className="font-playfair italic text-primary-text/80 text-lg md:text-xl max-w-3xl mx-auto mt-10">
              It is a direct communication from the Creator of the universe to
              the species He created — delivered through a man who could not
              read or write, in a language whose structure has never been
              replicated.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
