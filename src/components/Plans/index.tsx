
import Button from '../Button';
import Separator from '../Separator';
import { Container, CardPlan, PlansContent, Content } from './styles';

function Plans() {
  return (
    <Container>
      <Content>
        <h1>Escolha <span>seu plano</span></h1>
        <p>Treinos com qualidade em todos os nossos planos. Treino personalizado
        especialmente para você levando em consideração todas as suas limitações
           e características</p>
        <PlansContent>
          <CardPlan>
            <div>
              <p>Plano</p>
              <h2>PERSONAL</h2>
            </div>
            <section>

              <p>
                Treino com acompanhamento indivizualizado e com supervisão
                integral em acadêmia ou diretamente de sua casa
              </p>
              <Separator color="#e2e8f0" />

              <h4>DIFERENCIAIS</h4>

              <ul>
                <li>
                  Treino Personalizado
                </li>
                <li>
                  Prescrição e atendiento em musculação, treinamento
                  aerobico e/ou funcional
                </li>
                <li>
                  Preparação específica para provas, TAF e etc
                </li>
                <li>
                  Mudanças de treinos frequentes para obter mais resultados
                  ao não estagnar nos estimulos de treinamento
                </li>
                <li>
                  Ensino didático de movimentos e técnicas
                </li>
                <li>
                  hweauhawuwhauwahuawhawu
                </li>
              </ul>


              <Button background="#D52B1E" onClick={() => window.location.href="https://api.whatsapp.com/send?phone=5591982839167&text=Estou%20interessado%20no%20Plano%20Personal"}>Contratar</Button>
            </section>
          </CardPlan>

          <CardPlan className="yellow">
            <div>
              <p>Plano</p>
              <h2>QUINZENAL</h2>
            </div>
            <section>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Separator color="#e2e8f0" />

              <h4>DIFERENCIAIS</h4>
              <ul>
                <li>
                  Treino Personalizado
                </li>
                <li>
                  Prescrição e atendiento em musculação, treinamento
                  aerobico e/ou funcional
                </li>
                <li>
                  Preparação específica para provas, TAF e etc
                </li>
                <li>
                  Mudanças de treinos frequentes para obter mais resultados
                  ao não estagnar nos estimulos de treinamento
                </li>
                <li>
                  Ensino didático de movimentos e técnicas
                </li>
                <li>
                  hweauhawuwhauwahuawhawu
                </li>
              </ul>
              <Button background="#D52B1E"
                onClick={() => window.location.href="https://api.whatsapp.com/send?phone=5591982839167&text=Estou%20interessado%20no%20Plano%20Quinzenal"}
              >Contratar</Button>
            </section>
          </CardPlan>

          <CardPlan>
            <div>
              <p>Plano</p>
              <h2>MENSAL</h2>
            </div>
            <section>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Separator color="#e2e8f0" />
              <h4>DIFERENCIAIS</h4>
              <ul>
                <li>
                  Treino Personalizado
                </li>
                <li>
                  Prescrição e atendiento em musculação, treinamento
                  aerobico e/ou funcional
                </li>
                <li>
                  Preparação específica para provas, TAF e etc
                </li>
                <li>
                  Mudanças de treinos frequentes para obter mais resultados
                  ao não estagnar nos estimulos de treinamento
                </li>
                <li>
                  Ensino didático de movimentos e técnicas
                </li>
                <li>
                  hweauhawuwhauwahuawhawu
                </li>
              </ul>
              <Button background="#D52B1E"
                onClick={() => window.location.href="https://api.whatsapp.com/send?phone=5591982839167&text=Estou%20interessado%20no%20Plano%20Mensal"}
              >Contratar</Button>
            </section>
          </CardPlan>

        </PlansContent>
      </Content>
    </Container>
  );
};

export default Plans;
