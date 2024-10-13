import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 40px; /* Aumentando o padding para mais espaço interno */
  border-radius: 8px;
  background-color: white;
  cursor: grab;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;

  div {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Alinhando o conteúdo para o topo */
    gap: 5px;

    p {
      font-size: 18px;
      color: #ff8c05;
      line-height: 20px;
      font-weight: 700;
      margin-top: 20px; /* Ajustado para evitar muito espaço acima */
    }

    p2 {
      font-size: 16px; /* Tamanho da fonte */
      color: #000; /* Cor do texto (preto) */
      line-height: 1.5; /* Altura da linha */
      font-weight: 300; /* Peso da fonte (fina) */
      margin-top: 10px; /* Espaçamento superior ajustado */
    }

    strong {
      font-size: 22px;
      color: #363636;
      font-weight: 800;
      line-height: 20px;
      margin-top: auto;
    }
  }
`;

export const CardImage = styled.img`
  height: 100px;
  position: absolute;
  top: -50px;
`;
