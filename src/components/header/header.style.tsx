import { IonHeader } from "@ionic/react";
import styled from "styled-components";

export const PageHeader = styled(IonHeader)`
  top: 24px;
  width: 84%;
  margin: 0 auto;
  &::after {
    background-image: none;
  }
`;

export const LogoWrraper = styled.div`
  text-align: center;
`;

export const Logo = styled.img``;