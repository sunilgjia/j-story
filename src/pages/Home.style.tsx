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
  color: #0849ff;
  font-size: 2.5em;
  margin-top: 14.375rem;
  font-weight: bold;
  font-family: "Source Sans Pro";
`;

export const PageDesc = styled.p`
  text-align: center;
  color: #717c9c;
  font-size: 1.125em;
  margin-top: 1.25rem;
  font-family: "Source Sans Pro";
`;

export const ExperienceBoxWrapper = styled(IonRow)`
  justify-content: center;
  margin-top: 3.375rem;
  margin-bottom: 12.5rem;
`;

export const ExperienceBox = styled.div`
  width: 297px;
  height: 251px;
  text-align: center;
  padding: 4.75rem 0rem 3.125rem 0rem;
  border-radius: 15px;
  background-color: #fff;
  margin: 0.938rem;
  box-shadow: 0 0 40px 20px rgb(113 124 156 / 10%);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: "Source Sans Pro";
  &:hover {
    transform: scale(1.1);
  }
`;

export const ExperienceTitle = styled.h3`
  top: 50%;
  color: #717c9c;
  font-size: 1.125em;
  text-transform: uppercase;
  font-family: "Source Sans Pro";
`;

export const ForwardArrow = styled(IonIcon)`
  color: #0849ff;
  width: 26px;
  height: 26px;
`;

export const ArrowRightIconWrapper = styled.div`
  margin-top: 0.75rem;
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
