import Image from 'next/image';
import React from 'react';
import { Background, BackgroundWrapper, Container, Content, ImageWrapper, Option, Options } from '../styles/pages/contact';
import { Icon } from '@iconify/react';
import HeaderSimple from '../components/HeaderSimple';
import Head from 'next/head';

const Contact: React.FC = () => {
  return (
  <Container>
      <Head>
        <title>DevM - Contact</title>
      </Head>
      <HeaderSimple/>
      <Background>
          <BackgroundWrapper>
            <ImageWrapper>
                <Image alt='smartphone' src={'https://devmarlon.s3.sa-east-1.amazonaws.com/phonecontact.svg'} width={'365p'} height={'250px'}/>
            </ImageWrapper>
          </BackgroundWrapper>
      </Background>
      <Content>
          <span>Quem bom que você chegou atê aqui, me diz</span>
          <h2>Por onde você prefere conversar?</h2>

                <Options>
                    <Option href='https://wa.me/5551980392037?text=Oi!%20Eu%20tenho%20interesse.%20vamos%20conversar?%20'>
                        <Icon icon="akar-icons:whatsapp-fill" />
                        <span>Whatsapp</span>
                    </Option>
                    <span>Ou</span>
                    <Option href="mailto:devmarlon.tech@gmail.com">
                        <Icon icon="carbon:email" />
                        <span>E-mail</span>
                    </Option>
                </Options>
            </Content>
  </Container>
 )
}

export default Contact;