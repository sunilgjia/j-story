import { IonContent, IonIcon, IonRow } from "@ionic/react";
import styled from "styled-components";

export const PageContent = styled(IonContent)`
  --background: #fff;
`;

export const PageWrapper = styled.div`
  width: 84%;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  text-align: center;
  color: #0849FF;
  Line height:54px;
  font-size: 40px;
  margin-top: 230px;
  font-weight: bold;
`;

export const PageDesc = styled.p`
  text-align: center;
  color: #717c9c;
  font-size: 18px;
  margin-top: 20px;
`;

export const ExperienceBoxWrapper = styled(IonRow)`
  justify-content: center;
  margin-top: 54px;
  margin-bottom: 200px;
`;

export const ExperienceBox = styled.div`
  width: 297px;
  height: 251px;
  text-align: center;
  padding: 76px 0px 50px 0px;
  border-radius: 15px;
  background-color: #fff;
  margin: 15px;
  box-shadow: 0 0 40px 20px rgb(113 124 156 / 10%);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ExperienceTitle = styled.h3`
  top: 50%;
  color: #717c9c;
  font-size: 18px;
  text-transform: uppercase;
`;

export const ForwardArrow = styled(IonIcon)`
  color: #0849ff;
  width: 26px;
  height: 26px;
`;

export const ArrowRightIconWrapper = styled.div`
  margin-top: 12px;
  height: 16px;
  width: 16px;
  display: inline-block;
  cursor: pointer;
  svg,
  svg > g > g {
    height: 16px;
    width: 16px;
    fill: #0849ff;
  }
`;
