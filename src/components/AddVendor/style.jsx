import styled from 'styled-components';
import { media } from '@housesimple/react-components';

export const AddVendorContainer = styled.div`
  text-align: right;
  padding: ${({ theme }) => theme.spacing.md} 0;

  ${media.tablet`
    padding: ${({ theme }) => theme.spacing.lg} 0;
  `};
`;
