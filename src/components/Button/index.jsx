import PropTypes from 'prop-types';
import { ContainerButton } from './styles';

export function Button({ children, color, ...props }) {
  return (
    <ContainerButton color={color} {...props}>
      {children}
    </ContainerButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};
