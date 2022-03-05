import React, { useEffect, useState } from 'react';
import Logo from '../Logo';

import { Container, GoBackButton, LogoWrapper, Wrapper } from './styles';
import { Icon } from '@iconify/react';
import Router, { useRouter } from 'next/router';

const HeaderSimple: React.FC = () => {


    const router = useRouter()
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        console.log(position)
    };

    const handleGoBack = () => {
        Router.back()
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
  <Container isScrolled={scrollPosition >= 80}>
      <Wrapper>
          <LogoWrapper>
                <Logo/>
        </LogoWrapper>
        <GoBackButton onClick={handleGoBack}>
            <Icon icon="ant-design:arrow-left-outlined" />
            <span>Voltar</span>
        </GoBackButton>
      </Wrapper>
  </Container>
    )
}

export default HeaderSimple;