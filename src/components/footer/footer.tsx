import { IonCol, IonRow } from "@ionic/react";

// Style
import {
  FooterDesc,
  FooterWrapper,
  PageFooter,
  TermsOfService,
} from "./footer.style";

const Footer: React.FC = () => {
  return (
    <PageFooter>
      <FooterWrapper>
        <IonRow>
          <IonCol>
            <FooterDesc>
              &#169; J-Story is the project of Jewish Heritage Network
            </FooterDesc>
          </IonCol>
          <IonCol>
            <TermsOfService>Terms of Service</TermsOfService>
          </IonCol>
        </IonRow>
      </FooterWrapper>
    </PageFooter>
  );
};

export default Footer;
