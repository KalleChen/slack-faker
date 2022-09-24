import { createContext, useCallback, useContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

export interface QuoteContextInterface {
  name: string
  handleChangeName: (e: React.FormEvent<HTMLInputElement>) => void
  image: File | null
  handleChangeImage: (image: File | null) => void
  time: string
  handleChangeTime: (e: React.FormEvent<HTMLInputElement>) => void
}

const initialValue: QuoteContextInterface = {
  name: '',
  handleChangeName: () => {},
  image: null,
  handleChangeImage: () => {},
  time: '00:00:00',
  handleChangeTime: () => {},
}

const QuoteContext = createContext<QuoteContextInterface>(initialValue)

export const QuoteContextProvider: React.FC<Props> = ({ children }) => {
  const [name, setName] = useState(initialValue.name)
  const [image, setImage] = useState(initialValue.image)
  const [time, setTime] = useState(initialValue.time)

  const handleChangeName = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setName(e.currentTarget.value)
    },
    []
  )
  const handleChangeImage = useCallback((inputImage: File | null) => {
    setImage(inputImage)
  }, [])
  const handleChangeTime = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setTime(e.currentTarget.value)
    },
    []
  )

  const contextValues: QuoteContextInterface = {
    name,
    image,
    handleChangeName,
    handleChangeImage,
    time,
    handleChangeTime,
  }

  return (
    <QuoteContext.Provider value={contextValues}>
      {children}
    </QuoteContext.Provider>
  )
}

export const useQuoteContext = () => useContext(QuoteContext)
