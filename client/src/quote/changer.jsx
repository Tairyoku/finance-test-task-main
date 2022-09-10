import React, { useState } from 'react'
import { QuoteInfo } from '../quoteInfo/qouteinfo'
import { SocketList } from '../socketList/socketList'

export const Changer = ({quote}) => {

  const [isVisible, setIsVisible] = useState(false)

  return (

        <div>
            {!isVisible && <div onClick={() => setIsVisible(true)}>
              <SocketList quote={quote} />
            </div>}
            {isVisible && <div onClick={() => setIsVisible(false)}>
              <QuoteInfo quote={quote} />
            </div>}
    </div>
  )
}
