import {useEffect} from 'react'
import type {LayoutProps} from 'sanity'

export function StudioLayout({renderDefault, ...props}: LayoutProps) {
  useEffect(() => {
    const id = 'studio-poppins-font'
    if (!document.getElementById(id)) {
      const link = document.createElement('link')
      link.id = id
      link.rel = 'stylesheet'
      link.href =
        'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
      document.head.appendChild(link)
    }
  }, [])

  return renderDefault(props)
}
