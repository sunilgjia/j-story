import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonIcon,
  IonImg, IonPage, IonThumbnail, IonToolbar
} from "@ionic/react";
import {
  close
} from "ionicons/icons";
import styled from "styled-components";
import "./Home.css";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Home: React.FC = () => {
  const logo: string = "http://placekitten.com/g/200/300";

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonButton>
              <IonThumbnail>
                <IonImg src={logo} />
              </IonThumbnail>
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={close} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Title>Testing</Title>
      </IonContent>
    </IonPage>
  );
};

export default Home;
