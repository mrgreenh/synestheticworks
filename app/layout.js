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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
