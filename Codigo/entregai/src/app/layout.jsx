import './globals.scss'

import { Inter } from 'next/font/google'
import AuthContext from '@/components/AuthContext';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <AuthContext>

          {children}

        </AuthContext>

      </body>
      
    </html>
  )
}
