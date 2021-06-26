import { IonButton, IonButtons, IonIcon } from "@ionic/react";
// Icons
import { close } from "ionicons/icons";
// Style
import { Logo, LogoWrraper, PageHeader, PageToolbar } from "./header.style";

const Header: React.FC = () => {
  return (
    <PageHeader>
        <PageToolbar>
          <LogoWrraper>
            <Logo src="assets/logo.svg" />
          </LogoWrraper>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={close} />
            </IonButton>
          </IonButtons>
        </PageToolbar>
      </PageHeader>
  );
};

export default Header;
