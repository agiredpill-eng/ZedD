import { ArrowRight } from 'lucide-react';

const cards = [
  {
    id: 'question',
    label: 'Foundation',
    title: 'The Question',
    description: 'Were you created by nothing? Or did you create yourself? The fundamental inquiry that demands an answer.',
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&q=80',
    href: '#question',
  },
  {
    id: 'signs',
    label: 'Evidence',
    title: 'The Signs',
    description: 'From the cosmos to consciousness, examining the evidence written in the universe and within yourself.',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80',
    href: '#signs',
  },
  {
    id: 'message',
    label: 'Challenge',
    title: 'The Message',
    description: 'An open challenge issued 1,400 years ago. Never met. Never matched. Still standing.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    href: '#message',
  },
  {
    id: 'messengers',
    label: 'History',
    title: 'The Messengers',
    description: 'Every Prophet deployed with purpose. Their missions were complete frameworks for civilization.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    href: '#messengers',
  },
  {
    id: 'challenge',
    label: 'Invitation',
    title: 'The Challenge',
    description: 'Look harder. Test it. Bring your best arguments. The invitation to examine without limits.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    href: '#challenge',
  },
  {
    id: 'podcast',
    label: 'Listen',
    title: 'Insight Chronicles',
    description: 'Prophetic stories reframed as operational mission briefings for those who carry weight.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
    href: '#podcast',
  },
  {
    id: 'videos',
    label: 'Watch',
    title: 'Videos',
    description: 'Visual explorations of theology, purpose, and the questions most people avoid.',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
    href: '#videos',
  },
  {
    id: 'reflections',
    label: 'Read',
    title: 'Reflections',
    description: 'Written addresses on faith, evidence, and the gap between what we believe and how we live.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80',
    href: '#reflections',
  },
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Were You Created By Nothing?
          </h1>
          <p className="font-inter text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
            You did not choose to exist. You did not design the system you live inside.
            Something — or Someone — put you here.
          </p>
          <p className="font-inter text-lg text-gray-500 leading-relaxed">
            This is what happens when you stop avoiding that question.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gold transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-inter font-semibold text-gold uppercase tracking-wider mb-2">
                  {card.label}
                </div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold transition-colors">
                  {card.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed mb-4">
                  {card.description}
                </p>
                <div className="flex items-center text-gold font-inter font-medium text-sm group-hover:gap-2 transition-all">
                  Explore <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-gold text-white font-inter font-semibold px-8 py-4 rounded-lg hover:bg-gold/90 transition-all shadow-lg hover:shadow-xl"
          >
            Learn More About This Work
          </a>
        </div>
      </div>
    </section>
  );
}
