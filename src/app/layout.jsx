export const metadata = {
  title: 'My App',
  description: 'La unica documentacion de Brightsign en español'
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="es">
        {/* <head>
          <link rel="icon" type="image/svg+xml" href="/img/logo.svg" />
        </head> */}
        <body>
          <div id="root">{ children }</div>
        </body>
      </html>
    </>
  )
}