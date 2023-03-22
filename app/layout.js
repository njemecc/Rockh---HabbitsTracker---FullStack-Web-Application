'use client'
import './globals.css'
import { Provider } from 'react-redux'
import store from '@/store/store'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body><Provider store={store}>{children}</Provider></body>
      
    </html>
  )
}
