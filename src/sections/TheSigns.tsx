import { Atom, Dna, Brain, Droplet, Scale, Activity } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const signs = [
  {
    icon: Atom,
    title: 'The Constants',
    body: 'The gravitational constant, the strong nuclear force, the cosmological constant (calibrated to a precision of 1 in 10^60). Alter any by a fraction and no stars form, no chemistry exists, no life is possible. Fortune or architecture?',
  },
  {
    icon: Dna,
    title: 'The Code',
    body: '3.2 billion letters of genetic code in every cell of your body. A language system more information-dense than anything human engineering has ever produced. Languages do not write themselves.',
  },
  {
    icon: Brain,
    title: 'The Observer',
    body: 'Neuroscience maps the correlates of experience. It has never explained experience itself. What is it like to see red? To feel grief? To know that you exist? The hard problem of consciousness has no materialist solution.',
  },
  {
    icon: Droplet,
    title: 'The Exception',
    body: 'Water is the only substance that expands when it freezes (which is why ice floats and life beneath it survives winter). An anomaly in physics that happens to be the condition for all biology.',
  },
  {
    icon: Scale,
    title: 'The Law Within',
    body: 'You believe some things are genuinely wrong (not just unpopular). That belief has no grounding in a universe of purposeless matter. Where does "genuinely wrong" come from if there is no Lawgiver?',
  },
  {
    icon: Activity,
    title: 'The Stages',
    body: 'The Quran described the stages of embryological development (nutfah, alaqah, mudghah) in the 7th century, in language that maps precisely to what microscopy confirmed 1,300 years later.',
  },
];

export default function TheSigns() {
  return (
    <section
      id="signs"
      className="relative bg-main-bg py-20 md:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <ScrollAnimation delay={0}>
            <p
              className="font-amiri text-gold text-3xl md:text-4xl lg:text-5xl mb-6 leading-relaxed"
              lang="ar"
              dir="rtl"
            >
              سَنُرِيهِمْ ءَايَـٰتِنَا فِى ٱلْـَٔافَاقِ وَفِىٓ أَنفُسِهِمْ
              حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ ٱلْحَقُّ
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <h2 className="font-playfair text-primary-text text-2xl md:text-3xl lg:text-4xl mb-4">
              "We will show them Our signs in the universe and within
              themselves until it becomes clear to them that this is the truth.
              Is it not enough that your Lord is a Witness over all things?"
            </h2>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <p className="font-inter text-secondary-text text-sm md:text-base">
              Surah Fussilat · 41:53
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signs.map((sign, index) => {
            const Icon = sign.icon;
            return (
              <ScrollAnimation key={sign.title} delay={index * 100}>
                <div className="bg-[#1a1a2e] rounded-xl p-8 transition-all duration-300 hover:border hover:border-gold group h-full">
                  <Icon className="text-gold w-12 h-12 mb-4" />
                  <h3 className="font-playfair text-primary-text text-xl md:text-2xl mb-3">
                    {sign.title}
                  </h3>
                  <p className="font-inter text-primary-text/90 text-base leading-relaxed">
                    {sign.body}
                  </p>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
