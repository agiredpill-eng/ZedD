import { Youtube, Podcast, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Content</h3>
            <ul className="space-y-3 font-inter text-sm text-gray-400">
              <li>
                <a href="#question" className="hover:text-gold transition-colors">
                  The Question
                </a>
              </li>
              <li>
                <a href="#signs" className="hover:text-gold transition-colors">
                  The Signs
                </a>
              </li>
              <li>
                <a href="#message" className="hover:text-gold transition-colors">
                  The Message
                </a>
              </li>
              <li>
                <a href="#messengers" className="hover:text-gold transition-colors">
                  The Messengers
                </a>
              </li>
              <li>
                <a href="#challenge" className="hover:text-gold transition-colors">
                  The Challenge
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Media</h3>
            <ul className="space-y-3 font-inter text-sm text-gray-400">
              <li>
                <a href="#podcast" className="hover:text-gold transition-colors">
                  Insight Chronicles Podcast
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-gold transition-colors">
                  Videos
                </a>
              </li>
              <li>
                <a href="#reflections" className="hover:text-gold transition-colors">
                  Reflections
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">About</h3>
            <ul className="space-y-3 font-inter text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  About Zed Dean
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-3 font-inter text-sm text-gray-400">
              <li>
                <a
                  href="#podcast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors flex items-center gap-2"
                >
                  <Podcast size={16} /> Podcast
                </a>
              </li>
              <li>
                <a
                  href="#videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors flex items-center gap-2"
                >
                  <Youtube size={16} /> YouTube
                </a>
              </li>
              <li>
                <a
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors flex items-center gap-2"
                >
                  <Twitter size={16} /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gold transition-colors flex items-center gap-2"
                >
                  <Mail size={16} /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-playfair text-gold text-xl">Zed Dean</div>
            <div className="font-inter text-sm text-gray-400">
              Built on truth. Not trend.
            </div>
            <div className="font-inter text-sm text-gray-500">
              © 2026 Zed Dean. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
