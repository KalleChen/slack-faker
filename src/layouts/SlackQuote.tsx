import React from 'react'

import { useQuoteContext } from '../contexts/QuoteContext'
import AddReactionEmoji from '../images/add-reaction.png'
import { getTime } from '../utils/functions'

const SlackQuote: React.FC = () => {
  const { quoteList, name, time, profile, emojiList, emojiNumberList } =
    useQuoteContext()
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
            {quote.split('\n').map((qq, ii) => (
              <React.Fragment key={ii}>
                {ii !== 0 && <br />}
                {qq}
              </React.Fragment>
            ))}
            <div className="w-full flex flex-row">
              {Array.isArray(emojiList[index]) &&
                emojiList[index].map(
                  (emoji, i) =>
                    emoji !== '' && (
                      <div
                        key={i}
                        className="px-2 py-1 bg-[#1F2124] flex flex-row item-center rounded-2xl mr-2"
                      >
                        <img src={emoji} alt="emoji" className="w-4 h-4" />
                        <div className="text-sm ml-2">
                          {emojiNumberList?.[index]?.[i] || 0}
                        </div>
                      </div>
                    )
                )}
              {Array.isArray(emojiList[index]) &&
                emojiList[index].length !== 0 && (
                  <div className="px-2 py-1 bg-[#1F2124] flex flex-row item-center rounded-2xl mr-2">
                    <img
                      src={AddReactionEmoji}
                      alt="emoji"
                      className="w-5 h-5"
                    />
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SlackQuote
