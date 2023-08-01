'use client'

import                           './globals.css'
import Banner               from './components/Banner'
import { PyScriptProvider } from 'pyscript-react' 
import { ErrorBoundary }    from './components/ErrorBoundary';
import Script               from 'next/script'

export default function RootLayout({ children }) {
  return (
    <>
        <html lang="en">
              <head>
                    <link rel="shortcut icon" href="#" />
              </head>
              <body className="MainContainer">
                  <ErrorBoundary fallback="Error">
                        <Banner />
                        <ErrorBoundary  fallback={children}>
                              <PyScriptProvider>
                                    <ErrorBoundary fallback="Error">
                                          <py-config>packages = ["numpy","pandas","matplotlib","scikit-learn","asyncio"]</py-config>
                                          <Script src="https://unpkg.com/@espruino-tools/core@latest/min/main.min.js" strategy="beforeInteractive"></Script>
                                          <Script src="../../js_script1.js"                                           strategy="afterInteractive" ></Script>
                                    </ErrorBoundary>
                                    {children}
                              </PyScriptProvider>
                        </ErrorBoundary>
                  </ErrorBoundary>     
              </body>
        </html>
    </>
  )
}
