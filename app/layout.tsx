import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Birmingham Plumbing and Drainworks',
  description: 'Reliable plumbing and drain solutions in Birmingham, Alabama',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
