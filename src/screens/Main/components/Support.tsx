import { AppButton } from "../../../components/AppButton";
import { Copyable } from "../../../components/Copyable";
import { useModalContext } from "../../../contexts/ModalContext";
import * as styles from "../Main.styles";

export const Support = () => {
  const { openModal } = useModalContext();
    
  const handleClick = () => {
    openModal({
      title: 'Support',
      body: <ModalBody />,
    });
  }
  
  return (
    <AppButton buttonClassName="support" title="Support" onClick={handleClick} />
  );
}

const ModalBody = () => {
  return (
    <div css={styles.supportModal}>
      <p>Your presence is a blessing to us. If you feel moved to share a gift, you may send them through the bank accounts below.</p>
      <Copyable 
        label="BCA, Muhammad Deta Aditya"
        content="8380161258"
      />
      <Copyable 
        label="BSI, Rika Carolina"
        content="7302105728"
      />
      <Copyable 
        label="Mandiri, Rika Carolina"
        content="1130018307318"
      />
      <p>May God bless you abundantly. Aamiin. 🤲</p>
    </div>
  )
}
