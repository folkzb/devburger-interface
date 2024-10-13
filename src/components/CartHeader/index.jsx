import { useNavigate, useResolvedPath } from 'react-router-dom';

import { UserCircle, ShoppingCart } from '@phosphor-icons/react';

import { useUser } from '../../hooks/UserContext';
import {
  Container,
  HeaderLink,
  Navigation,
  Options,
  Profile,
  Logout,
  Login,
  Content,
} from './styles';

export function CartHeader() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const { pathname } = useResolvedPath();

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
          </Options>
        </Content>
      </Container>
    </div>
  );
}
