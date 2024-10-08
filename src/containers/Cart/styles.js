import styled from 'styled-components';

import Background from '../../assets/background.svg';
import Texture from '../../assets/texture.svg';

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
  min-height: 100vh;
`;

export const Banner = styled.div`
  background: url('${Texture}');
  background-color: #1f1f1f;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  height: 180px;

  img {
    height: 130px;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: #61a120;
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    left: calc(50% + -28px);
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background-color: #61a120;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 20%;
  gap: 40px;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`;
