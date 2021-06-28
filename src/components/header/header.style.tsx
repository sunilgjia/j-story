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

export const PageToolbar = styled.div`
  --background: #fff;
  display: flex;
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

export const CloseIconWrapper = styled.div`
  margin-top: 12px;
  height: 16px;
  width: 16px;
  display: inline-block;
  cursor: pointer;
  svg,
  svg > g > g {
    height: 16px;
    width: 16px;
    fill: #717c9c;
  }
`;

export const ArrowLeftIconWrapper = styled.div`
  margin-top: 12px;
  height: 29.86px;
  width: 25px;
  display: inline-block;
  cursor: pointer;
  svg,
  svg > g > g {
    height: 29.86px;
    width: 25px;
    fill: #717c9c;
  }
`;
