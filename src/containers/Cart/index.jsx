import Logo from '../../assets/logo.svg';
import { CartItems } from '../../components/CartItems';
import { Container, Banner, Content, Title } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="Logo devburger" />
      </Banner>
      <Title>Checkout - Pedido</Title>
      <Content>
        <CartItems />
        {/* <CartResume /> */}
      </Content>
    </Container>
  );
}
