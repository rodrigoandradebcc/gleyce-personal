import { Container, Img, H1 } from './styles';
import { motion } from 'framer-motion';

function SectionIntroduction() {
  return (
    <Container>

      <Img
        src="/images/gleyce.jpeg"
        alt="Foto Gleyce"
        as={motion.img}
        transition={{ ease: "easeOut", duration: 1 }}
        variants={{
          show: { opacity: 1, x: '0' },
          hidden: { opacity: 0, x: '-100vw' },
        }}
        initial="hidden"
        animate="show"
      />
      <H1
        as={motion.h1}
        transition={{ ease: "easeOut", duration: 1 }}
        variants={{
          show: { opacity: 1, x: '0' },
          hidden: { opacity: 0, x: '100vw' },
        }}
        initial="hidden"
        animate="show"

      >
        Sou a professora Gleyce Cristina,
        atuo na área da Educação Física há 6 anos,
        formada pela UEPA e especialista em Bases fisiológicas do treinamento
        personalizado e nutrição esportiva.
      </H1>
    </Container>
  );
};

export default SectionIntroduction;
