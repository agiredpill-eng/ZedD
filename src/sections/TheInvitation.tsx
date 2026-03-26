import { useEffect, useState } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';

const gratitudeFavours = [
  'Your eyesight',
  'Your hearing',
  'Your heartbeat',
  'Clean water',
  'The ability to love',
  'The ability to grieve',
  'Sunrise',
  'Rainfall',
  'The person who raised you',
  'The breath you just took',
  'Language',
  'Memory',
  'Hope',
  'The fact that you are reading this right now',
];

export default function TheInvitation() {
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const section = document.querySelector('#invitation');
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
      id="invitation"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=2000&q=80)',
          transform: `translateY(-${parallaxOffset}px)`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center space-y-8">
          <ScrollAnimation delay={0}>
            <p
              className="font-amiri text-gold text-4xl md:text-5xl lg:text-6xl mb-6 leading-relaxed"
              lang="ar"
              dir="rtl"
            >
              فَبِأَىِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <h2 className="font-playfair text-primary-text text-2xl md:text-3xl lg:text-4xl mb-4">
              "Then which of your Lord's favours will you both deny?"
            </h2>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <p className="font-inter text-secondary-text text-sm md:text-base">
              Surah Ar-Rahman · 55:13
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={600}>
            <div className="space-y-6 font-inter text-primary-text text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                This verse is repeated 31 times in Surah Ar-Rahman — the
                chapter named after the Most Compassionate. Thirty-one times.
                Not because Allah forgot He said it. Because you keep forgetting
                what it means.
              </p>
              <p>
                Every breath you take is a favour. Every heartbeat. Every
                sunrise. Every person who ever loved you. Every moment of
                beauty that stopped you in your tracks. Every time you felt —
                even for a second — that there must be more to this than atoms
                and accidents.
              </p>
              <p>
                That feeling is not a malfunction. It is a signal. And the One
                sending it has been patient with you longer than you know.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={800}>
            <div className="mt-12 bg-black/40 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto">
              <div className="h-[300px] overflow-hidden relative">
                <div className="gratitude-ticker">
                  {[...gratitudeFavours, ...gratitudeFavours].map(
                    (favour, index) => (
                      <div
                        key={index}
                        className={`font-inter text-lg md:text-xl py-3 ${
                          index % 2 === 0 ? 'text-gold' : 'text-primary-text'
                        }`}
                      >
                        {favour}
                      </div>
                    )
                  )}
                </div>
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <style>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .gratitude-ticker {
          animation: scroll-up 30s linear infinite;
        }

        .gratitude-ticker:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .gratitude-ticker {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
