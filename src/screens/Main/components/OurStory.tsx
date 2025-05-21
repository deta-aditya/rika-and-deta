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
      <p>Malang, October 2014,</p>
      <p>It all began in a late afternoon, with an intense atmosphere inside a debate room.</p>
      <p>We were participants in this year's national debate competition. We were representatives of our provinces, and we were adversaries!</p>
      <img src="our-story1.jpg" alt="Debate Room" />
      <p>We sit across from each other while waiting for our turn begins. Not long after we stared each others' eyes, we began exchanging messages using papers while smiling at each other.</p>
      <p>Our turn has started. We somewhat impressed each other during the exchange, and the debate ended as soon as it started.</p>
      <p>We went back on the bus. We exchanged numbers in a very, unorthodox way: Deta put his BlackBerry Pin on a sticky note, sticking them on a seat in front of Rika. Without a word, Deta get off the bus first.</p>
      <img src="our-story2.jpg" alt="The bus moment" />
      <p>The event was over a few days later. We were apart again as once we were. But this time, we weren't the same as before.</p>
    </div>
  )
}
