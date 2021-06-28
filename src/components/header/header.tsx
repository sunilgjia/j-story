import { IonButton, IonButtons, IonIcon } from "@ionic/react";
// Icons
import { close } from "ionicons/icons";
// Style
import { Logo, LogoWrraper, PageHeader, PageToolbar } from "./header.style";

import { useHistory } from "react-router-dom";

const Header: React.FC = () => {
  let history = useHistory();

  return (
    <PageHeader>
      <PageToolbar>
        <LogoWrraper>
          <Logo src="assets/logo.svg" />
        </LogoWrraper>
        <IonButtons slot="end">
          <IonButton onClick={() => history.go(-1)}>
            <IonIcon slot="icon-only" icon={close} />
          </IonButton>
        </IonButtons>
      </PageToolbar>
    </PageHeader>
  );
};

export default Header;
