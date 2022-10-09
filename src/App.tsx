import './index.css'

import { QuoteContextProvider } from './contexts/QuoteContext'
import Settings from './layouts/Settings'
import SlackQuote from './layouts/SlackQuote'

const App = () => {
  return (
    <QuoteContextProvider>
      <div className="flex items-center flex-col pb-10">
        <div className="text-5xl font-bold text-center mt-4 text-gray-300">
          Slack Faker
        </div>
        <a
          href="https://github.com/KalleChen/slack-faker"
          target="_blank"
          rel="noreferrer"
          className="absolute top-10 right-10 w-12 h-12"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github-link"
            className="right-4 w-12 h-12"
          />
        </a>
        <Settings />
        <SlackQuote />
      </div>
    </QuoteContextProvider>
  )
}

export default App
