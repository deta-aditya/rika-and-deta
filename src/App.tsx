import { useEffect, useState } from 'react'
import { Slideshow } from './components/Slideshow/Slideshow'
import { Splash } from './screens/Splash'
import { Invitation, OpenedInvitation } from './models/Invitation'
import * as styles from './App.styles'
import { Main } from './screens/Main'

const INVITATION_KEY_LS = 'rika-deta-invitation'

const INVITATION_VALUE_LS = Invitation.unserialize(
  localStorage.getItem(INVITATION_KEY_LS) || ''
);

function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [invitation, setInvitation] = useState<Invitation>(INVITATION_VALUE_LS);

  const handleOpenInvitation = () => {
    setInvitation(new OpenedInvitation());
  }

  useEffect(() => {
    localStorage.setItem(INVITATION_KEY_LS, invitation.serialize());
  }, [invitation]);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <main css={styles.app}>
      <Slideshow 
        images={[
          "splash0.jpg",
          "splash1.jpg",
          "splash2.jpg",
          "splash3.jpg",
          "splash4.jpg",
          "splash5.jpg",
        ]}
      />
      {invitation.visit({
        notOpened: () => <Splash onOpenInvitationClick={handleOpenInvitation} />,
        opened: () => <Main />
      })}
      
    </main>
  )
}

export default App
