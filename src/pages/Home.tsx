import { IonCol, IonPage, IonRow } from "@ionic/react";

// Icons
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-icon-right.svg";

// Components
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

// Style
import {
  ArrowRightIconWrapper,
  ExperienceBox,
  ExperienceBoxWrapper,
  ExperienceTitle,
  PageContent,
  PageDesc,
  PageTitle,
  PageWrapper,
} from "./Home.style";

const Home: React.FC = () => {
  return (
    <IonPage id="home-page">
      <Header showLeftIcon={false} />
      <PageContent fullscreen>
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
              <ArrowRightIconWrapper>
                <ArrowRightIcon />
              </ArrowRightIconWrapper>
            </ExperienceBox>
            <Link to="virtual-exhibit">
              <ExperienceBox>
                <ExperienceTitle>Virtual Exhibit</ExperienceTitle>
                <ArrowRightIconWrapper>
                  <ArrowRightIcon />
                </ArrowRightIconWrapper>
              </ExperienceBox>
            </Link>
            <ExperienceBox>
              <ExperienceTitle>Online Seminar</ExperienceTitle>
              <ArrowRightIconWrapper>
                <ArrowRightIcon />
              </ArrowRightIconWrapper>
            </ExperienceBox>
          </ExperienceBoxWrapper>
        </PageWrapper>
      </PageContent>
      <Footer /> 
    </IonPage>
  );
};

export default Home;
