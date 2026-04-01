export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-white flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center py-24">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 mb-10 leading-tight">
          Were You Created By Nothing?
        </h1>

        <div className="font-inter text-xl md:text-2xl text-gray-700 leading-snug mb-2">
          You didn't choose to be here.
        </div>
        <div className="font-inter text-xl md:text-2xl text-gray-700 leading-snug mb-2">
          You didn't write the rules you live by.
        </div>
        <div className="font-inter text-xl md:text-2xl text-gray-700 leading-snug mb-2">
          You didn't design the conscience that won't let certain things go.
        </div>
        <div className="font-inter text-xl md:text-2xl text-gray-700 leading-snug mb-10">
          Something put all of that in place before you arrived.
        </div>

        <div className="font-inter text-lg text-gray-500 leading-snug mb-1">
          Most people spend their entire lives looking away from that fact.
        </div>
        <div className="font-inter text-lg text-gray-500 leading-snug mb-12">
          This is for the ones who can't.
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-gray-900 text-white font-inter font-semibold px-8 py-4 rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            Start Here
          </a>
          <a
            href="#podcast"
            className="inline-flex items-center gap-2 bg-gold text-white font-inter font-semibold px-8 py-4 rounded-lg hover:bg-gold/90 transition-all shadow-lg hover:shadow-xl"
          >
            Listen to the Podcast
          </a>
        </div>
      </div>
    </section>
  );
}
