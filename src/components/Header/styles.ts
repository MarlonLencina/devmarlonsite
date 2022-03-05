import styled, { css } from 'styled-components';
import Link from 'next/link'

interface PropsHeader {
    isScrolled: boolean
}

interface PropsSidevbar {
    isOpen: boolean
}

export const Container = styled.div<PropsHeader>`
    transition: all .2s;

    ${props => 

        props.isScrolled ? css`
    
        background-color: ${props.theme.COLORS.cian};
        position: sticky;
        top: 0;
        right: 0;
        left: 0;
        border-bottom: 1px solid black;
        z-index: 4;
    
        ` : css`
        
        background-color: transparent;
        
        `

    }
`;

export const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    position: relative;
    z-index: 5;
    background-color: ${props => props.theme.COLORS.cian};

    @media (min-width: 720px){
        background-color: transparent;
    }

`;

export const LogoWrapper = styled.div`
`;

export const LinkNav = styled.div`

    display: flex;
    align-items: center;
    margin-right: 20px;


    > a {
        > p {
            color: ${props => props.theme.COLORS.black};
            text-decoration: underline;
        }

        & + a {
            margin-left: 34px;
        }
    }




`;

export const Nav = styled.div`

display: none;

@media (min-width: 720px){
        display: flex;
        align-items: center;
    }

`

export const Social = styled.div`

display: flex;
align-self: center;

`

export const OptionSocialWrapper = styled.a`

height: 50px;
width: 50px;
background-color: ${props => props.theme.COLORS.black};
display: flex;
align-items: center;
justify-content: center;

& + a {
    margin-left: 4px;
}

> svg {
    color: ${props => props.theme.COLORS.white};
}

`

export const ButtonMobile = styled.button`

width: 40px;
height: 40px;
background-color: ${props => props.theme.COLORS.black};
border-radius: 12px;
border-style: none;
display: flex;
align-items: center;
justify-content: center;

@media (min-width: 720px){
        display: none;
    }

`

export const SidebarMobile = styled.div<PropsSidevbar>`

width: 100%;
height: 460px;
background-color: ${props => props.theme.COLORS.purple};
position: absolute;
top: ${props => props.isOpen ? '85px' : '-460px'};
bottom: 0;
left: 0;
right: 0;
z-index: 2;
transition: all 1s;
border-bottom: 1px solid black;
display: flex;
align-items: center;
justify-content: center;

@media (min-width: 720px){
    display: none;
}

`

export const NavMobile = styled.aside`

display: flex;
flex-direction: column;
align-items: center;



`

export const NavMobileLinks = styled.aside`

display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 24px;

> a {
    text-decoration: none;
    color: ${props => props.theme.COLORS.black};
    font-size: 20px;
    & + a {
        margin-top: 24px;
    }
}

`