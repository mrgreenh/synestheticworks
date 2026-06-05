import './globals.scss'
import ClientLayout from '../src/components/ClientLayout'

export const metadata = {
  title: {
    template: '%s | synwrks',
    default: 'synwrks',
  },
  description: 'Collection of inner visions conjured by music and sound; a bedroom production.',
  openGraph: {
    type: 'website',
    images: [{ url: 'https://www.synestheticworks.com/home.png' }],
  },
  twitter: {
    card: 'summary',
    creator: '@synestheticworks',
  },
}

// Runs before first paint so the page never flashes the wrong theme.
// Dark is the default; "light" is opted into via localStorage.
const themeInitScript = `(function(){var t='dark';try{if(localStorage.getItem('theme')==='light')t='light';}catch(e){}document.documentElement.setAttribute('data-theme',t);})()`

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
