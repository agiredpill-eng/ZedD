export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Zed Dean
            </h2>
          </div>

          <div className="space-y-6 font-inter text-lg text-gray-700 leading-relaxed">
            <p>
              Writer. Researcher. Theological thinker. Not a scholar — a thinker who follows
              the evidence and refuses to let either the believer or the sceptic off the hook.
            </p>

            <p>
              The Insight Chronicles is a series that reframes the stories of the Prophets
              as operational mission briefings — for veterans, leaders, and anyone who has
              ever carried weight that most people cannot understand.
            </p>

            <p className="text-gray-900 font-medium">
              This is not religion as you have been sold it. This is the original operating
              system — before it was diluted, politicised, or reduced to cultural ritual.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-200">
            <blockquote className="font-playfair text-2xl text-gray-800 italic leading-relaxed">
              "I am not asking you to believe. I am asking you to look more carefully at
              what you already do. You already live as though your life has meaning. You
              already love as though some things matter more than others. You already resist
              injustice as though it is genuinely wrong. These are not the behaviours of a
              being who truly believes they are a temporary arrangement of atoms in a
              purposeless universe. What do you think that gap reveals?"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
