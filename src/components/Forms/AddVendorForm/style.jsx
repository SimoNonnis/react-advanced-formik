import styled from 'styled-components';
import { H2 } from '@housesimple/react-components';

export const TitleContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled(H2)`
  font-size: 27px;
  margin: 0;
`;
