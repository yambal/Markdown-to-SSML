import marked from 'marked'
import { renderer } from './renderer'

export const parse = (md: string): string => {
  marked.use({ renderer })
  const ssml = marked(md)
  return ssml
}