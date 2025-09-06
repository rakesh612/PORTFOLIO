import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="w-full max-w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">About</h3>
            <p className="text-gray-400">
              A passionate Full Stack Developer focused on creating exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:rakeshcoc1to11@gmail.com"
                  className="text-gray-400 hover:text-white flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  rakeshcoc1to11@gmail.com
                </a>
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Ongole, India
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/rakesh612"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/hanumath-rakesh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://leetcode.com/u/rakeshnukala/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.653 1.653 0 0 0-.193.215 1.374 1.374 0 0 0-.438.96v6.515a1.374 1.374 0 0 0 1.374 1.374h.194l6.293-6.293a1.374 1.374 0 0 1 1.942 0l6.293 6.293h.194a1.374 1.374 0 0 0 1.374-1.374V11.65a1.374 1.374 0 0 0-.438-.961 1.653 1.653 0 0 0-.215-.193l-3.854-4.126L13.444.438A1.374 1.374 0 0 0 13.483 0zm-2.866 12.815a1.374 1.374 0 0 0-.468.961v6.515a1.374 1.374 0 0 0 1.374 1.374h.194l6.293-6.293a1.374 1.374 0 0 1 1.942 0l6.293 6.293h.194a1.374 1.374 0 0 0 1.374-1.374v-6.515a1.374 1.374 0 0 0-.438-.961 1.653 1.653 0 0 0-.215-.193l-3.854-4.126-5.406-5.788a1.374 1.374 0 0 0-1.942 0l-5.406 5.788-3.854 4.126a1.653 1.653 0 0 0-.193.215z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} HANUMATH RAKESH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 