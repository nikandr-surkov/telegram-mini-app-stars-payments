// app/page.tsx или pages/index.tsx (в зависимости от структуры Next.js)

'use client' // если ты используешь App Router в Next.js 13+

import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://new-widgets.rubic.exchange/iframe/bundle.new-app.min.js'
    script.type = 'text/javascript'
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      const configuration = {
        from: 'ETH',
        to: '0x3330BFb7332cA23cd071631837dC289B09C33333',
        fromChain: 'ETH',
        toChain: 'ETH',
        amount: 1,
        iframe: 'true',
        hideSelectionFrom: false,
        hideSelectionTo: true,
        hideTokenSwitcher: false,
        theme: 'dark',
        injectTokens: {
          eth: ['0x3330BFb7332cA23cd071631837dC289B09C33333']
        },
        slippagePercent: {
          instantTrades: 2,
          crossChain: 5
        },
        crossChainIntegratorAddress: '',
        onChainIntegratorAddress: '',
        whitelistOnChain: [],
        blacklistOnChain: [],
        whitelistCrossChain: [],
        blacklistCrossChain: []
      }

      Object.freeze(configuration)
      // @ts-ignore: rubicWidget will be available after script is loaded
      if (window.rubicWidget) {
        window.rubicWidget.init(configuration)
      }
    }
  }, [])

  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold mb-4">Rubic Exchange Widget</h1>
        <div id="rubic-widget-root" className="w-full max-w-[600px] h-[600px] border rounded-xl overflow-hidden" />
      </main>
  )
}
