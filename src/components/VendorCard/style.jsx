import styled from 'styled-components';
import { media } from '@housesimple/react-components';

export const VendorCardOuter = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.sm};
  border-radius: 4px;
  ${media.tablet`
    padding: ${({ theme }) => theme.spacing.lg};
  `};

  & + & {
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;
