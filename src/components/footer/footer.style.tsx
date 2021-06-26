import { IonFooter, IonRow } from "@ionic/react";
import styled from "styled-components";

export const PageFooter = styled(IonFooter)`
  background-color: #717c9c;
  &::before {
    background-image: none;
  }
`;

export const FooterWrapper = styled.div`
  width: 84%;
  margin: 0 auto;
  padding: 12px;
`;

export const FooterDesc = styled.div`
  color: #f7f7f7;
`;

export const TermsOfService = styled.div`
  color: #f7f7f7;
  text-align: right;
  text-decoration: underline;
`;

export const FooterRow = styled(IonRow)`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;
