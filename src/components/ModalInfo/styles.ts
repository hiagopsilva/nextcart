import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;

  position: absolute;
  width: 12rem;

  background-color: #fff;
  margin-left: -14.5rem;

  margin-top: 0.2rem;

  flex-direction: column;

  border-radius: 8px;
`;

export const TextHeader = styled.a`
  width: 100%;
  font-weight: bold;
  font-size: 0.9rem;

  background-color: #50E485;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  padding-left: 0.6rem;
`;

export const Name = styled.span`
  margin: 0.3rem 1.2rem 0;
  font-weight: 300;

  & + & {
    margin-bottom: 0.5rem;
  }
`;

export const Arrow = styled.div`
  background-color: #fff;

  width: 16px;
  height: 16px;

  position: absolute;
  right: -6px;

  margin-top: 26px;

  transform: rotate(45deg);
`;
