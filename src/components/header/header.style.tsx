import { IonHeader, IonToolbar } from "@ionic/react";
import styled from "styled-components";

export const PageHeader = styled(IonHeader)`
  top: 24px;
  width: 84%;
  margin: 0 auto;
  &::after {
    background-image: none;
  }
`;

export const PageToolbar = styled(IonToolbar)`
  --background: #fff;
`;

export const LogoWrraper = styled.div`

  height: 54px;
  width: 149px;
  margin: 0 auto;
  cursor: pointer;
  svg,
  svg > g > g {
    height: 54px;
    width: 149px;
  }
`;
