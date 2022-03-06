import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import {Icon as IconComponents} from '../components/Icon'
import Logo from '../components/Logo'
import { Main, MainBackground, MainWrapper, MainText, MainMidia, ImageWrapper, MainInfo, SectionInvite, InviteText, SectionInviteWrapper, InviteIconWrapper, SectionPlatforms, SectionPlatformsWrapper, Platform, PlatformImageWrapper, PlatformInfo, Footer, FooterWrapper, ButtonContact, MainImageWrapper } from '../styles/pages/home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DevM - Home</title>
      </Head>
      <Header/>
      <Main>

        <MainBackground/>
          <MainWrapper>
            <MainText
              initial={{ x: -300}}
              animate={{ x: 0}}
              transition={{ ease: 'easeInOut', duration: 1 }}
              >
                <h1>Dando vida,
                através de codígo.</h1>
                <span>
                Sou um desenvolvedor focado no Front-end e com conhecimentos em Back-end também, Tenho interesse em Tecnologia desde cedo e já trabalhei com design UI/UX por um longo periodo de tempo antes de encontrar o desenvolvimento.
                </span>
                <MainImageWrapper
                         animate={{ rotate: 360 }}
                         transition={{ ease: "linear", duration: 3, repeat: Infinity }}
                >
                  <Image src={'https://devmarlon.s3.sa-east-1.amazonaws.com/badge.svg'} alt="photodevmarlon" height={'155px'} width={'155px'} layout={'responsive'}/>
                </MainImageWrapper>
            </MainText>
            <MainMidia>
              <ImageWrapper>
                <Image src={'https://devmarlon.s3.sa-east-1.amazonaws.com/photodevmarlon.png'} alt="photodevmarlon" height={'450px'} width={'451px'} layout={'responsive'}/>
              </ImageWrapper>
                <MainInfo>
                    <span>Marlon Lencina</span>
                    <div>
                      <span>Front-end</span>
                      <span>web &amp;</span>
                      <span>mobile</span>
                    </div>
                  </MainInfo>
            </MainMidia>
          </MainWrapper>
        </Main>
        <SectionInvite>
          <SectionInviteWrapper>
          <InviteText>
            <h2>
            Borar tirar sua ideía do papel?
            </h2>
            <p>
            No final da página você vai encontrar minhas redes sociais e número de contato profissional, estarei a disposicão para te atender.
            </p>
            <p>
            <span>-  Quero fazer mas não entendo nada sobre codígo!
            <br/>
            </span>
            Sem problema :) Estou a disposição para ser direto e clarosem precisar quebrar sua cabeça com termos técnicos.
            </p>
          </InviteText>
          <InviteIconWrapper>
            <IconComponents IconName={"bx:down-arrow-alt"}/>
          </InviteIconWrapper>
          </SectionInviteWrapper>
        </SectionInvite>
        <SectionPlatforms>  
          <SectionPlatformsWrapper>
            <Platform>
              <PlatformImageWrapper>
                <Image
                src={'https://devmarlon.s3.sa-east-1.amazonaws.com/phone.svg'} 
                alt='Smartphone'
                width={188}
                height={300}
                />
              </PlatformImageWrapper>
              <PlatformInfo>
                <h2>Aplicações incríveis <br />
                no Mobile</h2>
                <p>Aplicações cross-platform (IOS e Android) contando com o poder do ecossistema React utilizando o React native para trazer sua idéia ao maior número de pessoas poss;iveis tanto no ambiente WEB e Mobile.</p>
              </PlatformInfo>
            </Platform>
            <Platform>
              <PlatformImageWrapper>
                <Image alt='web' src={'https://devmarlon.s3.sa-east-1.amazonaws.com/web.svg'} height={'280px'} width={'392px'} />
              </PlatformImageWrapper>
              <PlatformInfo>
                <h2>Sem esquecer <br />
                da WEB</h2>
                <p>Aplicações WEB extramente perfomáticas, leves e eficientes utilizando React e seu Framework (NextJS) com suas especifidades de páginas estaticas e de grande escalabilidade é talvez a sua melhor opção.</p>
              </PlatformInfo>
            </Platform>
          </SectionPlatformsWrapper>
        </SectionPlatforms>
        <Footer>
          <FooterWrapper>
            <div>
            <h1>Eai! borar fazer seu orçarçamento?</h1>
            <p>Você vai ser redirecionado para a página de contatos clicando no botão abaixo, te espero lá!</p>
            </div>
            <Link href={'/contact'} passHref >
            <ButtonContact>
              Entrar em contato! =)
            </ButtonContact>
            </Link>
            <Logo/>
          </FooterWrapper>
        </Footer>
    </>
  )
}

export default Home

