import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Qasem Nik',
    default:
      'Qasem Nik - Crafting digital experiences with a blend of art and code | Front-End Developer',
  },
  description:
    'I’m Qasem, Welcome to the crossroads where creativity meets technology. I am a front-end developer dedicated to building immersive digital experiences that captivate and engage. With a keen eye for design and a passion for coding, I turn abstract concepts into concrete realities.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
