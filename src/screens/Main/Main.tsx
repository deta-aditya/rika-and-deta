import { AppButton } from "../../components/AppButton/AppButton";
import { ImagePreview } from "../../components/ImagePreview";
import { Modal } from "../../components/Modal";
import { Title } from "../../components/Title";
import { Gallery } from "./components/Gallery";
import { InvitationLetter } from "./components/InvitationLetter";
import { Location } from "./components/Location";
import { OurStory } from "./components/OurStory";
import { Support } from "./components/Support";
import { WeddingDate } from "./components/WeddingDate";
import * as styles from "./Main.styles";

export const Main = () => {
  return (
    <section css={styles.main}>
      <section className="content">
        <header className="header">
          <section className="topbar">
            <Title color="white" size="small" />
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
          <AppButton title="WIP" />
        </footer>
      </section>
      <Modal />
      <ImagePreview />
    </section>
  );
}
