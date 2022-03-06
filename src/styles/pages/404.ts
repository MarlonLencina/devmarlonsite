import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  > h1 {
      font-size: 48px;
      font-weight: ${props => props.theme.FONTS.medium};
  }
`;

export const BoxIcon = styled.div`

width: 150px;
height: 150px;
background-color: ${props => props.theme.COLORS.white};
border-radius: 23px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 24px;

> span {
    font-size: 48px;
}

`
