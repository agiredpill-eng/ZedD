import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const messengers = [
  {
    name: 'Adam (AS)',
    title: 'The First Assignment',
    body: 'Created directly by Allah. Given knowledge the angels did not possess. Tested and failed. Then turned back. The first lesson in human history: you were made for purpose, and when you fall, the door back is repentance, not despair.',
  },
  {
    name: 'Nuh / Noah (AS)',
    title: '950 Years of Persistence',
    body: 'Sent to a people who laughed at him for nearly a millennium. Built the ark while they mocked. When the water came, the line between the saved and the lost was not wealth, status, or intelligence. It was whether they listened.',
  },
  {
    name: 'Ibrahim / Abraham (AS)',
    title: 'The One-Man Army',
    body: 'Challenged his father, his tribe, and the most powerful king of his age - alone. Smashed the idols. Was thrown into fire. Never flinched. Ibrahim did not have peer pressure. He had a Commander.',
  },
  {
    name: 'Musa / Moses (AS)',
    title: 'Confronting the Superpower',
    body: 'Sent back to the empire that raised him - to face the man who claimed to be God. Armed with nothing but a staff and a mandate. Musa\'s mission was not diplomacy. It was a direct challenge to illegitimate authority.',
  },
  {
    name: 'Isa / Jesus (AS)',
    title: 'The Restorer',
    body: 'Born miraculously. Spoke from the cradle. Healed the sick by Allah\'s permission. Sent to a people who had corrupted the message of Musa. Isa did not come to be worshipped. He came to redirect worship to the One who sent him.',
  },
  {
    name: 'Muhammad (SAW)',
    title: 'The Final Messenger',
    body: 'Unlettered. Orphaned. Emerged from a society of tribal warfare, infanticide, and idol worship. Within 23 years, transformed it into a civilisational force that stretched from Spain to China within a century. The question is not whether this happened. It is by what mechanism.',
  },
];

export default function TheMessengers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="messengers" className="bg-alt-bg py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <ScrollAnimation delay={0}>
            <h2 className="font-playfair text-gold text-3xl md:text-4xl lg:text-5xl mb-4">
              THE MESSENGERS — Deployed With Purpose
            </h2>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <p className="font-inter text-secondary-text text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Every Prophet was sent to a people in crisis — moral, political,
              civilisational. Their message was never just theological. It was a
              complete framework for how to live, govern, and answer to God.
            </p>
          </ScrollAnimation>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gold text-black p-3 rounded-full hover:bg-gold/80 transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-gold text-black p-3 rounded-full hover:bg-gold/80 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto flex gap-6 pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {messengers.map((messenger, index) => (
              <ScrollAnimation key={messenger.name} delay={index * 100}>
                <div className="flex-shrink-0 w-[350px] md:w-[400px] bg-[#0f0f1a] border-t-[3px] border-gold rounded-xl p-8 snap-start h-full">
                  <h3 className="font-playfair text-gold text-xl md:text-2xl mb-3">
                    {messenger.name}
                  </h3>
                  <h4 className="font-playfair text-primary-text text-lg md:text-xl mb-4">
                    {messenger.title}
                  </h4>
                  <p className="font-inter text-primary-text/90 text-base leading-relaxed">
                    {messenger.body}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="md:hidden flex flex-col gap-6 mt-6">
            {messengers.map((messenger, index) => (
              <ScrollAnimation key={messenger.name} delay={index * 100}>
                <div className="bg-[#0f0f1a] border-t-[3px] border-gold rounded-xl p-8">
                  <h3 className="font-playfair text-gold text-xl mb-3">
                    {messenger.name}
                  </h3>
                  <h4 className="font-playfair text-primary-text text-lg mb-4">
                    {messenger.title}
                  </h4>
                  <p className="font-inter text-primary-text/90 text-base leading-relaxed">
                    {messenger.body}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
