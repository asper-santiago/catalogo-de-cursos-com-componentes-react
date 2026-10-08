import Cabecalho from "./components/Cabecalho";
import CardCurso from "./components/CardCurso";
import Destaque from "./components/Destaque";
import Rodape from "./components/Rodape";
import "./App.css";

const cursos = [
  {
    nome: "Desenvolvimento de Sistemas",
    duracao: "1200 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 12,
  },
  {
    nome: "Redes de Computadores",
    duracao: "1000 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 5,
  },
  {
    nome: "Manutenção de Computadores",
    duracao: "400 horas",
    modalidade: "Presencial",
    nivel: "Qualificação",
    vagas: 0,
  },
  {
    nome: "Programação Web",
    duracao: "200 horas",
    modalidade: "EAD",
    nivel: "Livre",
    vagas: 30,
  },
  {
    nome: "Banco de Dados",
    duracao: "160 horas",
    modalidade: "Semipresencial",
    nivel: "Livre",
    vagas: 8,
  },

  {
    nome: "Desenvolvimento Mobile",
    duracao: "300 horas",
    modalidade: "Presencial",
    nivel: "Qualificação",
    vagas: 15,
  },
];

function App() {
  return (
    <div className="app">
      <Cabecalho />

      <main>
        <section className="area-destaques">
          <Destaque
            titulo="Aprenda fazendo"
            texto="Desenvolva projetos durante sua formação."
          />
          <Destaque
            titulo="Professores experientes"
            texto="Aprenda com quem conhece o mercado de tecnologia."
          />
          <Destaque
            titulo="Portfólio pronto"
            texto="Conclua o curso com projetos reais para mostrar."
          />
        </section>

        <section className="area-cursos">
          <h2>Nossos cursos</h2>
          <div className="lista-cursos">
            {cursos.map((curso) => (
              <CardCurso
                key={curso.nome}
                nome={curso.nome}
                duracao={curso.duracao}
                modalidade={curso.modalidade}
                nivel={curso.nivel}
                vagas={curso.vagas}
              />
            ))}
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

export default App;