import { AppButton } from "../../components/AppButton/AppButton";
import { Title } from "../../components/Title";
import { WeddingDate } from "./components/WeddingDate";
import * as styles from "./Main.styles";

export const Main = () => {
  return (
    <section css={styles.main}>
      <header className="header">
        <section className="topbar">
          <Title color="white" size="small" />
          <WeddingDate className="wedding-date" />
        </section>
        <section className="top-apps">
          <AppButton buttonClassName="invitation-letter" title="Invitation Letter">
            <div className="guest-info">
              <span className="guest-title">Dear Mr/Mrs/Ms.</span>
              <span className="guest-name">John Doe</span>
            </div>
            <span className="thank-you">Thank you for accepting our invitation.</span>
          </AppButton>
          <AppButton buttonClassName="our-story" title="Our Story" />
        </section>
      </header>
      <footer className="bottom-apps">
        <AppButton buttonClassName="location" title="Location" />
        <AppButton buttonClassName="support" title="Support" />
        <AppButton buttonClassName="gallery" title="Gallery" />
        <AppButton title="WIP" />
      </footer>
    </section>
  );
}
