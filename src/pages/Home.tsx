import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Layout from '../components/Layout';
import { ArrowRight, Terminal, Sparkles, Code2, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      <section className="min-h-[75vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-8 flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFC567] border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] w-fit mb-6">
              <Terminal size={16} className="text-black" />
              <span className="font-mono text-xs text-black tracking-wider font-extrabold uppercase">
                Fullstack & Mobile Developer
              </span>
            </div>

            <h1 className="text-fluid-h1 leading-[0.9] mb-8 font-black text-black">
              CRIANDO O <br />
              <span className="bg-[#FB7DA8] text-black border-2 border-black px-3 py-1 inline-block rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-2">
                AMANHÃ.
              </span>
            </h1>

            <p className="text-fluid-body text-[#333333] max-w-xl mb-10 leading-relaxed font-medium">
              Especialista em ecossistemas escaláveis com <span className="bg-[#FFC567] px-1.5 py-0.5 border border-black font-bold">Node.js</span>, <span className="bg-[#058CD7] text-white px-1.5 py-0.5 border border-black font-bold">NestJS</span>, <span className="bg-[#FB7DA8] px-1.5 py-0.5 border border-black font-bold">React Native</span> e <span className="bg-[#00995E] text-white px-1.5 py-0.5 border border-black font-bold">Docker</span>. Transformando desafios em soluções de alto impacto.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/projetos"
                className="group inline-flex items-center gap-3 bg-[#FD5A46] text-white font-black text-sm py-4 px-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase tracking-wider"
              >
                Explorar Projetos
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 bg-[#FFFDF6] text-black font-extrabold text-sm py-4 px-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FFC567] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase tracking-wider"
              >
                Minha Trajetória
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="bg-[#FFFDF6] border-2 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-6">
                <div className="flex gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FD5A46] border border-black" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FFC567] border border-black" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#00995E] border border-black" />
                </div>
                <span className="font-mono text-xs font-black uppercase text-black">system_status.sys</span>
              </div>

              <div className="space-y-6">
                <div className="bg-[#552CB7] text-white border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3">
                  <Cpu size={32} className="text-[#FFC567]" />
                  <div>
                    <p className="text-xs font-mono font-bold uppercase text-[#FFC567]">Experiência</p>
                    <p className="text-lg font-black">4+ Anos Freelance</p>
                  </div>
                </div>

                <div className="bg-[#00995E] text-white border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3">
                  <Code2 size={32} className="text-white" />
                  <div>
                    <p className="text-xs font-mono font-bold uppercase text-white/80">Stack Atual</p>
                    <p className="text-lg font-black">Fullstack & Mobile</p>
                  </div>
                </div>

                <div className="bg-[#FFC567] text-black border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3">
                  <Sparkles size={32} className="text-black" />
                  <div>
                    <p className="text-xs font-mono font-bold uppercase text-black/70">Deploy & DevOps</p>
                    <p className="text-lg font-black">Docker & Pipelines</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 md:mt-24 bg-[#FFFDF6] border-2 border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-wrap gap-4 items-center justify-around"
        >
          {['React Native', 'Flutter', 'Next.js', 'NestJS', 'PostgreSQL', 'Docker'].map((tech, idx) => {
            const colors = ['bg-[#FFC567]', 'bg-[#FB7DA8]', 'bg-[#058CD7]', 'bg-[#FD5A46]', 'bg-[#00995E]', 'bg-[#552CB7]'];
            const textColor = idx === 2 || idx === 4 || idx === 5 ? 'text-white' : 'text-black';
            return (
              <span
                key={tech}
                className={`font-mono text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${colors[idx % colors.length]} ${textColor}`}
              >
                {tech}
              </span>
            );
          })}
        </motion.div>
      </section>
    </Layout>
  );
}