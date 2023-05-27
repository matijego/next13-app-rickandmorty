import './globals.css'
import 'primereact/resources/themes/arya-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { Navbar } from '../components/Navbar';

export const metadata = {
  title: 'Rick and Morty App',
  description: 'Next JS 13 App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={''} style={{backgroundRepeat: 'repeat', backgroundImage: 'url(https://cdn.wallpapersafari.com/1/97/co341S.jpg)'}}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
