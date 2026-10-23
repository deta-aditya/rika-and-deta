type RichParagraphProps = { text: string }

const parseEmphasis = (text: string) =>
  text.split(/\*([^*]+)\*/).map((part, index) =>
    index % 2 === 1 ? <em key={index}>{part}</em> : part,
  )

export const RichParagraph = ({ text }: RichParagraphProps) => (
  <p>{parseEmphasis(text)}</p>
)
