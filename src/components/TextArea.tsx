import React from 'react'

interface Props {
  label: string
  placeholder: string
  value: string | undefined
  handleChange: (e: React.FormEvent<HTMLTextAreaElement>) => void
}

const TextArea: React.FC<Props> = (props) => {
  const { label, placeholder, value, handleChange } = props
  return (
    <>
      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
        {label}
      </span>
      <textarea
        id="message"
        rows={4}
        className="h-[150px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </>
  )
}

export default TextArea
