import {EyeOpenIcon} from '@sanity/icons'
import type {DocumentActionComponent} from 'sanity'

const PREVIEW_SECRET = 'my-secret-token'
const PREVIEW_URL = 'https://impact-boston.vercel.app'

export const previewAction: DocumentActionComponent = (props) => {
  const slug = props.draft?.slug?.current || props.published?.slug?.current

  return {
    label: 'Open Preview',
    icon: EyeOpenIcon,
    onHandle: () => {
      if (!slug) {
        alert('Please add a slug before previewing')
        return
      }

      const previewUrl = `${PREVIEW_URL}/api/draft?secret=${PREVIEW_SECRET}&slug=${slug}`
      window.open(previewUrl, '_blank')
    },
  }
}
