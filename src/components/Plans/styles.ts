import styled from 'styled-components';

export const Container = styled.section`
  background: #202020;
  color: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1120px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;

  h1 {
    margin-bottom: 2rem;
    font-size: 36px;
    font-weight: 700;

    span {
      color: var(--yellow);
    }
  }

  > p {
    font-size: 24px;
    margin-bottom: 3rem;
  }

  padding: 2.5rem 1rem 5.5rem;
`;

export const PlansContent = styled.div`
  /* align-items: center; */
  /* margin: 0 auto; */
  justify-content: center;

  display: grid;

  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, minmax(300px, auto));
  }

  h1 span {
    color: #fac600;
  }

  p {
    /* padding: 2rem 8rem 3rem; */
    text-align: center;
  }

  .yellow > div {
    background: #fac600;

    h2 {
      color: #000000;
    }
  }
`;

export const CardPlan = styled.div`
  background: #fff;
  color: #3d3d3d;
  width: 300px;

  section {
    padding: 1rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
      color: #212529;
      font-size: 18px;
      margin-bottom: 1.5rem;
    }

    > div {
      margin-bottom: 1.5rem;
    }

    h4 {
      color: #808080;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;

      li {
        font-weight: 700;

        & + li {
          margin-top: 24px;
        }
      }

      margin-bottom: 24px;
    }
  }

  > div {
    background: #0e0e0e;
    color: #fff;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;

    p {
      font-size: 24px;
      text-transform: uppercase;
      font-weight: 500;
    }

    h2 {
      font-size: 48px;
      text-transform: uppercase;
      font-weight: 500;
      color: #fac600;
    }
  }
`;
