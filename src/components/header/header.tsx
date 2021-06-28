import { IonButton, IonButtons, IonIcon } from "@ionic/react";
// Icons
import { close } from "ionicons/icons";
// Style
import { LogoWrraper, PageHeader, PageToolbar } from "./header.style";

import { useHistory } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";


const Header: React.FC = () => {
  let history = useHistory();

  return (
    <PageHeader>
      <PageToolbar>
        <LogoWrraper>
          <LogoIcon />
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
