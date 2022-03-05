import styled, { css } from 'styled-components';

interface PropsHeader {
    isScrolled: boolean
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
        z-index: 2;
        border-bottom: 1px solid black;
    
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
`;

export const LogoWrapper = styled.div`
`;

export const GoBackButton = styled.button`

display: flex;
align-items: center;
border-style: none;
background:none ;
cursor: pointer;

> span {
    text-decoration: underline;
    margin-left: 12px;
}
`;