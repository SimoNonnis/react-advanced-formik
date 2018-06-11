import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 1;
`;

export const LoaderOuter = styled.div`
  position: fixed;
  text-align: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  background-color: rgba(299, 299, 299, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;
