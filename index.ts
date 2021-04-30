import { parse } from './perser'
export const markdownToSsml = (md: string) => {
  return parse(md)
}