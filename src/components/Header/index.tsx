import { HeaderContainer, MenuLogo, Nav, Content } from './styles';


function Header() {
  return (
    <HeaderContainer>
      <Content>
        <MenuLogo>
          <img src="/images/logo.png" alt="" />
        </MenuLogo>
        <Nav>
          <ul>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#produtos">Produtos</a>
            </li>
            <li>
              <a href="#preco">Preço</a>
            </li>
            <li>
              <a href="#qualidade">Qualidade</a>
            </li>
          </ul>
        </Nav>
      </Content>
    </HeaderContainer>
  );
};

export default Header;
