import Image from "next/image";
import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiCplusplus } from "react-icons/si";
import { SiJavascript, SiNextdotjs, SiBootstrap, SiTailwindcss, SiExpress, SiAxios, SiMongodb, SiMysql} from "react-icons/si";

export default function Home() {
  return (

    <main className="min-h-screen bg-zinc-950 text-zinc-300 p-8 md:p-20 font-sans selection:bg-indigo-500 selection:text-white">
      <div className="max-w-4xl mx-auto space-y-20">
        

        <header className="animate-fade-in-up flex flex-col items-start">
          <Image 
            src="/perfil.jpg" 
            alt="Miguel dos Santos Gussi" 
            width={160} 
            height={160} 
            className="rounded-full border-4 border-zinc-800 shadow-xl mb-8 object-cover"
          />
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
            Miguel dos Santos Gussi
          </h1>
          <h2 className="text-2xl md:text-3xl text-indigo-400 font-medium mb-3">
            Desenvolvedor de Software Multiplataforma
          </h2>
          <h3 className="text-2xl font-semibold border-b border-zinc-800 pb-2 text-white mb-2">Sobre Mim</h3>
          <p className="text-lg text-zinc-400 leading-relaxed mb-2">
            Olá, me chamo Miguel Gussi, tenho 21 anos e sou estudante de Desenvolvimento de Software Multiplataforma na FATEC Votorantim. 
            Atualmente atuo como Técnico de Suporte Help Desk, onde aprimoro diariamente minha capacidade analítica, de comunicação e de resolução de problemas técnicos. 
          </p>

          <p className="text-lg text-zinc-400 leading-relaxed mb-2">
            Tenho conhecimento em linguagens como Java e JavaScript, com foco no desenvolvimento de aplicações eficientes. 
            Meu objetivo no momento é migrar para a área de desenvolvimento de software onde poderei aplicar conehcimento diversos adquiridos pelos meus estudos e vivencias profissionais, contribuindo para a criação de soluções inovadoras e impactantes.
          </p>


          <p className="text-lg text-zinc-400 leading-relaxed mb-2">
            Em meu tempo livre gosto de explorar um pouco da natureza e tentar vivenciar momentos especias com aqueles que considero próximos, também gosto de jogar RPGs como forma de desenvolver habilidades de comunicação e imaginação em um hobby saudavel com meus amigos.
          </p>

          <section>
          <h3 className="text-2xl font-semibold mb-3 border-b border-zinc-800 pb-2 text-white mt-1">Contatos</h3>
          <div className="flex flex-wrap gap-4">
            
            {/* Link para o GitHub */}
            <a 
              href="https://github.com/Gussi385" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-xl hover:border-white hover:text-white transition-all text-zinc-300"
            >
              <FaGithub className="text-2xl" />
              <span className="font-medium">GitHub</span>
            </a>

            {/* Link para o LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/miguel-gussi-1a50182b8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-xl hover:border-blue-500 hover:text-blue-500 transition-all text-zinc-300"
            >
              <FaLinkedin className="text-2xl" />
              <span className="font-medium">LinkedIn</span>
            </a>

          </div>
          </section>
        </header>

        <section>
          <h3 className="text-2xl font-semibold mb-6 border-b border-zinc-800 pb-2 text-white">Tecnologias & Ferramentas</h3>
          <div className="flex flex-wrap gap-4">
            
            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg hover:border-orange-500 hover:text-orange-500 transition-colors cursor-default">
              <FaJava className="text-xl" />
              <span className="font-medium text-sm">Java</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors cursor-default">
              <SiJavascript className="text-xl" />
              <span className="font-medium text-sm">JavaScript</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-default">
              <FaReact className="text-xl" />
              <span className="font-medium text-sm">React</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg hover:border-white hover:text-white transition-colors cursor-default">
              <SiNextdotjs className="text-xl" />
              <span className="font-medium text-sm">Next.js</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg hover:border-purple-500 hover:text-purple-500 transition-colors cursor-default">
              <SiBootstrap className="text-xl" />
              <span className="font-medium text-sm">Bootstrap</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg hover:border-teal-400 hover:text-teal-400 transition-colors cursor-default">
              <SiTailwindcss className="text-xl" />
              <span className="font-medium text-sm">TailwindCSS</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg hover:border-green-500 hover:text-green-500 transition-colors cursor-default">
              <FaNodeJs className="text-xl" />
              <span className="font-medium text-sm">Node.js</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg hover:border-gray-400 hover:text-gray-400 transition-colors cursor-default">
              <SiExpress className="text-xl" />
              <span className="font-medium text-sm">Express.js</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg hover:border-indigo-500 hover:text-indigo-500 transition-colors cursor-default">
              <SiAxios className="text-xl" />
              <span className="font-medium text-sm">Axios</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg hover:border-green-600 hover:text-green-600 transition-colors cursor-default">
              <SiMongodb className="text-xl" />
              <span className="font-medium text-sm">MongoDB</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-colors cursor-default">
              <SiMysql className="text-xl" />
              <span className="font-medium text-sm">MySQL</span>
            </div>


            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg hover:border-orange-600 hover:text-orange-600 transition-colors cursor-default">
              <FaGitAlt className="text-xl" />
              <span className="font-medium text-sm">Git</span>
            </div>

          </div>
        </section>

        {/* Seção de Certificações */}
        <section>
          <h3 className="text-2xl font-semibold mb-6 border-b border-zinc-800 pb-2 text-white">Certificações</h3>
          <div className="space-y-4">
            
            {/* Certificação 1 */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-indigo-500/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-lg text-white">Design Patterns Básico</h4>
                  <p className="text-sm text-zinc-400">Centro Paula Souza (CPS)</p>
                  <p className="text-xs text-zinc-500 mt-2">Competências: Arquitetura de sistema, Programação orientada a objetos (POO)</p>
                </div>
                <div className="text-left md:text-right">
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                    Fev. 2026
                  </span>
                </div>
              </div>
            </div>

            {/* Certificação 2 */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-indigo-500/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-lg text-white">Desenvolvedor Front-End</h4>
                  <p className="text-sm text-zinc-400">Centro Paula Souza (CPS)</p>
                  <p className="text-xs text-zinc-500 mt-2">Competências: Bootstrap, JavaScript e mais 7 competências</p>
                </div>
                <div className="text-left md:text-right">
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                    Set. 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Certificação 3 */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-indigo-500/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-lg text-white">Front-End Básico</h4>
                  <p className="text-sm text-zinc-400">Centro Paula Souza (CPS)</p>
                  <p className="text-xs text-zinc-500 mt-2">Competências: CSS, HTML5 e mais 2 competências</p>
                </div>
                <div className="text-left md:text-right">
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                    Abr. 2025
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6 border-b border-zinc-800 pb-2 text-white">Trajetória Profissional</h3>
          <div className="space-y-6">
            <div className="relative pl-6 border-l border-zinc-800">
              <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6.5px] top-1.5 ring-4 ring-zinc-950"></div>
              <h4 className="font-bold text-lg text-white">Técnico de Suporte Help Desk</h4>
              <p className="text-sm text-zinc-500 font-mono mb-2">Setembro 2025 - Presente</p>
            </div>
            
            <div className="relative pl-6 border-l border-zinc-800">
              <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-1.5 ring-4 ring-zinc-950"></div>
              <h4 className="font-bold text-lg text-white">Estagiário de Help Desk</h4>
              <p className="text-sm text-zinc-500 font-mono mb-2">Julho 2025 - Setembro 2025</p>
            </div>
          </div>
        </section>


        <section>
          <h3 className="text-2xl font-semibold mb-6 border-b border-zinc-800 pb-2 text-white">Projetos em Destaque</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:-translate-y-1 hover:border-indigo-500/50 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-3">Achamigos</h4>
              <p className="text-zinc-400 text-sm mb-4">
                Plataforma dedicada a conectar abrigos de animais com possíveis adotantes, além de fornecer recursos para gestão de eventos de vacinação.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-1 rounded">MongoDB</span>
                <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">TypeScript</span>
                <span className="text-xs font-semibold text-orange-400 bg-orange-400/10 px-2 py-1 rounded">Git</span>
              </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}