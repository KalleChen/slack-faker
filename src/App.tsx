import './index.css'

import React from 'react'

import { QuoteContextProvider } from './contexts/QuoteContext'
import Settings from './layouts/Settings'

const App = () => {
  return (
    <QuoteContextProvider>
      <div className="flex items-center flex-col">
        <div className="text-5xl font-bold text-center mt-4 text-gray-300">
          Slack Faker
        </div>
        <Settings />
      </div>
    </QuoteContextProvider>
  )
}

export default App
