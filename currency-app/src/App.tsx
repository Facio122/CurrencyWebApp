import "./App.css";
import "./index.css";
import ExchangeRate from "./components/currencyComponent";
import Calculator from "./components/calculator";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState<Rate[]>([]);

  useEffect(() => {
    axios
      .get("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")
      .then((response) => {
        setData(response.data[0]?.rates || []);
      })
      .catch((error) => {
        console.error("Something go wrong", error);
      });
  }, []);

  const dataPLN: Rate = { currency: "złotówki", code: "PLN", mid: 1 };
  if (!data.some((item) => item.code === dataPLN.code)) {
    data.push(dataPLN);
  }

  return (
    <>
      <h1>Kurs walut </h1>
      <div className="container center">
        <div className="half">
          <ExchangeRate data={data} />
        </div>
        <div className="half">
          <div className="transform">
            <p className="my-text">KALKULATOR WALUT</p>
            <div className="calculator">
              <Calculator data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

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
