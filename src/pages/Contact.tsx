import { motion } from 'motion/react';
import Layout from '../components/Layout';
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  {
    name: 'E-mail',
    value: 'alexandreedgar77@gmail.com',
    href: 'mailto:alexandreedgar77@gmail.com',
    icon: <Mail size={22} />,
    bgColor: 'bg-[#FFC567]'
  },
  {
    name: 'LinkedIn',
    value: 'edgar-alexandre-0aab0539b',
    href: 'https://linkedin.com/in/edgar-alexandre-0aab0539b',
    icon: <Linkedin size={22} />,
    bgColor: 'bg-[#058CD7]',
    textColor: 'text-white'
  },
  {
    name: 'GitHub',
    value: '@edgar-alexandre',
    href: 'https://github.com/edgar-alexandre',
    icon: <Github size={22} />,
    bgColor: 'bg-[#FB7DA8]'
  },
  {
    name: 'Telefone',
    value: '+244 975 696 347',
    href: 'tel:+244975696347',
    icon: <Phone size={22} />,
    bgColor: 'bg-[#00995E]',
    textColor: 'text-white'
  }
];

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <div className="inline-block bg-[#FFC567] border-2 border-black px-4 py-1 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4">
            <span className="font-mono text-xs font-black uppercase">// VAMOS TRABALHAR TOGETHER</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-fluid-h1 leading-[0.9] mb-6 text-black"
          >
            VAMOS <span className="bg-[#FD5A46] text-white border-2 border-black px-1 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">CONVERSAR.</span>
          </motion.h1>
          <p className="text-fluid-body text-black max-w-2xl font-medium leading-relaxed">
            Sempre disponível para novos desafios profissionais, projetos freelances ou integração em equipas de alto nível.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#FFFDF6] border-2 border-black p-8 rounded-2xl flex flex-col justify-between h-56 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              <div className="flex justify-between items-start">
                <div className={`p-3 border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${link.bgColor} ${link.textColor || 'text-black'}`}>
                  {link.icon}
                </div>
                <div className="p-2 bg-black text-white rounded-lg group-hover:bg-[#FD5A46] transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div>
                <p className="text-xs font-mono font-black uppercase text-black/60 mb-1">
                  {link.name}
                </p>
                <p className="text-lg md:text-xl font-black text-black break-words">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs font-bold text-black uppercase text-center md:text-left">
            © {new Date().getFullYear()} Edgar Alexandre • Luanda, Angola
          </p>
          <div className="inline-flex items-center gap-2 bg-[#00995E] text-white border-2 border-black px-4 py-1.5 rounded-lg font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span>● Available for Work</span>
          </div>
        </footer>
      </div>
    </Layout>
  );
}