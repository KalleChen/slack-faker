import { createContext, useCallback, useContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

export interface QuoteContextInterface {
  name: string
  handleChangeName: (e: React.FormEvent<HTMLInputElement>) => void
  profile: File | null
  handleChangeProfile: (e: React.FormEvent<HTMLInputElement>) => void
  time: string
  handleChangeTime: (e: React.FormEvent<HTMLInputElement>) => void
  emojiList: Array<File | boolean>[]
  handleChangeEmojiList: (
    e: React.FormEvent<HTMLInputElement>,
    quoteIndex: number,
    index: number
  ) => void
  emojiNumberList: string[][]
  handleChangeEmojiNumberList: (
    e: React.FormEvent<HTMLInputElement>,
    quoteIndex: number,
    index: number
  ) => void
  handleAddEmoji: (quoteIndex: number) => void
  handleRemoveEmoji: (quoteIndex: number, index: number) => void
  handleAddQuote: () => void
  handleRemoveQuote: (quoteIndex: number) => void
  quoteList: string[]
  handleChangeQuote: (
    e: React.FormEvent<HTMLTextAreaElement>,
    index: number
  ) => void
}

const initialValue: QuoteContextInterface = {
  name: '',
  handleChangeName: () => {},
  profile: null,
  handleChangeProfile: () => {},
  time: '00:00:00',
  handleChangeTime: () => {},
  emojiList: [[]],
  handleChangeEmojiList: () => {},
  emojiNumberList: [[]],
  handleChangeEmojiNumberList: () => {},
  handleAddEmoji: () => {},
  handleRemoveEmoji: () => {},
  handleAddQuote: () => {},
  handleRemoveQuote: () => {},
  quoteList: [''],
  handleChangeQuote: () => {},
}

const QuoteContext = createContext<QuoteContextInterface>(initialValue)

export const QuoteContextProvider: React.FC<Props> = ({ children }) => {
  const [name, setName] = useState(initialValue.name)
  const [profile, setProfile] = useState(initialValue.profile)
  const [time, setTime] = useState(initialValue.time)
  const [emojiList, setEmojiList] = useState(initialValue.emojiList)
  const [emojiNumberList, setEmojiNumberList] = useState(
    initialValue.emojiNumberList
  )
  const [quoteList, setQuoteList] = useState(initialValue.quoteList)

  const handleChangeName = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setName(e.currentTarget.value)
    },
    []
  )
  const handleChangeProfile = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setProfile(e?.currentTarget?.files?.[0] ?? null)
    },
    []
  )
  const handleChangeEmojiList = useCallback(
    (
      e: React.FormEvent<HTMLInputElement>,
      quoteIndex: number,
      index: number
    ) => {
      const file = e?.currentTarget?.files?.[0] ?? false
      setEmojiList((prev) => {
        const newEmojiList = [...prev]
        newEmojiList[quoteIndex][index] = file
        return newEmojiList
      })
    },
    []
  )
  const handleChangeEmojiNumberList = useCallback(
    (
      e: React.FormEvent<HTMLInputElement>,
      quoteIndex: number,
      index: number
    ) => {
      const value = e?.currentTarget?.value || '0'
      setEmojiNumberList((prev) => {
        const newEmojiNumberList = [...prev]
        newEmojiNumberList[quoteIndex][index] = value
        return newEmojiNumberList
      })
    },
    []
  )
  const handleAddEmoji = useCallback((quoteIndex: number) => {
    setEmojiList((prev) => {
      const newEmojiList = JSON.parse(JSON.stringify(prev)) as typeof prev
      newEmojiList[quoteIndex].push(false)
      return newEmojiList
    })
    setEmojiNumberList((prev) => {
      const newEmojiNUmberList = JSON.parse(JSON.stringify(prev)) as typeof prev
      newEmojiNUmberList[quoteIndex].push('0')
      return newEmojiNUmberList
    })
  }, [])
  const handleRemoveEmoji = useCallback((quoteIndex: number, index: number) => {
    setEmojiList((prev) => {
      const newEmojiList = JSON.parse(JSON.stringify(prev)) as typeof prev
      newEmojiList[quoteIndex].splice(index, 1)
      return newEmojiList
    })
    setEmojiNumberList((prev) => {
      const newEmojiNUmberList = JSON.parse(JSON.stringify(prev)) as typeof prev
      newEmojiNUmberList[quoteIndex].splice(index, 1)
      return newEmojiNUmberList
    })
  }, [])
  const handleChangeTime = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setTime(e.currentTarget.value)
    },
    []
  )
  const handleAddQuote = useCallback(() => {
    setQuoteList((prev) => [...prev, ''])
    setEmojiList((prev) => [...prev, []])
    setEmojiNumberList((prev) => [...prev, []])
  }, [])
  const handleRemoveQuote = useCallback((quoteIndex: number) => {
    setQuoteList((prev) => {
      const newQuoteList = [...prev]
      newQuoteList.splice(quoteIndex, 1)
      return newQuoteList
    })
    setEmojiList((prev) => {
      const newEmojiList = [...prev]
      newEmojiList.splice(quoteIndex, 1)
      return newEmojiList
    })
    setEmojiNumberList((prev) => {
      const newEmojiNumberList = [...prev]
      newEmojiNumberList.splice(quoteIndex, 1)
      return newEmojiNumberList
    })
  }, [])
  const handleChangeQuote = useCallback(
    (e: React.FormEvent<HTMLTextAreaElement>, index: number) => {
      const value = e.currentTarget.value
      setQuoteList((prev) => {
        const newQuoteList = [...prev]
        newQuoteList[index] = value
        return newQuoteList
      })
    },
    []
  )
  const contextValues: QuoteContextInterface = {
    name,
    profile,
    handleChangeName,
    handleChangeProfile,
    time,
    handleChangeTime,
    emojiList,
    handleChangeEmojiList,
    emojiNumberList,
    handleChangeEmojiNumberList,
    handleAddQuote,
    handleRemoveQuote,
    handleAddEmoji,
    handleRemoveEmoji,
    quoteList,
    handleChangeQuote,
  }

  return (
    <QuoteContext.Provider value={contextValues}>
      {children}
    </QuoteContext.Provider>
  )
}

export const useQuoteContext = () => useContext(QuoteContext)
