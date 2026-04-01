import { Podcast, Video, BookOpen, Mail } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const contentLinks = [
  {
    icon: Podcast,
    title: 'Podcast',
    subtitle: 'The Insight Chronicles',
    href: '#podcast',
  },
  {
    icon: Video,
    title: 'Videos',
    subtitle: 'Zed Dean on YouTube',
    href: '#videos',
  },
  {
    icon: BookOpen,
    title: 'Reflections',
    subtitle: 'Written Addresses',
    href: '#reflections',
  },
  {
    icon: Mail,
    title: 'Contact',
    subtitle: 'Get In Touch',
    href: '#contact',
  },
];

export default function Connect() {
  return (
    <section id="connect" className="bg-main-bg py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <ScrollAnimation delay={0}>
              <h2 className="font-playfair text-primary-text text-3xl md:text-4xl mb-6">
                Zed Dean
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="font-inter text-primary-text text-base md:text-lg leading-relaxed space-y-4">
                <p>
                  Writer. Researcher. Theological thinker. Not a scholar (a thinker who follows the evidence and refuses to let either the believer or the sceptic off the hook).
                </p>
                <p>
                  The Insight Chronicles is a series that reframes the stories of the Prophets as operational mission briefings (for veterans, leaders, and anyone who has ever carried weight that most people cannot understand).
                </p>
                <p>
                  This is not religion as you have been sold it. This is the original operating system (before it was diluted, politicised, or reduced to cultural ritual).
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              {contentLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <ScrollAnimation key={link.title} delay={index * 100}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1a1a2e] rounded-xl p-6 transition-all duration-300 hover:border hover:border-gold group block"
                    >
                      <Icon className="text-gold w-10 h-10 mb-3" />
                      <h3 className="font-playfair text-primary-text text-xl mb-1">
                        {link.title}
                      </h3>
                      <p className="font-inter text-secondary-text text-sm">
                        {link.subtitle}
                      </p>
                    </a>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </div>

        <ScrollAnimation delay={600}>
          <div className="mt-16 text-center">
            <div className="max-w-4xl mx-auto border-l-[3px] border-gold bg-crimson/10 pl-8 py-6 italic">
              <p className="font-playfair text-gold text-lg md:text-xl lg:text-2xl leading-relaxed">
                I am not asking you to believe. I am asking you to look more
                carefully at what you already do. You already live as though
                your life has meaning. You already love as though some things
                matter more than others. You already resist injustice as though
                it is genuinely wrong. These are not the behaviours of a being
                who truly believes they are a temporary arrangement of atoms in
                a purposeless universe. What do you think that gap reveals?
              </p>
            </div>

            <div className="mt-10">
              <a
                href="#podcast"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal text-white font-inter font-medium px-10 py-4 rounded-lg hover:bg-teal/80 transition-all duration-300 hover:shadow-lg hover:shadow-teal/50"
              >
                Explore The Insight Chronicles
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
