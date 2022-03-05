import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from '../Logo';

import { Icon } from '@iconify/react';

import { ButtonMobile, Container, LinkNav, LogoWrapper, Nav, OptionSocialWrapper, Social, Wrapper } from './styles';


const Header: React.FC = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        console.log(position)
    };
    
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
        <Nav>
            <LinkNav>
                <Link href={'/'} passHref>
                <a>
                    <p>Projetos</p>
                </a>
                </Link>
                <Link href={'/'} passHref>
                <a>
                    <p>Blog</p>
                </a>
                </Link>
                <Link href={'/contact'} passHref>
                <a>
                    <p>Entrar em contato</p>
                </a>
                </Link>
            </LinkNav>
            <Social>
                <OptionSocialWrapper>
                    <Icon icon="akar-icons:github-fill" />
                </OptionSocialWrapper>
                <OptionSocialWrapper>
                    <Icon icon="akar-icons:linkedin-fill" />
                </OptionSocialWrapper>
            </Social>
        </Nav>
        <ButtonMobile/>
      </Wrapper>
  </Container>
    )
}

export default Header;