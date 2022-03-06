import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from '../Logo';

import { Icon } from '@iconify/react';

import { ButtonMobile, Container, LinkNav, LogoWrapper, Nav, NavMobile, NavMobileLinks, OptionSocialWrapper, SidebarMobile, Social, Wrapper } from './styles';
import Image from 'next/image';


const Header: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleSidebar = () => {
        setIsOpen(state => !state)
    }

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

      <SidebarMobile isOpen={isOpen}>

      <NavMobile>
                <NavMobileLinks>
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
                </NavMobileLinks>
            <Social>
                <Link href={'https://www.github.com/marlonlencina'} passHref>
                <OptionSocialWrapper>
                    <Icon icon="akar-icons:github-fill" />
                </OptionSocialWrapper>
                </Link>
                <Link href={'https://www.linkedin.com/in/devmarlonlencina/'} passHref>
                <OptionSocialWrapper>
                    <Icon icon="akar-icons:linkedin-fill" />
                </OptionSocialWrapper>
                </Link>
            </Social>
        </NavMobile>

          </SidebarMobile>

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
                <Link href={'https://www.github.com/marlonlencina'} passHref>
                <OptionSocialWrapper>
                    <Icon icon="akar-icons:github-fill" />
                </OptionSocialWrapper>
                </Link>
                <Link href={'https://www.linkedin.com/in/devmarlonlencina/'} passHref>
                <OptionSocialWrapper>
                    <Icon icon="akar-icons:linkedin-fill" />
                </OptionSocialWrapper>
                </Link>
            </Social>
        </Nav>
        <ButtonMobile onClick={handleSidebar}>
            {
                isOpen ? 
                <Image alt='sidebar' src={isOpen ? 'https://devmarlon.s3.sa-east-1.amazonaws.com/x.svg': 'https://devmarlon.s3.sa-east-1.amazonaws.com/sidebar.svg'} height={'20px'} width={'23px'}/>
                :
                <Image alt='sidebar' src={isOpen ? 'https://devmarlon.s3.sa-east-1.amazonaws.com/sidebar.svg': 'https://devmarlon.s3.sa-east-1.amazonaws.com/sidebar.svg'} height={'20px'} width={'23px'}/>
            }
        </ButtonMobile>
      </Wrapper>
  </Container>
    )
}

export default Header;