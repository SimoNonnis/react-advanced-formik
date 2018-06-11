import styled from 'styled-components';
import { media, Avatar, H2 } from '@housesimple/react-components';

export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const VendorInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const VendorIcon = styled(Avatar)`
  color: ${({ theme }) => theme.color.mediumGrey};
`;

export const VendorFullName = styled(H2)`
  ${truncate('115px')};
  ${media.phone`
    ${truncate('250px')};
  `};
  ${media.smallTablet`
    ${truncate('350px')};
  `};

  margin: 0;
  margin-left: ${({ theme }) => theme.spacing.sm};
  padding: 7px 0;
`;

export const VendorLastName = styled.span`
  display: inline-block;
  padding-left: ${({ theme }) => theme.spacing.xs};
`;

export const Body = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};

  ${media.tablet`
    margin-top: ${({ theme }) => theme.spacing.lg};
  `};
`;
