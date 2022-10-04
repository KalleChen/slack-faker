import React from 'react'

import { useQuoteContext } from '../contexts/QuoteContext'
import { getTime } from '../utils/functions'

const SlackQuote: React.FC = () => {
  const { quoteList, name, time, profile } = useQuoteContext()
  return (
    <div className="flex flex-row w-[500px] bg-[#191B1E] p-4">
      <img
        src={
          profile
            ? URL.createObjectURL(profile)
            : 'https://ca.slack-edge.com/T0266FRGM-U011PLSSMA9-g7e8a6705c42-512'
        }
        alt="profile"
        className="w-12 h-12 rounded-md"
      />
      <div className="w-full flex flex-col ml-4 relative">
        <div>
          <span className="font-bold">{name || 'name'}</span>
          <span className="font-light text-xs color=[#969696] ml-2">
            {getTime(time)}
          </span>
        </div>
        {quoteList.map((quote, index) => (
          <div
            key={index}
            className={`w-full ${index !== 0 ? 'mt-2' : 'mt-0'}`}
          >
            {quote.split('${new-line}').map((qq, ii) => (
              <React.Fragment key={ii}>
                {ii !== 0 && <br />}
                {qq}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SlackQuote
