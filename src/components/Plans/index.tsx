
import { motion } from 'framer-motion';
import Button from '../Button';
import Separator from '../Separator';
import { Container, CardPlan, PlansContent, Content, Specifications, HeaderCard } from './styles';

function Plans() {
  return (
    <Container>
      <Content>
        <h1>Escolha <span>seu plano</span></h1>
        <p>Treinos com qualidade em todos os nossos planos. Treino personalizado
        especialmente para você levando em consideração todas as suas limitações
           e características</p>
        <PlansContent>
          <CardPlan
            as={motion.div}
            whileHover={{ scale: 1.05, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
          >
            <HeaderCard>
              <p>Personal</p>
              <h2>PRESENCIAL</h2>
            </HeaderCard>
            <section>
              <Specifications>
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
                    Prescrição e atendimento em musculação, treinamento
                    aeróbica e/ou funcional
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

                </ul>
              </Specifications>

              <Button background="#D52B1E" onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=5591982839167&text=Estou%20interessado%20no%20Plano%20Personal"}>Contratar</Button>
            </section>
          </CardPlan>

          <CardPlan className="yellow" as={motion.div}
            whileHover={{ scale: 1.05, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
            <HeaderCard>
              <p>Consultoria</p>
              <h2>QUINZENAL</h2>
            </HeaderCard>
            <section>
              <Specifications>
                <p>
                  Planejamento individualizado do seu mês de treinamento em acadêmia ou em casa.
                </p>
                <Separator color="#e2e8f0" />

                <h4>DIFERENCIAIS</h4>
                <ul>
                  <li>
                    Treino Personalizado
                </li>
                  <li>
                    Prescrição e atendimento em musculação, treinamento
                    aeróbica e/ou funcional
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
                </ul>
              </Specifications>
              <Button background="#D52B1E"
                onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=5591982839167&text=Estou%20interessado%20no%20Plano%20Quinzenal"}
              >Contratar</Button>
            </section>
          </CardPlan>

          <CardPlan
            as={motion.div}
            whileHover={{ scale: 1.05, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
          >
            <HeaderCard>
              <p>Personal</p>
              <h2>MENSAL</h2>
            </HeaderCard>
            <section>
              <Specifications>
                <p>
                  Treino com acompanhamento indivizualizado e com supervisão
                  integral em acadêmia ou diretamente de sua casa
              </p>
                <Separator color="#e2e8f0" />

                <h4>DIFERENCIAIS</h4>

                <ul>
                  <li>
                    Treino personalizado
                </li>
                  <li>
                    Prescrição e atendimento em treinamento de força,
                    aeróbica e/ou funcional
                </li>
                  <li>
                    Preparação específica para provas, TAF e etc
                </li>
                  <li>
                    Mudanças de estimulos de treinos de 15 em 15 dias para manter o corpo sempre
                    nas fases de maior adaptação neural e muscular, garantindo maiores resultados
                </li>
                  <li>
                    Ensino didático de movimentos e técnicas
                </li>
                </ul>
              </Specifications>

              <Button background="#D52B1E" onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=5591982839167&text=Estou%20interessado%20no%20Plano%20Personal"}>Contratar</Button>
            </section>
          </CardPlan>
        </PlansContent>
      </Content>
    </Container>
  );
};

export default Plans;
