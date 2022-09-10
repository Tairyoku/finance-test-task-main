import io from 'socket.io-client'
import { useMemo, useState } from 'react';
import { SocketList } from '../socketList/socketList';
import './socket.css'
import { QuoteInfo } from '../quoteInfo/qouteinfo';
import { Changer } from './changer';

export const Socket = () => {
  
  const [quotes, setQuotes] = useState(null)
  
  const socket = io.connect('http://localhost:4000');
  socket.emit('start');
  useMemo(() => {
    socket.on('ticker', function (response) {
      const res = Array.isArray(response) ? response : [response];
      setQuotes(res)
    })
  }, [])
  
  return (
    <div className='socket_main'>
      {
        quotes && quotes.map((quote) =>
        <div>
            <Changer quote={quote} />
          </div>
        )
      }
    </div>
  );
}

