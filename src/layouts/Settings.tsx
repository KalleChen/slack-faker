import React from 'react'

import Input from '../components/Input'
import TextArea from '../components/TextArea'
import { useQuoteContext } from '../contexts/QuoteContext'

const Settings: React.FC = () => {
  const {
    name,
    handleChangeName,
    time,
    handleChangeTime,
    handleChangeProfile,
    handleChangeEmojiList,
    emojiNumberList,
    handleChangeEmojiNumberList,
    handleAddQuote,
    handleRemoveQuote,
    handleAddEmoji,
    handleRemoveEmoji,
    quoteList,
    handleChangeQuote,
  } = useQuoteContext()
  return (
    <div className="grid grid-cols-2 p-6 w-full gap-4 max-w-[800px]">
      <Input
        label="name"
        placeholder="name"
        value={name}
        type="text"
        handleChange={handleChangeName}
      />
      <Input
        label="time"
        placeholder=""
        value={time}
        type="time"
        handleChange={handleChangeTime}
      />
      <Input
        label="profile"
        placeholder=""
        value={undefined}
        type="file"
        handleChange={handleChangeProfile}
        accept="image/*"
      />
      <button
        type="button"
        className="h-3/5 mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w"
        onClick={handleAddQuote}
      >
        Add Quote
      </button>
      <React.Fragment>
        {quoteList.map((quote, quoteIndex) => (
          <React.Fragment key={quoteIndex}>
            <div className="col-start-1 col-end-3 relative">
              <TextArea
                label={`Quote ${quoteIndex + 1}`}
                placeholder="Your Quote"
                value={quote}
                handleChange={(e) => handleChangeQuote(e, quoteIndex)}
              />
              {quoteIndex !== 0 && (
                <button
                  className="absolute top-0 right-2"
                  onClick={() => handleRemoveQuote(quoteIndex)}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              )}
            </div>
            {Array.isArray(emojiNumberList[quoteIndex]) &&
              emojiNumberList[quoteIndex].map((emojiNumber, index) => (
                <div
                  key={index}
                  className="relative col-start-1 col-end-3 grid grid-cols-2 gap-4"
                >
                  <Input
                    label={`emoji picture ${index + 1}`}
                    placeholder=""
                    value={undefined}
                    type="file"
                    handleChange={(e) =>
                      handleChangeEmojiList(e, quoteIndex, index)
                    }
                    accept="image/*"
                  />
                  <Input
                    label="emoji number"
                    placeholder=""
                    value={emojiNumber}
                    type="number"
                    handleChange={(e) =>
                      handleChangeEmojiNumberList(e, quoteIndex, index)
                    }
                  />
                  <button
                    className="absolute top-0 right-2"
                    onClick={() => handleRemoveEmoji(quoteIndex, index)}
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
              ))}
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 col-start-1 col-end-3"
              onClick={() => handleAddEmoji(quoteIndex)}
            >
              Add Emoji
            </button>
          </React.Fragment>
        ))}
      </React.Fragment>
    </div>
  )
}

export default Settings
