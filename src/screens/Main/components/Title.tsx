import { Title as OriginalTitle } from "../../../components/Title"
import { useModalContext } from "../../../contexts/ModalContext"
import * as styles from "../Main.styles";

export const Title = () => {
  const { openModal } = useModalContext();

  const handleClick = () => {
    openModal({
      title: 'Click Us!',
      body: <ModalBody />,
    });
  }

  return <OriginalTitle color="white" size="small" onClick={handleClick} />
}

const ModalBody = () => {
  const handleRikaClick = () => {
    window.open('https://www.instagram.com/rikacharolina/', '_blank');
  }

  const handleDetaClick = () => {
    window.open('https://www.instagram.com/detaditya/', '_blank'); 
  }

  return (
    <div css={styles.hiddenTitleModal}>
      <div className="rika-click-area" onClick={handleRikaClick}></div>
      <div className="deta-click-area" onClick={handleDetaClick}></div>
    </div>
  )
}
