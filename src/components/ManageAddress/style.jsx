import styled from 'styled-components';
import { media, Button } from '@housesimple/react-components';

export const Container = styled.div`
  position: relative;
`;

export const AddAddressContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.md} 0;
  text-align: center;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${media.phone`
    flex-direction: row;
  `};

  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.color.lightGrey2};
  & + & {
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;

export const DeleteButton = styled(Button)`
  color: ${({ theme }) => theme.color.red};

  ${media.phone`
    font-size: 14px;
  `};

  padding: ${({ theme }) => theme.spacing.sm};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.red};
    text-decoration: underline;
  }
`;
