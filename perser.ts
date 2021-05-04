import marked from 'marked'
import { renderer } from './renderer'

export const parse = (md: string): string => {
  marked.use({ renderer })
  const ssml = `<speak>${marked(md)}</speak>`
  return ssml
}