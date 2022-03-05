import React, { ReactComponentElement } from 'react';
import { Icon as IconIconify } from '@iconify/react';

import { Container } from './styles';

interface Props {
  IconName: string;
}


export const Icon: React.FC<Props> = ({
  IconName
}) => {
  return (
      <Container>
          <IconIconify icon={IconName}/>
      </Container>
  )
}
