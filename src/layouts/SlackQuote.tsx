import React, { useRef } from 'react'

import { useQuoteContext } from '../contexts/QuoteContext'
import AddReactionEmoji from '../images/add-reaction.png'
import DefaultProfile from '../images/default-profile.png'
import { downloadElement, getTime } from '../utils/functions'

const SlackQuote: React.FC = () => {
  const { quoteList, name, time, profile, emojiList, emojiNumberList } =
    useQuoteContext()

  const slackQuoteRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <div
        ref={slackQuoteRef}
        className="flex flex-row w-[500px] bg-[#191B1E] p-4"
      >
        <img
          src={profile ? URL.createObjectURL(profile) : DefaultProfile}
          alt="profile"
          className="w-12 h-12 rounded-md"
        />
        <div className="flex flex-col ml-4 relative">
          <div>
            <span className="font-bold">{name || 'name'}</span>
            <span className="font-light text-xs color=[#969696] ml-2">
              {getTime(time)}
            </span>
          </div>
          {quoteList.map((quote, index) => (
            <div
              key={index}
              className={`w-full ${index !== 0 ? 'mt-2' : 'mt-0'} break-all`}
            >
              <span>
                {quote.split('\n').map((qq, ii) => (
                  <React.Fragment key={ii}>
                    {ii !== 0 && <br />}
                    {qq}
                  </React.Fragment>
                ))}
              </span>
              <div className="w-full flex flex-row item-center">
                {Array.isArray(emojiList[index]) &&
                  emojiList[index].map(
                    (emoji, i) =>
                      emoji !== '' && (
                        <div
                          key={i}
                          className="px-2 py-1 bg-[#1F2124] flex flex-row item-center rounded-2xl mr-2"
                        >
                          <img
                            src={emoji}
                            alt="emoji"
                            className="w-4 h-4 my-auto"
                          />
                          <div className="text-sm ml-2 my-auto">
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
      <button
        type="button"
        className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => downloadElement(slackQuoteRef.current as HTMLDivElement)}
      >
        Download
      </button>
    </>
  )
}

export default SlackQuote
