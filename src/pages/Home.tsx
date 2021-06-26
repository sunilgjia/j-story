import { IonCol, IonContent, IonPage, IonRow } from "@ionic/react";
// Icons
import { arrowForward } from "ionicons/icons";
// Components
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
// Style
import {
  ExperienceBoxWrapper,
  ExperienceBox,
  ExperienceTitle,
  ForwardArrow,
  PageDesc,
  PageTitle,
  PageWrapper,
} from "./Home.style";

const Home: React.FC = () => {
  return (
    <IonPage id="home-page">
      <Header />
      <IonContent fullscreen>
        <PageWrapper>
          <IonRow>
            <IonCol>
              <PageTitle>Choose the Experience</PageTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <PageDesc>
                How do you want tour viewers to experience your story?
              </PageDesc>
            </IonCol>
          </IonRow>
          <ExperienceBoxWrapper>
            <ExperienceBox>
              <ExperienceTitle>Self-Guided tour</ExperienceTitle>
              <ForwardArrow slot="icon-only" icon={arrowForward} />
            </ExperienceBox>
            <ExperienceBox>
              <ExperienceTitle>Virtual Exhibit</ExperienceTitle>
              <ForwardArrow slot="icon-only" icon={arrowForward} />
            </ExperienceBox>
            <ExperienceBox>
              <ExperienceTitle>Online Seminar</ExperienceTitle>
              <ForwardArrow slot="icon-only" icon={arrowForward} />
            </ExperienceBox>
          </ExperienceBoxWrapper>
        </PageWrapper>
      </IonContent>
      <Footer /> 
    </IonPage>
  );
};

export default Home;
