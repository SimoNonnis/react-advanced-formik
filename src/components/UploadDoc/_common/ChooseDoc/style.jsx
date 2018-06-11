import styled from 'styled-components';

import { P } from '@housesimple/react-components';

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Description = styled(P)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
