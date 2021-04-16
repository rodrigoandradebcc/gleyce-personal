import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  justify-content: space-between;
  align-items: center;

  padding: 4rem 1rem 4rem;

  h1 {
    color: #313131;
    font-weight: 400;
    max-width: 680px;
  }

  img {
    width: 100%;
    max-width: 300px;
    border-radius: 50%;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    /* background-image: url('/images/gleyce.jpeg');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover; */

    h1 {
      width: 100%;
      text-align: center;
      /* color: #fff; */
      font-weight: 600;
    }

    img {
      margin-bottom: 2rem;
      /* display: none; */
    }
  }
`;

export const Img = styled.img``;

export const H1 = styled.h1``;
