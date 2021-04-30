import { Renderer, Slugger } from 'marked'

export const renderer: Renderer = {
  options: {},
  // Block - - - - - - - - - - - - - - - - - - - -
  // Block - - - - - - - - - - - - - - - - - - - -
  html: (html: string) => {
    return html
  },
  heading : (text: string, level: number, raw: string, slugger: Slugger) => {
    return `<break time="2s"/><emphasis level="strong">${text}</emphasis><break time="0.5s"/>`
  },
  code: (code: string, language: string | undefined, isEscaped: boolean) => {
    // verbatim: 文字ごとにスペルアウト
    return `<say-as interpret-as="verbatim">${code}</say-as>`
  },
  blockquote: (quote: string) => {
    return `<p>${quote}</p>`
  },
  paragraph : (text: string) => {
    return `<p>${text}</p><break time="0.75s"/>`
  },
  hr: () => {
    return `<break time="3s"/>`
  },
  list: (body: string, ordered: boolean, start: number) => {
    return `<p>${body}</p>`
  },
  listitem: (text: string) => {
    return `<p>${text}</p>`
  },
  table: (header: string, body: string) => {
    return `<p>${header}</p>`
  },
  tablerow: (content: string) => {
    return `<p>${content}</p>`
  },
  tablecell: (content: string, flags: { header: boolean, align: "center" | "left" | "right" | null }) => {
    return `<p>${content}</p>`
  },
  checkbox: (checked: boolean) => {
    return checked ? 'チェック済' : '未チェック'
  },
  // Inline - - - - - - - - - - - - - - - - - - - -
  strong: (text: string) => {
    return `<emphasis level="strong">${text}</emphasis>`
  },
  em: (text: string) => {
    return `<s class="em">${text}</s>`
  },
  br: () => {
    return ``
  },
  del: (text: string) => {
    return `<s class="del">${text}</s>`
  },
  link: (href: string | null, title: string | null, text: string) => {
    // URLを長々と読み上げない
    return `<s class="link">リンク</s>`
  },
  image: (href: string | null, title: string | null, text: string) => {
    return `<p>画像</p>`
  },
  text: (text: string) => {
    // 何もしない
    return text
  },
  codespan: (code: string) => {
    // verbatim: 文字ごとにスペルアウト
    return `<say-as interpret-as="verbatim">${code}</say-as>`
  },
}