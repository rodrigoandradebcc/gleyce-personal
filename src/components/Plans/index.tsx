import { CardPlan, Container, ContainerCard, Content } from './styles';

function Plans() {
  return (
    <Container>
      <Content>
        <h1>Escolha seu <span>plano</span></h1>
        <p>Treinos com qualidade em todos os nossos planos. Treino personalizado
        especialmente para você levando em consideração todas as suas limitações
           e caraccterísticas</p>

        <ContainerCard>
          <CardPlan>
            <div>
              <h2>PLANO PERSONAL</h2>
            </div>
            <section>
              <h4>DIFERENCIAIS</h4>
              hweauhawuwhauwahuawhawu<br />
              hweauhawuwhauwahuawhawu<br />
              hweauhawuwhauwahuawhawu<br />
              hweauhawuwhauwahuawhawu<br />
              hweauhawuwhauwahuawhawu<br />
              hweauhawuwhauwahuawhawu<br />
              <button>Contratar</button>
            </section>
          </CardPlan>
          <CardPlan>
            <div className="yellow-background">
              <h2>PLANO QUINZENAL</h2>
            </div>
            <section>
              <h4>DIFERENCIAIS</h4>

              hweauhawuwhauwahuawhawu<br />
              hweauhawuwhauwahuawhawu<br />
              hweauhawuwhauwahuawhawu<br />
              hweauhawuwhauwahuawhawu<br />
              hweauhawuwhauwahuawhawu<br />
              hweauhawuwhauwahuawhawu<br />
              <button>Contratar</button>
            </section>
          </CardPlan>
          <CardPlan>
            <div>
              <h2>PLANO MENSAL</h2>

            </div>
            <section>
              <h4>DIFERENCIAIS</h4>

              hweauhawuwhauwahuawhawu<br />
              hweauhawuwhauwahuawhawu<br />
              hweauhawuwhauwahuawhawu<br />
              hweauhawuwhauwahuawhawu<br />
              hweauhawuwhauwahuawhawu<br />
              hweauhawuwhauwahuawhawu<br />
              <button>Contratar</button>
            </section>
          </CardPlan>
        </ContainerCard>
      </Content>
    </Container>
  );
};

export default Plans;
