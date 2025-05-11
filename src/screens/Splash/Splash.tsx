import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import * as styles from './Splash.styles'

export const Splash = (props: { onOpenInvitationClick: () => void; }) => {
  return (
    <section css={styles.splash}>
      <header className='header'>
        <span className='wedding-of-text'>The wedding of</span>
        <Title />
        <span className='wedding-date'>Sunday, 15 June 2025</span>
      </header>
      <Button onClick={props.onOpenInvitationClick}>Open Invitation</Button>
    </section>
  );
}
