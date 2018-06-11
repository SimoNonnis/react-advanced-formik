import styled from 'styled-components';

export const Label = styled.label`
  color: ${({ theme }) => theme.color.veryDarkBlue};
  font-family: ${({ theme }) => theme.base.fontFamily};
  margin-bottom: 7px;
  display: block;
  font-size: ${({ theme }) => theme.base.fontSize};
  font-weight: 600;
`;

export const SelectWrap = styled.div`
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.stoneGrey};
  color: ${({ theme }) => theme.color.veryDarkBlue};
  position: relative;

  &:after {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid ${({ theme }) => theme.color.veryDarkBlue};
    content: '';
    height: 0;
    pointer-events: none;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    z-index: 2;
  }
`;

export const SelectStyled = styled.select`
  box-sizing: border-box;
  display: block;
  appearance: none;
  background: none;
  box-shadow: none;
  border: none;
  box-shadow: none;
  outline: 0;
  font-family: ${({ theme }) => theme.base.fontFamily};
  font-size: 16px;
  font-weight: inherit;
  height: auto;
  line-height: 24px;
  margin: 0;
  width: 100%;
  color: ${({ theme }) => theme.color.veryDarkBlue};
  padding: 13px 50px 13px 15px;
`;
