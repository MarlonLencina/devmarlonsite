import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Background = styled.div`
    background-color: ${props => props.theme.COLORS.purple};
    background-image: url('https://devmarlon.s3.sa-east-1.amazonaws.com/backgroundsquare.png');
    background-repeat: no-repeat;
    background-position: right;
    height: 320px;
    position: relative;

    > img {

    }
`;

export const ImageWrapper = styled.div`
    position: absolute;
    bottom: -5px;
`;

export const BackgroundWrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    background-color: red;
    padding: 0 20px;
`;

export const Content = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 68px 20px;

    > span {
        font-weight: ${props => props.theme.FONTS.regular};
        font-size: 18px;
    }

    > h2 {
        font-weight: ${props => props.theme.FONTS.medium};
        font-size: 38px;
        max-width: 564px;
    }
`;

export const Options = styled.div`

display: flex;
flex-direction: column;

align-items: center;
margin-top: 24px;

> span {
    margin: 24px;
    font-weight: ${props => props.theme.FONTS.medium};
}

@media (min-width: 720px){
    flex-direction: row;
}

`

export const Option = styled.a`


width: 270px;
height: 85px;
background: ${props => props.theme.COLORS.white};
display: flex;
align-items: center;
justify-content: center ;
border-radius: 16px;
color: ${props => props.theme.COLORS.black};
text-decoration: none;

> svg {
    margin-right: 24px;
    font-size: 24px;
}

> span {
    font-weight: ${props => props.theme.FONTS.medium};
    font-size: 18px;
}

`

