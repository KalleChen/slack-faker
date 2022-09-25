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
  emojiList: Array<File | boolean>
  handleChangeEmojiList: (
    e: React.FormEvent<HTMLInputElement>,
    index: number
  ) => void
  emojiNUmberList: string[]
  handleChangeEmojiNumberList: (
    e: React.FormEvent<HTMLInputElement>,
    index: number
  ) => void
  handleAddEmoji: () => void
  replyNUmber: string
  handleChangeReplyNumber: (e: React.FormEvent<HTMLInputElement>) => void
}

const initialValue: QuoteContextInterface = {
  name: '',
  handleChangeName: () => {},
  profile: null,
  handleChangeProfile: () => {},
  time: '00:00:00',
  handleChangeTime: () => {},
  emojiList: [],
  handleChangeEmojiList: () => {},
  emojiNUmberList: [],
  handleChangeEmojiNumberList: () => {},
  handleAddEmoji: () => {},
  replyNUmber: '0',
  handleChangeReplyNumber: () => {},
}

const QuoteContext = createContext<QuoteContextInterface>(initialValue)

export const QuoteContextProvider: React.FC<Props> = ({ children }) => {
  const [name, setName] = useState(initialValue.name)
  const [profile, setProfile] = useState(initialValue.profile)
  const [time, setTime] = useState(initialValue.time)
  const [emojiList, setEmojiList] = useState(initialValue.emojiList)
  const [emojiNUmberList, setEmojiNUmberList] = useState(
    initialValue.emojiNUmberList
  )
  const [replyNUmber, setReplyNUmber] = useState(initialValue.replyNUmber)

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
    (e: React.FormEvent<HTMLInputElement>, index: number) => {
      const file = e?.currentTarget?.files?.[0] ?? false
      setEmojiList((prev) => {
        const newEmojiList = [...prev]
        newEmojiList[index] = file
        return newEmojiList
      })
    },
    []
  )
  const handleChangeEmojiNumberList = useCallback(
    (e: React.FormEvent<HTMLInputElement>, index: number) => {
      const value = e?.currentTarget?.value || '0'
      setEmojiNUmberList((prev) => {
        const newEmojiNUmberList = [...prev]
        newEmojiNUmberList[index] = value
        return newEmojiNUmberList
      })
    },
    []
  )
  const handleAddEmoji = useCallback(() => {
    setEmojiList((prev) => [...prev, false])
    setEmojiNUmberList((prev) => [...prev, '0'])
  }, [])
  const handleChangeTime = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setTime(e.currentTarget.value)
    },
    []
  )
  const handleChangeReplyNumber = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setReplyNUmber(e.currentTarget.value)
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
    emojiNUmberList,
    handleChangeEmojiNumberList,
    replyNUmber,
    handleChangeReplyNumber,
    handleAddEmoji,
  }

  return (
    <QuoteContext.Provider value={contextValues}>
      {children}
    </QuoteContext.Provider>
  )
}

export const useQuoteContext = () => useContext(QuoteContext)
