
import { Inter } from 'next/font/google';
import MainPage from "@/pages/components/pages/main-page";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainPage />
  )
}
