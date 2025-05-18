import { AppButton } from "../../../components/AppButton";
import { useModalContext } from "../../../contexts/ModalContext"
import * as styles from "../Main.styles";

export const OurStory = () => {
  const { openModal } = useModalContext();

  const handleClick = () => {
    openModal({
      title: 'Our Story',
      body: <ModalBody />
    })
  };

  return (
    <AppButton buttonClassName="our-story" title="Our Story" onClick={handleClick} />
  );
}

const ModalBody = () => {
  return (
    <div css={styles.ourStoryModal}>
      Work in progres...
    </div>
  )
}
