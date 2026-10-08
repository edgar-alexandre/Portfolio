import { motion } from 'motion/react';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <section className="mb-20">
          <div className="inline-block bg-[#FFC567] border-2 border-black px-4 py-1 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4">
            <span className="font-mono text-xs font-black uppercase">Perfil & Filosofia</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-fluid-h2 leading-none mb-8 text-black"
          >
            VISÃO <span className="bg-[#FB7DA8] border-2 border-black px-2 py-0.5 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">PROFISSIONAL.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#FFFDF6] border-2 border-black rounded-2xl p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
          >
            <div className="flex gap-2 mb-6 border-b-2 border-black pb-3">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FD5A46] border border-black" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#FFC567] border border-black" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#00995E] border border-black" />
            </div>

            <p className="text-fluid-body text-black font-medium leading-relaxed">
              Atuando na vanguarda do desenvolvimento web e mobile, o meu compromisso é com a{' '}
              <span className="bg-[#FFC567] border border-black px-1.5 py-0.5 font-black">excelência técnica</span> e a{' '}
              <span className="bg-[#FB7DA8] border border-black px-1.5 py-0.5 font-black">simplicidade funcional</span>. 
              Com bagagem consolidada de 4+ anos como Freelancer, atuação como Desenvolvedor Web e atualmente Fullstack & Mobile, crio sistemas ponta a ponta — do banco de dados e arquitetura de APIs ao deploy com containerização.
            </p>
          </motion.div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FFFDF6] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4"
          >
            <div className="bg-[#FD5A46] text-white border-2 border-black px-3 py-1 rounded-md w-fit font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Objetivos Atuais
            </div>
            <p className="text-black font-medium leading-relaxed">
              Evolução e expansão de aplicações móveis e web utilizando <span className="font-black">React Native (Expo)</span>, <span className="font-black">Flutter</span>, <span className="font-black">Next.js</span> e <span className="font-black">NestJS</span>, com pipelines de integração contínua.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#FFFDF6] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4"
          >
            <div className="bg-[#058CD7] text-white border-2 border-black px-3 py-1 rounded-md w-fit font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Foco Estratégico
            </div>
            <p className="text-black font-medium leading-relaxed">
              Construção de soluções digitais robustas e escaláveis, integrando bases de dados de alta performance (<span className="font-black">PostgreSQL, MySQL, MongoDB</span>) e infraestrutura containerizada com <span className="font-black">Docker</span>.
            </p>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}