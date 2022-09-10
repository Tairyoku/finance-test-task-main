import React, { useEffect, useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import "./socketList.css";

export const SocketList = ({ quote }) => {

  const [price, setPrice] = useState(0);
  const [style, setStyle] = useState("");

  useEffect(() => {
    if (quote.price > price) {
      setStyle("socket__up");
    } else {
      setStyle("socket__down");
    }
    setPrice(quote.price);
    setTimeout(() => setStyle(""), 2000);
  }, [quote.price]);



  return (
    <div className="socket">
      <div className="socket__ticker">{quote.ticker}</div>
      <div className={`socket__price ${style}`}>
        {quote.price}
        <div className="socket__upOrDown">
          {style === "socket__up" && <GoTriangleUp size={12} color="green" />}
          {style === "socket__down" && (
            <GoTriangleDown size={12} color="red" className="socket__godown" />
          )}
        </div>
      </div>
      <div
        className="socket__change"
        style={quote.change > 0 ? { color: "green" } : { color: "red" }}
      >
        {Math.abs(quote.change)}
      </div>
      <div
        className={
          quote.change_percent > 0
            ? `socket__percent socket__percent__up`
            : "socket__percent socket__percent__down"
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
    </div>
  );
};
