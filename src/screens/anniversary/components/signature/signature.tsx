import type { Signature } from '../../units/signature'

type SignatureViewProps = {
  signature: Signature
}

export const SignatureView = ({ signature }: SignatureViewProps) => (
  <div className="signature">
    <span>{signature.lead}</span>
    <span className="heart">♥</span>
    <span className={signature.trailingAsCaption ? 'with' : undefined}>{signature.trailing}</span>
  </div>
)
