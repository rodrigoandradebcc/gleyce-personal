import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: #fac600;
`;

export const MenuLogo = styled.div`
  img {
    width: 100%;
    max-width: 120px;
  }
`;

export const Content = styled.div`

  max-width: 1120px;
  padding: 0.5rem 1rem .5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
