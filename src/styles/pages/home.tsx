import styled from "styled-components";

export const Main = styled.main``

export const MainBackground = styled.div`

display: none;

margin-left: auto;
width: 603px;
height: 100vh;
background: ${props => props.theme.COLORS.purple};
position: absolute;
top: 0;
right: 0;
z-index: -1;

@media (min-width: 720px){
    display: unset;
}

`

export const MainWrapper = styled.div`

padding: 0 20px;
max-width: 1280px;
margin: 60px auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

@media (min-width: 720px){
    flex-direction: row;

}

`

export const MainText = styled.div`
    max-width: 585px;
    text-align: justify;
    order: 2;

    > h1 {
        font-size: 54px;
        font-weight: ${props => props.theme.FONTS.medium};
        margin-bottom: 12px;
    }

    > span {
        font-size: 18px;
        font-weight: ${props => props.theme.FONTS.regular};

    }

    @media (min-width: 720px){
    order: 0;
}

`

export const MainMidia = styled.div`

display: flex;
flex-direction: column;

@media (min-width: 720px){
flex-direction: row;
}

`

export const ImageWrapper = styled.div`

height: 400px;
width: 400px;
position: relative;


`

export const MainInfo = styled.div`

align-self: flex-end;
margin-top: -40px;
z-index: 1;

> span {
    color: ${props => props.theme.COLORS.white};
    font-weight: ${props => props.theme.FONTS.regular};

}

> div {
    display: flex;
    flex-direction: column;
    > span {
        font-size: 28px;
        font-weight: ${props => props.theme.FONTS.regular};
        color: ${props => props.theme.COLORS.white};
    }
}

@media (min-width: 720px){
    margin-bottom: 20px;
    margin-left: -40px;
}


`
export const SectionInvite = styled.div`

width: 100%;
background-color: ${props => props.theme.COLORS.black};

`

export const SectionInviteWrapper = styled.div`

max-width: 1280px;
margin: 0 auto;
display: flex;
align-items: center;
flex-direction: column;
padding: 90px 20px;

@media (min-width: 720px){
flex-direction: row;
}

`

export const InviteText = styled.div`

max-width: 525px;
margin-bottom: 64px;
order: 2;

> h2 {
    color: ${props => props.theme.COLORS.white};
    font-size: 36px;
    font-weight: ${props => props.theme.FONTS.medium};
    margin-top: 64px;
    margin-bottom: 64px;
}

> p {
    color: ${props => props.theme.COLORS.white};
    font-size: 18px;
    font-weight: ${props => props.theme.FONTS.regular};
    text-align: justify;
    > span {
        font-weight: ${props => props.theme.FONTS.medium};

    }

    & + p {
        margin-top: 12px;
    }
}

@media (min-width: 720px){
    margin-top: 0px;
    order: 0;

    > h2 {
        margin-bottom: 0px;
    }
}

`

export const InviteIconWrapper = styled.div`

flex: 1%;
display: flex;
justify-content: center;
`

export const SectionPlatforms = styled.div`

background-color: ${props => props.theme.COLORS.purple};

`

export const SectionPlatformsWrapper = styled.div`

padding: 200px 20px;
max-width: 1280px;
margin: 0 auto;

`

export const Platform = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

& + div {
    margin-top: 64px;
}

@media (min-width: 720px){
    flex-direction: row;
    align-items: center;

        & + div {
        margin-top: 34px;
    }
}

`

export const PlatformImageWrapper = styled.div`
width: 400px;
display: flex;
justify-content: center;

@media (min-width: 720px){
    margin-left: 80px;
    justify-content: flex-start;
}

`

export const PlatformInfo = styled.div`

max-width: 720px;
margin-top: 48px;

> h2 {
font-size: 42px;
font-weight: ${props => props.theme.FONTS.medium};
color: ${props => props.theme.COLORS.white};
margin-bottom: 24px;
}

> p {
text-align: justify;
font-size: 18px;
font-weight: ${props => props.theme.FONTS.regular};
color: ${props => props.theme.COLORS.white};

}

@media (min-width: 720px){
    margin-left: 80px;
    margin-top: 0px;
}

`
export const Footer = styled.div`

background-color: ${props => props.theme.COLORS.white};


`

export const FooterWrapper = styled.div`

padding: 90px 20px;
max-width: 1280px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

> div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
}
`

export const ButtonContact = styled.a`
  border-style: none;
  text-decoration: none;
  padding:  18px 56px;
  background-color: ${props => props.theme.COLORS.cian};
  border-radius: 16px;
  font-weight: ${props => props.theme.FONTS.medium};
  color: ${props => props.theme.COLORS.black};
  font-size: 20px;
  margin-bottom: 24px;
`;