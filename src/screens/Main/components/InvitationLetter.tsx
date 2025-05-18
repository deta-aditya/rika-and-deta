import { AppButton } from "../../../components/AppButton"
import { useModalContext } from "../../../contexts/ModalContext";
import * as styles from "../Main.styles";

export const InvitationLetter = () => {
  const { openModal } = useModalContext();

  const handleClick = () => {
    openModal({
      title: null,
      body: <ModalBody />,
    });
  }

  return (
    <AppButton buttonClassName="invitation-letter" title="Invitation Letter" onClick={handleClick}>
      <div className="guest-info">
        <span className="guest-title">Dear Mr/Mrs/Ms.</span>
        <span className="guest-name">John Doe</span>
      </div>
      <span className="thank-you">Thank you for accepting our invitation.</span>
    </AppButton>
  )
}

const ModalBody = () => {
  const { closeModal } = useModalContext();

  return (
    <div css={styles.invitationModal} onClick={closeModal}>
      <div className="outer-border" />
      <div className="inner-border">
        <p className="salutation">Dear Mr/Mrs/Ms.</p>
        <p className="guest-name">John Doe</p>
        <p>With heartfelt gratitude, we invite you to celebrate the beginning of <span className="couple-names">Rika's & Deta's</span> new journey together.</p>
        <p>Please join us in:</p>
        <ul className="location-and-time">
          <li>📌 Jl. Swadaya 1 No. 40, Kab. Banyuasin, Sumatera Selatan</li>
          <li>⏲️ Sunday, 15 June 2025, at 10:00 AM - Done</li>
        </ul>
        <p>We look forward to celebrating with you at our reception. Feel free to explore this website for more info!</p>
        <p>Sincerely,<br /><span className="couple-names">Rika & Deta</span></p>
      </div>
    </div>
  )
}
