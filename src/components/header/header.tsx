import { IonButton, IonButtons, IonIcon, IonToolbar } from "@ionic/react";

// Icons
import { close } from "ionicons/icons";

// Style
import { Logo, LogoWrraper, PageHeader } from "./header.style";

const Header: React.FC = () => {
  return (
    <PageHeader>
        <IonToolbar>
          <LogoWrraper>
            <Logo src="assets/logo.svg" />
          </LogoWrraper>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={close} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </PageHeader>
  );
};

export default Header;
