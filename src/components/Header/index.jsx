import { useNavigate, useResolvedPath } from 'react-router-dom';

import { UserCircle, ShoppingCart } from '@phosphor-icons/react';

import { useUser } from '../../hooks/UserContext';
import { useCart } from '../../hooks/CartContext';
import {
  Container,
  HeaderLink,
  LinkContainer,
  Navigation,
  Options,
  Profile,
  Login,
  Logout,
  Content,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const { pathname } = useResolvedPath();
  const { getTotalItems } = useCart();

  function logoutUser() {
    logout();
    navigate('/login');
  }

  return (
    <div>
      <Container>
        <Content>
          <Navigation>
            <div>
              <HeaderLink to="/" $isActive={pathname === '/'}>
                Home
              </HeaderLink>
              <hr></hr>
              <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
                Cardápio
              </HeaderLink>
            </div>
          </Navigation>
          <Options>
            <Profile>
              <UserCircle color="#fff" size={24} />
              <div>
              <p>
                Olá, <span>{userInfo?.name || 'Visitante'}</span>
              </p>
              {userInfo?.name ? (
                <Logout onClick={logoutUser}>Sair</Logout>
              ) : (
                <Login onClick={() => navigate('/login')}>Login</Login>
              )}
            </div>
            </Profile>
            <LinkContainer>
              <ShoppingCart color="#fff" size={24} />
              <HeaderLink to="/carrinho">Carrinho</HeaderLink>
              {/* Exibe o número total de itens no carrinho */}
              {getTotalItems() > 0 && (
                <span style={{ color: '#fff', marginLeft: '8px' }}>
                  {getTotalItems()}
                </span>
              )}
            </LinkContainer>
          </Options>
        </Content>
      </Container>
    </div>
  );
}
