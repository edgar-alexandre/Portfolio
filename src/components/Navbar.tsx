import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Projetos', path: '/projetos' },
  { name: 'Contato', path: '/contatos' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 px-4 sm:px-6 md:px-12 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-[#FFFDF6] border-2 border-black rounded-xl p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <Link
            to="/"
            className="font-black text-lg sm:text-xl tracking-tight text-black flex items-center gap-2"
          >
            <span className="bg-[#FFC567] border-2 border-black px-2 py-0.5 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              EDGAR
            </span>
            <span className="text-black">ALEXANDRE</span>
          </Link>

          <ul className="hidden md:flex gap-3 items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-xs font-black uppercase tracking-wider px-4 py-2 rounded-lg border-2 transition-all ${
                      isActive
                        ? 'bg-[#FB7DA8] text-black border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                        : 'bg-transparent text-black border-transparent hover:border-black hover:bg-[#FFC567]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-black bg-[#FFC567] border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#FFFDF6] flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="border-2 border-black bg-[#FFC567] p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex gap-2 mb-6 border-b-2 border-black pb-3">
                <span className="w-3 h-3 rounded-full bg-[#FD5A46] border border-black" />
                <span className="w-3 h-3 rounded-full bg-[#FFC567] border border-black" />
                <span className="w-3 h-3 rounded-full bg-[#00995E] border border-black" />
              </div>

              <ul className="flex flex-col gap-4">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className={`block text-2xl font-black p-3 rounded-lg border-2 border-black ${
                          isActive
                            ? 'bg-[#FB7DA8] text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-white text-black'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center font-mono text-xs font-bold text-black uppercase">
              alexandreedgar77@gmail.com
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}