import styled from 'styled-components';
import { H2, P, Button as Btn } from '@housesimple/react-components';

export const RemoveVendorContainer = styled.div`
  display: inline-block;
`;

export const ModalContent = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const Title = styled(H2)`
  font-size: 22px;
  line-height: 25px;
`;

export const Text = styled(P)`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Button = styled(Btn)`
  min-width: 181px;
  margin: ${({ theme }) => theme.spacing.sm};
`;
