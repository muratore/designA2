import CartaoApresentacao from "../components/CartaoApresentacao";
import Alice from "../assets/Alice--.png";
import Ale from "../assets/Ale--.png";
function Sobre() {
  return (
    <section className="h-dvh w-full bg-red-950 ">
      <div className="bg-zinc-800 md:px-32 pt-32 pb-24 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2  xl:px-64">


     
          <CartaoApresentacao
            image={`${Alice}`}
            nome={"Alice Penaforte"}
            texto={
              "Designer Gráfico com mais de 17 anos de experiência, especializada em design editorial. Sólido domínio do InDesign, Photoshop, Illustrator e Adobe Express, aliado a conhecimentos básicos em UI/UX. Apaixonada por criar layouts impactantes e soluções visuais estratégicas. Inglês e francês em nível intermediário."
            }
          />
          <CartaoApresentacao
            image={`${Ale}`}
            nome={"Alessandro Muratore"}
            texto={
              "Designer gráfico e editorial e desenvolvedor web com mais de 25 anos de experiência, possuo um portfólio diversificado que abrange desde a coordenação do projeto gráfico do Anuário do Ceará (reconhecido por sua excelência) e a edição de arte do estratégico Guia de Infraestrutura - Ceará - 2019-2020, até o design do portfólio trilíngue do Governo do Estado do Ceará, entre inúmeros outros projetos. Minha atuação como Editor de Arte por 18 anos na Assembleia Legislativa do Ceará e 7 anos no Jornal O POVO (Fortaleza) solidificou minha capacidade de desenvolver soluções visuais impactantes, integrando conhecimento avançado no Adobe Creative Suite e formação em desenvolvimento web full-stack (JavaScript) para criar experiências digitais e impressas completas e engajadoras."
            }
          />
        </div>
      
    </section>
  );
}

export default Sobre;
