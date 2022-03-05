import React from 'react';

import LogoDevMarlon from '../../assets/logodevmarlon.svg'
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
          <Image alt='logo devmarlon' src={LogoDevMarlon}/>
  )
}

export default Logo;