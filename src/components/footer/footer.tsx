// Style
import {
  FooterDesc, FooterRow, FooterWrapper,
  PageFooter,
  TermsOfService
} from "./footer.style";

const Footer: React.FC = () => {
  return (
    <PageFooter>
      <FooterWrapper>
        <FooterRow>
          <FooterDesc>
            &#169; J-Story is the project of Jewish Heritage Network
          </FooterDesc>
          <TermsOfService>Terms of Service</TermsOfService>
        </FooterRow>
      </FooterWrapper>
    </PageFooter>
  );
};

export default Footer;
