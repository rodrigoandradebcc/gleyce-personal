import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: #fac600;
  height: 10vh;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 900px) {
    height: 100px;
  }
`;

export const MenuLogo = styled.div`
  img {
    width: 100%;
    max-width: 120px;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  padding: 0.5rem 1rem 0.5rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    justify-content: center;

    nav {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  ul li {
    list-style: none;
  }

  li {
    & + li {
      margin-left: 2rem;
    }

    a {
      text-transform: uppercase;
      font-weight: 600;
    }
  }

  ul {
    display: flex;
  }
`;
