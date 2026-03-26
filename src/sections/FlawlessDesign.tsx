import { useEffect, useState } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';

export default function FlawlessDesign() {
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const section = document.querySelector('#design');
      if (section) {
        const rect = section.getBoundingClientRect();
        const offset = Math.max(0, window.innerHeight - rect.top);
        setParallaxOffset(offset * 0.3);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="design"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80)',
          transform: `translateY(-${parallaxOffset}px)`,
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <ScrollAnimation delay={0}>
          <p
            className="font-amiri text-gold text-3xl md:text-4xl lg:text-5xl mb-6 leading-relaxed"
            lang="ar"
            dir="rtl"
          >
            ٱلَّذِى خَلَقَ سَبْعَ سَمَـٰوَٰتٍۢ طِبَاقًۭا ۖ مَّا تَرَىٰ فِى
            خَلْقِ ٱلرَّحْمَـٰنِ مِن تَفَـٰوُتٍۢ ۖ فَٱرْجِعِ ٱلْبَصَرَ هَلْ تَرَىٰ
            مِن فُطُورٍۢ
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <h2 className="font-playfair text-primary-text text-2xl md:text-3xl lg:text-4xl mb-4">
            "He is the One Who created seven heavens, one above the other. You
            will never see any imperfection in the creation of the Most
            Compassionate. So look again: do you see any flaws?"
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={400}>
          <p className="font-inter text-secondary-text text-sm md:text-base mb-8">
            Surah Al-Mulk · 67:3
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={600}>
          <div className="space-y-4 font-inter text-primary-text text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            <p>
              This is not a statement of faith. It is an open challenge. Look
              at the night sky. Examine the structure of a leaf. Study the
              mathematics of orbital mechanics. The Quran does not ask you to
              stop looking. It asks you to look harder — and report what you
              find.
            </p>
            <p>
              Every scientific discipline that has ever existed has been an
              exercise in discovering order where chaos was expected. Physics
              finds laws. Biology finds systems. Chemistry finds precision. The
              universe is not random. It is authored.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={800}>
          <div className="mt-10 p-6 bg-gold/10 border border-gold/30 rounded-lg">
            <p className="font-inter text-primary-text text-lg md:text-xl">
              Your heart has beaten approximately{' '}
              <span className="text-gold font-bold">2.5 billion</span> times
              since you were born. Not once did you command it to.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
