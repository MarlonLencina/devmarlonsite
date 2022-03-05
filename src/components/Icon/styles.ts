import styled from 'styled-components';

export const Container = styled.div`
  width: 154px;
  height: 154px;
  background-color: ${props => props.theme.COLORS.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 23px;

  > svg {
      color: ${props => props.theme.COLORS.black};
      height: 190px;
      width: 190px;
  }
`;
