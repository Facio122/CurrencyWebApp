import { useState, useEffect } from "react";
import "./calculator.css";

interface Props {
  data: Rate[];
}

function Calculator({ data }: Props) {
  const [inputLeftValue, setLeftValue] = useState<number>();
  const [inputRightValue, setRightValue] = useState<number>();
  const [leftFactor, setLeftFactor] = useState<number>(1);
  const [rightFactor, setRightFactor] = useState<number>(1);

  const findCurrByCode = (code: string): Rate | undefined => {
    return data.find((mid) => mid.code === code);
  };

  useEffect(() => {
    if (
      inputLeftValue !== undefined &&
      leftFactor !== undefined &&
      rightFactor !== undefined
    ) {
      setRightValue(inputLeftValue * (leftFactor / rightFactor));
    } else {
      setRightValue(0);
    }
    console.log(inputRightValue);
  }, [inputLeftValue, leftFactor, rightFactor]);

  return (
    <>
      <div className="words">Mam :</div>
      <input
        type="number"
        id="left"
        className="my-input"
        value={inputLeftValue}
        onChange={(e) => {
          setLeftValue(parseFloat(e.target.value));
          if (inputLeftValue && leftFactor && rightFactor)
            setRightValue(inputLeftValue * (leftFactor / rightFactor));
          else setRightValue(0);
          //   console.log(e.target.value);
        }}
      ></input>
      <select
        id="selCurrLeft"
        className="my-select"
        onChange={(e) => {
          const selectElement = e.target as HTMLSelectElement;
          const isUndefined = findCurrByCode(selectElement.value);
          if (isUndefined)
            setLeftFactor(findCurrByCode(selectElement.value)?.mid);
          else setLeftFactor(0);
          if (inputLeftValue && leftFactor && rightFactor)
            setRightValue(inputLeftValue * (leftFactor / rightFactor));
          else setRightValue(0);
          //console.log(e.target.value);
        }}
      >
        {data.map((option) => (
          <option value={option.code} key={option.code}>
            {option.code}
          </option>
        ))}
      </select>
      <div className="words">Chcę :</div>
      <input type="number" className="my-input" value={inputRightValue}></input>
      <select
        id="selCurrRight"
        className="my-select"
        onChange={(e) => {
          const selectElement = e.target as HTMLSelectElement;
          const isUndefined = findCurrByCode(selectElement.value);
          if (isUndefined)
            setRightFactor(findCurrByCode(selectElement.value)?.mid);
          else setRightFactor(0);
          if (inputLeftValue && leftFactor && rightFactor)
            setRightValue(inputLeftValue * (leftFactor / rightFactor));
          else setRightValue(0);
          //console.log(e.target.value);
        }}
      >
        {data.map((option) => (
          <option value={option.code} key={option.code}>
            {option.code}
          </option>
        ))}
      </select>
    </>
  );
}

export default Calculator;

export type Root = Root2[];

export interface Root2 {
  table: string;
  no: string;
  effectiveDate: string;
  rates: Rate[];
}

export interface Rate {
  currency: string;
  code: string;
  mid: number;
}
