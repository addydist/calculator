import React, { useState } from "react";
import { Scissors, ListRestart } from 'lucide-react';
import {
  Container,
  Display,
  ButtonGrid,
  Button,
  HistoryButton,
  ModalOverlay,
  ModalContent,
  HistoryItem,
} from "../styles";

export default function Component() {
  const [display, setDisplay] = useState("0");
  const [history, setHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleNumberClick = (num: string) => {
    setDisplay((prev) => (prev === "0" ? num : prev + num));
  };

  const handleOperationClick = (op: string) => {

    setDisplay((prev) => {
      const lastChar = prev.slice(-1);
      if (["+", "-", "*", "/"].includes(lastChar)) {
        return prev.slice(0, -1) + op;
      }
      return prev + op;
    });
  };

  const handleEqualsClick = () => {
    try {

      const result = eval(display);
      const calculation = `${display} = ${result}`;
      setDisplay(result.toString());
      setHistory((prev) => [...prev, calculation]);
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleHistoryClick = () => {
    setShowHistory(true);
  };

  const handleCut = () => {
    setDisplay((prev) => {
      if (prev.length > 1) {
        return prev.slice(0, -1);
      } else {
        return "0";
      }
    });
  };

  return (
    <Container>
      <HistoryButton onClick={handleHistoryClick}>
        <ListRestart />
        <span>History</span>
      </HistoryButton>
      <Display>{display}</Display>
      <ButtonGrid>
        <Button color="#ff9500" onClick={handleClear}>
          C
        </Button>
        <Button onClick={handleCut}>
          <Scissors />
        </Button>
        <Button onClick={() => handleOperationClick("/")}>/</Button>
        <Button onClick={() => handleOperationClick("*")}>×</Button>
        <Button onClick={() => handleNumberClick("7")}>7</Button>
        <Button onClick={() => handleNumberClick("8")}>8</Button>
        <Button onClick={() => handleNumberClick("9")}>9</Button>
        <Button onClick={() => handleOperationClick("-")}>-</Button>
        <Button onClick={() => handleNumberClick("4")}>4</Button>
        <Button onClick={() => handleNumberClick("5")}>5</Button>
        <Button onClick={() => handleNumberClick("6")}>6</Button>
        <Button onClick={() => handleOperationClick("+")}>+</Button>
        <Button onClick={() => handleNumberClick("1")}>1</Button>
        <Button onClick={() => handleNumberClick("2")}>2</Button>
        <Button onClick={() => handleNumberClick("3")}>3</Button>
        <Button onClick={() => handleNumberClick(".")}>.</Button>
        <Button onClick={() => handleNumberClick("0")}>0</Button>
        <Button onClick={() => handleNumberClick("00")}>00</Button>
        <Button color="#4cd964" onClick={handleEqualsClick} className="equal-button">
          =
        </Button>
      </ButtonGrid>
      {showHistory && (
        <ModalOverlay onClick={() => setShowHistory(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2 style={{ color: "white", marginBottom: "20px" }}>
              Calculation History
            </h2>
            {history.map((item, index) => (
              <HistoryItem key={index}>{item}</HistoryItem>
            ))}
            <Button onClick={() => setShowHistory(false)}>Close</Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}
