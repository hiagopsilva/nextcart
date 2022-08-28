import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;

  display: flex;
  align-items: center;
  padding: 0.6rem 1.37rem;
  
  border-bottom: 1px solid #D9D9D9;

  cursor: pointer;

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
   
  img {
    background-image: url('./update.svg');
  }

  &:hover {
    background: #D9D9D9;

    span {
      color: #2F3A58;
    }

    div.modal {
      display: flex;
    }
  }
`;

export const Avatar = styled.img`
  width: 6.18rem;

  border: 5px solid #2F3A58;
  border-radius: 50%;
  background: #50E485;
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  margin-left: 2.37rem;

  height: 5rem;
`;

export const TitleCard = styled.span`
  font-size: 1.30rem;
  font-weight: 600;

  color: #000;
`;

export const TextCard = styled.span`
  font-size: 1.10rem;
  font-weight: 300;

  color: #000;
`;

export const IconUpdate = styled.img.attrs({
  src: './update.svg'
})`
  margin-left: auto;
`;

export const WrapperModal = styled.div`
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
