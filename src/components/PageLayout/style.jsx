import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { H1, Button } from '@housesimple/react-components';

export const PageOuter = styled.div`
  background-color: #f9f9f9;
  padding: ${({ theme: { spacing } }) => `${spacing.sm} ${spacing.md}`};
  max-width: 770px;
  margin: 0 auto;
`;

export const PageInner = styled.div`
  padding-top: ${({ theme: { spacing } }) => `${spacing.lg}`};
`;

export const BackLinkSection = styled.div`
  text-align: right;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.color.mediumBlue};
  font-size: 16px;
`;

export const LegacyBack = styled(Button)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Arrow = styled.div`
  display: inline-block;

  &:before,
  &:after {
    position: relative;
    content: '';
    display: inline-block;
    vertical-align: middle;
    bottom: 1px;
  }

  &:before {
    border-color: ${({ theme }) => theme.color.mediumBlue};
    border-style: solid;
    border-width: 1px 1px 0 0;
    height: 8px;
    width: 8px;
    left: 1px;
    transform: rotate(-135deg);
  }

  &:after {
    border-radius: 50% 0 0 50%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.mediumBlue};
    width: 16px;
    left: -8.5px;
  }
`;

export const Title = styled(H1)`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
