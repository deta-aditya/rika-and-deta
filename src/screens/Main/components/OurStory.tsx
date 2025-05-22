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
      <p>It all began in a late afternoon. The atmosphere was intense inside this debate room. Who knew that a future married couple would meet in such an unexpected moment?</p>
      <p>This is the story of us, Rika and Deta.</p> 
      <p>We were participants in this year's national debate competition. We were representatives of our provinces. We were also, adversaries!</p>
      <img src="our-story1.jpg" alt="Debate Room" />
      <p>We sit across from each other while waiting for our turn begins. Not long after we stared each others' eyes, we began exchanging messages using papers while smiling at each other.</p>
      <p>Our turn has started. We somewhat impressed each other during the exchange, and the debate ended as soon as it started.</p>
      <p>We went back on the bus. We exchanged numbers in a very, unorthodox way: Deta put his BlackBerry Pin on a sticky note, sticking them on a seat in front of Rika. Without a word, Deta get off the bus first.</p>
      <img src="our-story2.jpg" alt="The bus moment" />
      <p>The event was over a few days later. We were apart again as once we were. But this time, we weren't the same as before.</p>
      <hr />
      <p>November 2014,</p>
      <p>We were separated, for 675km, across two islands, divided by Sunda Strait. We still looked at the same sku, thankfully. The internet also helped us to communicate with each other.</p>
      <p>Multiple social medias that were popular back then, such as BBM, Facebook, Twitter, and Ask.fm, kept us in touch. We also video called each other using Skype every so often. The picture weren't as crystal clear as nowadays technology, but it was enough.</p>
      <p>Deta shared a recording of him singing All Of Me to Rika. At this point it was quite obvious that we developed crush to each other. It was beautfiul, yet sad, as we couldn't meet each other physically.</p>
      <p>Rika then shared to Deta, that she wanted to go to Melbourne. She wanted to be there as a debater ever since she was introduced to Australian Parliamentary Debate. Deta promised her that we will visit the city in the future, together. This youthful dream binds us tightly, even until now.</p>
      <p>We enjoyed our time together. If only we knew that the hurricane of love we're rejoicing right now would dissipate soon.</p>
      <hr />
      <p>2015 onwards,</p>
      <p>Our life went on. National exam, internship, college entry, and other things were upon us. Teenage years were ending.</p>
      <p>We were busy. Daily chats turned into weekly. Weekly turned into monthly. Without us realizing, we barely chatted each other anymore.</p>
      <p>Fortunately, Rika's posts often show up on Deta's timeline, vice versa. We kept ourselved connected, moving to a more popular social medias at that time, such as LINE and Instagram, while abandoning others that went out of style.</p>
      <p>We might not chat as frequent anymore. But, we still saw each others' life through posts and stories. We interacted via likes and comments. Sometimes we also chatted, even if it only lasted for a couple of days.</p>
      <p>There is never at any point we were became strangers, even though we were occupied by our own individual lifes. We were always a long distance crushes.</p>
      <p>Maybe the youthful promised kept us together. Maybe we still wanted to reach it, so we worked hard to invest ourselves with knowledge and experiences.</p>
      <p>Or maybe, it was just simply, meant to be.</p>
      <hr />
      <p>Tangerang, April 2019,</p>
      <p>It has been almost 3 years since Deta lived in Jakarta as a university student. Rika continued her study in her home city in Palembang. We had not met each other for 5 years, and probably not for another few years.</p>
      <p>Thank God we were wrong.</p>
      <p>Rika got an opportunity to participate in a competition that takes place in Tangerang. She told Deta to come over there, and of course, he accepted the invitation! Even though Tangerang is technically quite far from his place, he didn't hesitate at all.</p>
    </div>
  )
}
