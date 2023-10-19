interface Props {
  data: Rate[];
}

function ExchangeRate({ data }: Props) {
  return (
    <>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            KOD WALUTY
            <ul className="list-group">
              {data.map((item) => (
                <li className="list-group-item text -nowrap" key={item.code}>
                  {item.code}
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            NAZWA WALUTY
            <ul className="list-group">
              {data.map((item) => (
                <li className="list-group-item text -nowrap" key={item.code}>
                  {item.currency}
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            {" "}
            KURS
            <ul className="list-group">
              {data.map((item) => (
                <li className="list-group-item text -nowrap" key={item.code}>
                  {item.mid}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExchangeRate;

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
