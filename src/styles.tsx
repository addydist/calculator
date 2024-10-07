import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  background-color: #1c1c1c;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: relative;
`;

export const Display = styled.div`
  background-color: #333;
  color: white;
  font-size: 2em;
  padding: 10px;
  text-align: right;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  .equal-button {
    grid-column: span 2;
  }
`;

export const Button = styled.button<{ color?: string }>`
  background-color: ${(props) => props.color || "#4d4d4d"};
  color: white;
  border: none;
  padding: 15px;
  font-size: 1.2em;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
`;

export const HistoryItem = styled.div`
  color: white;
  margin-bottom: 10px;
  font-size: 1.2em;
`;
export const HistoryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4d4d4d;
  color: white;
  border: none;
  padding: 10px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.2s;
  margin-bottom: 10px;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }
  span {
    margin-left: 5px;
  }
`;
