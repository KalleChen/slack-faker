import React from 'react'

interface Props {
  label: string
  placeholder: string
  value: string
  type: string
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const Input = (props: Props) => {
  const { label, placeholder, value, handleChange, type } = props
  return (
    <div>
      <span className="block mb-2 text-sm font-medium text-gray-300">
        {label}
      </span>
      <input
        type={type}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default Input