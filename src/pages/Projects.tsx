import { motion } from 'motion/react';
import Layout from '../components/Layout';
import { ExternalLink, Globe } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Buke',
    tagline: 'Educação Digital com IA',
    description: 'Aplicativo inovador de educação digital potencializado por inteligência artificial para personalizar rotinas de aprendizagem. Desenvolvido durante minha atuação corporativa como Desenvolvedor Web.',
    tech: ['React.js', 'Node.js', 'AI Integration', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000',
    link: 'https://buke.ao'
  },
  {
    id: '02',
    title: 'SmartSMS',
    tagline: 'Plataforma de SMS & Comunicação',
    description: 'Plataforma empresarial para envio massivo de SMS, gestão de campanhas de marketing e integração direta de SMS gateways com APIs de clientes terceiros.',
    tech: ['Node.js', 'Express.js', 'APIs / Gateway', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000',
    link: 'https://smartsms.ao'
  },
  {
    id: '03',
    title: 'MindCare',
    tagline: 'Healthcare Ecosystem',
    description: 'Solução de saúde digital focada em telepsicologia. Arquitetura altamente escalável para gestão de agendamentos e sessões de atendimento em tempo real.',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000',
  },
  {
    id: '04',
    title: 'Encontra Angola',
    tagline: 'Turismo & Cultura',
    description: 'Plataforma interativa para exploração de pontos históricos e turísticos baseada em geolocalização e recomendação cultural.',
    tech: ['React Native', 'Asp.NET', 'Geolocation API'],
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000',
  }
];

export default function Projects() {
  return (
    <Layout>
      <div className="mb-16">
        <div className="inline-block bg-[#FFC567] border-2 border-black px-4 py-1 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-3">
          <span className="font-mono text-xs font-black uppercase text-black">// PROJETOS EM DESTAQUE</span>
        </div>
        <h2 className="text-fluid-h2 text-black">
          PORTEFÓLIO <span className="bg-[#FB7DA8] border-2 border-black px-3 py-0.5 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">SELECIONADO.</span>
        </h2>
      </div>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.section
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="bg-[#FFFDF6] border-2 border-black rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col lg:flex-row gap-8 items-center"
          >
            <div className="w-full lg:w-1/2 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-mono bg-[#FFC567] border-2 border-black px-2.5 py-0.5 rounded-md text-black font-black text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {project.id}
                </span>
                <span className="bg-[#058CD7] text-white border-2 border-black px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {project.tagline}
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl font-black text-black">{project.title}</h3>

              <p className="text-black font-medium leading-relaxed text-sm md:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-black py-1 px-3 bg-[#FAF7F0] border-2 border-black text-black rounded-md uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.link && <div className="pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FD5A46] text-white font-black text-xs uppercase tracking-wider py-3 px-6 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#00995E] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                >
                  <Globe size={16} />
                  VISITAR APLICAÇÃO
                  <ExternalLink size={14} />
                </a>
              </div>}
            </div>

            <div className="w-full lg:w-1/2">
              <div className="border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                <div className="flex items-center justify-between border-b-2 border-black bg-[#FFC567] px-4 py-2">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FD5A46] border border-black" />
                    <span className="w-3 h-3 rounded-full bg-[#FFC567] border border-black" />
                    <span className="w-3 h-3 rounded-full bg-[#00995E] border border-black" />
                  </div>
                  <span className="font-mono text-[10px] font-black uppercase text-black">{project.title.toLowerCase()}.app</span>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </Layout>
  );
}