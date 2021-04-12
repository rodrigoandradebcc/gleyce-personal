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
    color: #3d3d3d;
    font-weight: 400;
  }

  img {
    width: 100%;
    max-width: 300px;
    border-radius: 50%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    h1 {
      width: 100%;
      text-align: center;
      margin-bottom: 4rem;
    }

    img {
      
    }
  }
`;

export const Img = styled.img``;

export const H1 = styled.h1``;

