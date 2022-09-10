import React, { useEffect, useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import Moment from 'react-moment'
import "./quoteinfo.css";

export const QuoteInfo = ({ quote }) => {

  const [price, setPrice] = useState(0);
  const [style, setStyle] = useState("");

  useEffect(() => {
    if (quote.price > price) {
      setStyle("quoteInfo__up");
    } else {
      setStyle("quoteInfo__down");
    }
    setPrice(quote.price);
    setTimeout(() => setStyle(""), 2000);
  }, [quote.price]);


  return (
    <div className="quoteInfo">
      <div className="quoteInfo__ticker">{quote.ticker}
      </div>
<div className="quoteInfo__values">
      <div className={`quoteInfo__price ${style}`}>
        {quote.price}
        <div className="quoteInfo__upOrDown">
          {style === "quoteInfo__up" && <GoTriangleUp size={12} color="green" />}
          {style === "quoteInfo__down" && (
            <GoTriangleDown size={12} color="red" className="quoteInfo__godown" />
          )}
        </div>
      </div>
      <div
        className={
          quote.change_percent > 0
            ? `quoteInfo__percent quoteInfo__percent__up`
            : "quoteInfo__percent quoteInfo__percent__down"
        }
      >
        {quote.change_percent > 0 && (
          <AiOutlineArrowUp size={16} color="green" />
        )}
        {quote.change_percent <= 0 && (
          <AiOutlineArrowDown size={16} color="red" />
        )}
        {quote.change_percent}%
      </div>
      <div
        className="quoteInfo__change"
        style={style && quote.change > 0 ? { color: "green" } : { color: "red" }}
      >
        {quote.change>0 ? '+' : '-'}{quote.change}
      </div>
</div>
<div className="quoteinfo__info">
<div className="quoteinfo__date">LAST UPDATE:
<Moment date={quote.last_trade_time} format='D MMM YYYY - HH : mm' />
  / </div>
<div className="quoteinfo__exchange"> {quote.exchange}</div>

</div>
    </div>
  );
};
