import styled from 'styled-components';
import { media, Button, Confirmation, UploadIcon } from '@housesimple/react-components';

export function cleanFieldset() {
  return `
    border: none;
    margin: 0;
    padding: 0;
  `;
}

export function cleanLegend() {
  return `
    display: block;
    padding: 0;
    margin: 0;
    border: none;
  `;
}

export const FieldRow = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};

  ${media.phone`
    display: flex;
    align-items: ${({ alignBottom }) => (alignBottom ? `flex-end` : `flex-start`)};
    justify-content: ${({ noSpaceBetween }) => (noSpaceBetween ? `flex-start` : `space-between`)};
    flex-wrap: wrap;
  `};
`;

export const FieldBox = styled.div`
  ${media.phone`
    ${({ center }) => center && `text-align: center`};
    ${({ small }) => small && `width: 25%`};
    ${({ medium }) => medium && `width: 31%`};
    ${({ large }) => large && `width: 38%`};
    ${({ xlarge }) => xlarge && `width: 66%`};
    ${({ fullWidth }) => fullWidth && `width: 100%`};
  `};

  ${media.phone`
    ${({ marginLeft }) => marginLeft && `margin-left: 3%`};
  `};
`;

export const Fieldset = styled.fieldset`
  ${cleanFieldset()};
  margin-top: ${({ theme }) => theme.spacing.xs};
  padding: 0 ${({ theme }) => theme.spacing.sm};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.color.lightGrey2};
`;

export const FieldsetRadios = styled.fieldset`
  ${cleanFieldset()};
  margin-top: 0;
`;

export const LegendWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const Legend = styled.legend`
  ${cleanLegend()};
  color: ${({ theme }) => theme.color.veryDarkBlue};
  font-size: 16px;
  margin-bottom: 14px;
`;

export const LegendRadios = Legend.extend`
  font-size: ${({ theme }) => theme.base.fontSize};
  margin-bottom: 16px;
  font-weight: 600;
  color: ${({ theme, error }) => (error ? theme.color.red : theme.color.veryDarkBlue)};
`;

export const ErrorRadios = styled.div`
  min-height: 17px;
  margin-top: 12px;
  color: ${({ theme }) => theme.color.red};
`;

export const ControlButton = styled(Button)`
  font-size: 11px;

  ${media.phone`
    font-size: 14px;
  `};

  padding: ${({ theme }) => theme.spacing.sm};
  text-decoration: none;

  & + & {
    padding-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const ContainerProofOf = styled.div`
  margin-bottom: 32px;
  position: relative;
`;

export const LegendProofOf = Legend.extend`
  font-size: ${({ theme }) => theme.base.fontSize};
  margin-bottom: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.veryDarkBlue};
`;

export const AcceptedDocument = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.green};
`;

export const ConfirmationIcon = styled(Confirmation)`
  padding-right: ${({ theme }) => theme.spacing.sm};
`;

export const DocumentName = styled.span`
  padding-top: 3px;
`;

export const DeleteDocument = styled(Button)`
  color: ${({ theme }) => theme.color.veryDarkBlue};
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing.lg};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.veryDarkBlue};
  }
`;

export const Remove = styled.span`
  padding-left: ${({ theme }) => theme.spacing.sm};
  padding-top: 4px;
`;

export const OpenGalleryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconUpload = styled(UploadIcon)`
  padding-right: ${({ theme }) => theme.spacing.sm};
`;

export const SubmitButtonWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.sm};
  ${({ noPad }) => noPad && `padding: 0`};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  text-align: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 8;
  background-color: rgba(299, 299, 299, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;
