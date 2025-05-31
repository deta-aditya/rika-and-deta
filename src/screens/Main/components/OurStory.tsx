import { AppButton } from "../../../components/AppButton";
import { Image } from "../../../components/Image";
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
      <p>It all began on a late afternoon. The atmosphere was intense inside the debate room. Who knew that a future couple would meet at such an unexpected moment?</p>
      <p>This is the story of us, Rika and Deta.</p>
      <p>We were participants in that year's national debate competition. We were representatives of our provinces. We were also... adversaries!</p>
      <Image css={styles.ourStoryImg} src="our-story1.jpg" alt="Debate room" />
      <p>We sat across from each other while waiting for our turn to begin. Not long after we locked eyes, we started exchanging messages on paper while smiling at each other.</p>
      <p>Our turn started. We somehow impressed each other during the exchange, and the debate ended as quickly as it began.</p>
      <p>We returned to the bus. We exchanged numbers in a very unorthodox way: Deta wrote his BlackBerry PIN on a sticky note and stuck it to the seat in front of Rika. Without a word, Deta got off the bus first.</p>
      <Image css={styles.ourStoryImg} src="our-story2.jpg" alt="The bus moment" />
      <p>The event ended a few days later. We were apart again, just as we had been. But this time, we weren’t the same as before.</p>
      <hr />
      <p>November 2014,</p>
      <p>We were separated by 675 km, across two islands, divided by the Sunda Strait. But we still looked up at the same sky, thankfully. The internet also helped us stay connected.</p>
      <p>Several social media platforms popular at the time—BBM, Facebook, Twitter, and Ask.fm—kept us in touch. We also video called each other on Skype now and then. The picture quality wasn’t as clear as today’s technology, but it was enough.</p>
      <Image css={styles.ourStoryImg} src="our-story3.png" alt="Staring at the same sky" />
      <p>Deta shared a recording of himself singing "All of Me" to Rika. At this point, it was clear we had developed a crush on each other. It was beautiful, yet sad, since we couldn’t meet in person.</p>
      <p>Rika then shared with Deta that she wanted to go to Melbourne. She had dreamed of being there as a debater ever since she was introduced to the Australian Parliamentary Debate format. Deta promised that one day, we would visit the city together. This youthful dream bound us tightly—even until now.</p>
      <p>We enjoyed our time together. If only we knew that the hurricane of love we were rejoicing in would soon begin to fade.</p>
      <hr />
      <p>2015 onwards,</p>
      <p>Life moved on—national exams, internships, college admissions, were upon us. Our teenage years were ending.</p>
      <p>We became busy. Daily chats turned into weekly ones. Weekly became monthly. Without realizing it, we barely talked anymore.</p>
      <Image css={styles.ourStoryImg} src="our-story4.png" alt="Busy life" />
      <p>Fortunately, Rika’s posts often appeared on Deta’s timeline and vice versa. We stayed connected, migrating to newer platforms like LINE and Instagram while leaving others behind.</p>
      <p>We might not have chatted as frequently anymore, but we still saw each other’s lives through posts and stories. We interacted through likes and comments. Sometimes we even chatted, even if it only lasted a few days.</p>
      <p>At no point did we ever become strangers, even though we were busy living our separate lives. We were always long-distance crushes.</p>
      <p>Maybe that youthful promise kept us connected. Maybe we still wanted to fulfill it, so we kept growing through knowledge and experience.</p>
      <p>Or maybe—it was simply meant to be.</p>
      <hr />
      <p>Tangerang, April 2019,</p>
      <p>It had been almost three years since Deta moved to Jakarta to study. Rika continued her studies in her hometown, Palembang. We hadn’t met for five years—and we thought we wouldn’t for several more.</p>
      <p>Thank God, we were wrong.</p>
      <p>Rika got an opportunity to participate in a competition in Tangerang. She told Deta to come—and of course, he accepted! Though Tangerang was quite far from his place, he didn’t hesitate.</p>
      <p>After a full five years, we finally met again. We met at a restaurant across Rika's rented apartment. We were on cloud nine! We exchanged stories, took photos, played games, and laughed all evening.</p>
      <Image css={styles.ourStoryImg} src="our-story5.png" alt="Meeting at a restaurant" />
      <p>Sadly, we had to say goodbye again. This time, it hurt more. We really wanted to spend more time together, but we couldn’t.</p>
      <p>Still, knowing that we *could* meet again brought us comfort. Maybe the next time wouldn’t take as long.</p>
      <hr />
      <p>Jakarta, November 2019,</p>
      <p>We were nearing the end of our university years. Deta began working full-time alongside his reduced class schedule. Rika applied for a cruise ship job that required her to visit Jakarta for administrative matters.</p>
      <p>Yes, a perfect chance to meet again!</p>
      <p>Deta picked up Rika at the airport—even though he was supposed to be working. His manager gave him permission, and off he went. Rika landed, and we met. We took an online taxi to Rika’s friend’s place.</p>
      <p>The ride was only about an hour, but it was unforgettable. Rika was dazzled by Jakarta’s sparkling night lights. Deta found it adorable—probably reminded him of his own first impressions. Rika fell asleep on Deta’s shoulder, but was quickly woken as we arrived.</p>
      <Image css={styles.ourStoryImg} src="our-story6.png" alt="Looking out of the city" />
      <p>After meeting Rika’s friends, Deta left shortly after. He wanted to stay longer, but he had already been away from the office too long.</p>
      <p>At the time, we probably underestimated what the future held. We had no idea what was coming next.</p>
      <hr />
      <p>2020 onwards,</p>
      <p>The COVID-19 pandemic hit the world.</p>
      <p>The government imposed a national lockdown, restricting all travel. All our plans were canceled.</p>
      <Image css={styles.ourStoryImg} src="our-story7.png" alt="Covid lockdown" />
      <p>It was bad news for both of us. Meeting up wouldn’t be so easy anymore.</p>
      <p>Sadly, we went silent again. It felt like 2015 all over—our chats became infrequent. The uncertainty was overwhelming.</p>
      <p>Luckily, as the restrictions eased, we were able to travel again. Deta’s job required him to visit Jakarta monthly—he had spent the pandemic back in Bandung. Meanwhile, Rika occasionally traveled for business.</p>
      <p>There was a nearly perfect opportunity when Rika had to go to Jakarta—but it didn’t align with Deta’s schedule. Still, Deta decided to go anyway, just to see her. We planned a meetup.</p>
      <p>But this time, it wasn’t just a meetup—</p>
      <p>It was a date.</p>
      <hr />
      <p>Jakarta, November 2022,</p>
      <p>We went on a date at Central Park, Jakarta.</p>
      <p>Once we met, we walked around the mall. Our conversation was unlike anything before. We talked about long-term goals, incomes, values, and more.</p>
      <p>Eventually, we found a place to eat. It’s funny—we were still a little awkward. We were very conscious of our gestures, as if one wrong move could ruin everything.</p>
      <Image css={styles.ourStoryImg} src="our-story8.jpg" alt="Central park" />
      <p>The date was short, but it was a crucial milestone for us.</p>
      <p>Afterward, we talked about the next step. We decided to try a serious relationship. But since Rika had to return to Palembang and Deta to Bandung, it would once again be long-distance.</p>
      <p>We had to proceed with care.</p>
      <hr />
      <p>2023 onwards,</p>
      <p>It wasn’t always smooth sailing, but we kept going until we were comfortable calling ourselves a couple. Then, we set long-term goals. This time, we planned everything carefully and didn’t underestimate the future.</p>
      <p>The first step: saving some of our earnings. Second: getting our parents to meet and arranging our engagement. Third: planning our wedding. Turns out, everything could be done within two to three years. Optimistically, we moved forward.</p>
      <p>A lot happened in that time. Deta switched jobs suddenly. Rika’s job shifted in unexpected ways, reducing how often we could meet. It was turbulent—but we never lost sight of our goals.</p>
      <p>For our pre-wedding shoot, we chose to return to where it all began—Malang. A perfect place to reminisce. We went the extra mile with a Bromo tour, cinematic shots, and enjoying the beauty of the Tengger mountain range.</p>
      <Image css={styles.ourStoryImg} src="our-story9.JPG" alt="Bromo mountains" />
      <p>Eventually, our plans were nearly complete. It felt so rewarding to see everything fall into place despite the challenges. The countdown to our wedding went from years, to months, to weeks.</p>
      <p>After 10 years, the two students who once faced each other in a national debate competition—are now getting married.</p>
      <hr />
      <p>The story doesn’t end here. In fact, this is just the prologue.</p>
      <p>The real story begins when we truly become husband and wife. ❤️</p>
    </div>
  )
}
