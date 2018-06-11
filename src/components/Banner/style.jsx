import styled from 'styled-components';
import { Attention } from '@housesimple/react-components';

export const Container = styled.div`
  ${({ theme: { color }, type }) => type === 'user' && `background-color: ${color.red15}`};
  ${({ theme: { color }, type }) => type === 'system' && `background-color: ${color.lightOrange}`};
  ${({ theme: { color }, type }) => type === 'success' && `background-color: ${color.lightGreen}`};
  padding: ${({ theme }) => theme.spacing.md};
  position: fixed;
  top: 10%;
  right: 5%;
  z-index: 3;
  max-width: 80%;
  text-align: center;
`;

export const AttentionIcon = styled(Attention)`
  ${({ theme: { color }, type }) => type === 'user' && `fill: ${color.red}`};
  ${({ theme: { color }, type }) => type === 'system' && `fill: ${color.veryDarkBlue}`};
  ${({ theme: { color }, type }) => type === 'success' && `fill: ${color.veryDarkBlue}`};
  margin-right: 6px;
  vertical-align: sub;
`;
