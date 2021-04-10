import styled from 'styled-components';

export const Container = styled.section`
  background: #202020;
  color: #fff;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  padding: 6rem 0;

  h1 span{
    color: #FAC600;
  }

  p {
    padding: 2rem 8rem 3rem;
    text-align: center;
  }

  display: flex;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  flex-direction: column;

  align-items: center;
`;

export const ContainerCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  max-width: 1120px;
`;

export const CardPlan = styled.div`
  background: #fff;
  color: #3d3d3d;
  max-width: 22rem;
  width: 100%;

  div {
    background: #0e0e0e;
    color: #fff;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  section {
    text-align: center;
    padding: 2rem 0;
  }

  .yellow-background{
    background: #FAC600;
    color: #000;
  }

  & + & {
    margin-left: 1rem;
  }

  
`;
