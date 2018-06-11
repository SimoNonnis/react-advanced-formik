import styled from 'styled-components';
import {
  media,
  DocumentPlaceholder,
  P,
  RadioBox,
  Button as Btn,
} from '@housesimple/react-components';

export const PreviewContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.color.lightGrey3};
  padding: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const Preview = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.color.mediumBlue};
`;

export const FileName = styled(P)`
  margin: 0;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const DocPlaceholder = styled(DocumentPlaceholder)`
  display: block;
`;

export const FilePreview = styled.img`
  display: block;
  width: 210px;
  height: 150px;
  object-fit: cover;

  ${media.phone`
    width: 250px;
    height: 190px;
  `};
`;

export const TypeOfDocContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} 0;

  ${media.phone`
    max-width: 80%;
  `};
`;

export const ConfirmContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} 0;

  ${media.phone`
    max-width: 80%;
  `};
`;

export const ConfirmRadioBox = styled(RadioBox)`
  display: block;

  & + & {
    margin-top: ${({ theme }) => theme.spacing.md};
    margin-left: 0;
  }
`;

export const ConfirmLabel = styled.span`
  font-weight: 400;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Button = styled(Btn)`
  min-width: 181px;
  margin: ${({ theme }) => theme.spacing.sm};
`;
