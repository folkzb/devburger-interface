import { createBrowserRouter } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Cart, Home, Login, Menu, Register } from '../containers';
import { CartHeader } from '../components/CartHeader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/cardapio',
    element: (
      <>
        <Header />
        <Menu />
      </>
    ),
  },
  {
    path: '/carrinho',
    element: (
      <>
      <CartHeader />
      <Cart />
      <Footer />
    </>),
  },
]);
