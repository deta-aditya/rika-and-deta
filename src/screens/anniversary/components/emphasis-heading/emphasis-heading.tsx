import type { EmphasisHeading } from '../../units/emphasis-heading'

type EmphasisHeadingViewProps = {
  heading: EmphasisHeading
}

export const EmphasisHeadingView = ({ heading }: EmphasisHeadingViewProps) => (
  <>
    {heading.before}<em>{heading.em}</em>{heading.after}
  </>
)
