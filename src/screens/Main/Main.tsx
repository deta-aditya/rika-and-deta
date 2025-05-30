import { Modal } from "../../components/Modal";
import { Gallery } from "./components/Gallery";
import { InvitationLetter } from "./components/InvitationLetter";
import { Location } from "./components/Location";
import { OurStory } from "./components/OurStory";
import { PlayVideo } from "./components/PlayVideo";
import { Support } from "./components/Support";
import { Title } from "./components/Title";
import { WeddingDate } from "./components/WeddingDate";
import * as styles from "./Main.styles";

export const Main = () => {
  return (
    <section css={styles.main}>
      <section className="content">
        <header className="header">
          <section className="topbar">
            <Title />
            <WeddingDate className="wedding-date" />
          </section>
          <section className="top-apps">
            <InvitationLetter />
            <OurStory />
          </section>
        </header>
        <footer className="bottom-apps">
          <Location />
          <Support />
          <Gallery />
          <PlayVideo />
        </footer>
      </section>
      <Modal />
    </section>
  );
}
