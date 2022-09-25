import React from 'react'

import Input from '../components/Input'
import { useQuoteContext } from '../contexts/QuoteContext'

const Settings: React.FC = () => {
  const { name, handleChangeName, time, handleChangeTime, handleChangeImage } =
    useQuoteContext()
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
        handleChange={handleChangeImage}
        accept="image/*"
      />
    </div>
  )
}

export default Settings
