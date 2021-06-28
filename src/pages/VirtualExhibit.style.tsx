import { IonContent } from "@ionic/react";
import styled from "styled-components";

export const PageContent = styled(IonContent)`
  margin: 0 auto;
`;

export const PageWrapper = styled.div`
  width: 84%;
  max-width: 600px;
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

export const FieldSet = styled.fieldset`
  margin: 1em auto;
  box-sizing: border-box;
  border: 1px solid rgba(113, 124, 156, 0.5);
  border-radius: 15px;
  background-color: #ffffff;
`;

export const Legend = styled.legend`
  width: 100%;
  padding: 0;
`;

export const LegendContainer = styled.div`
  display: flex;
  line-height: 1.2;
  justify-content: space-between;
`;

export const LegendLeftTitle = styled.div`
  float: left;
  padding: 0 5px;
  text-transform: uppercase;
  color: #8c9597;
  font-family: "Source Sans Pro";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
`;

export const LegendSeparator = styled.div`
  float: left;
  height: 1px;
  background-color: rgba(113, 124, 156, 0.5);
  width: 0;
  margin: 7px 5px 0 5px;
  flex: 1;
`;

export const LegendRightTitle = styled.div`
  float: left;
  padding: 0 5px;
  color: #8c9597;
  font-family: "Source Sans Pro";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
`;

export const ExperienceContent = styled.input`
  color: #0849ff;
  font-family: "Source Sans Pro";
  font-size: 20px;
  letter-spacing: 0;
  line-height: 25px;
  padding: 0.5rem 0.25em;
  width: 100%;
  border: unset;
  outline: none;
`;

export const DescriptionContent = styled.div`
  padding: 0.5rem 0.25em;
  color: #717c9c;
  font-family: "Source Sans Pro";
  font-size: 20px;
  letter-spacing: 0;
  line-height: 27px;
  display: grid;
  word-break: break-word;
  &::after {
    content: attr(data-replicated-value) " ";
    white-space: pre-wrap;
    visibility: hidden;
    grid-area: 1 / 1 / 2 / 2;
  }
`;

export const DescriptionTextArea = styled.textarea`
  width: 100%;
  border: unset;
  outline: none;
  resize: none;
  overflow: hidden;
  grid-area: 1 / 1 / 2 / 2;
  text-align: justify;
`;

export const TagContent = styled.div`
  padding: 0.5rem 0.25em;
  color: #717c9c;
  font-family: "Source Sans Pro";
  font-size: 20px;
  letter-spacing: 0;
  line-height: 27px;
`;

export const Tag = styled.div`
  border-radius: 23.76px;
  background-color: ${(props) => props.theme.bgColor};
  padding: 0.1rem 0.5rem;
  display: inline-block;
  margin: 0.25rem;

  color: #ffffff;
  font-family: "Source Sans Pro";
  font-size: 16px;
  letter-spacing: 0;
  line-height: 36px;
  text-align: center;
`;

export const IconWrapper = styled.div`
  height: 8.64px;
  width: 8.63px;
  display: inline-block;
  margin-left: 5px;
  cursor: pointer;
  svg,
  svg > g > g {
    height: 8.64px;
    width: 8.63px;
    fill: #ffffff;
  }
`;

export const NextButton = styled.button`
  height: 40px;
  width: 141px;
  border-radius: 25.6px;
  background-color: #fac807;
  color: #2a2a2a;
  font-family: "Source Sans Pro";
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 20px;
  cursor: pointer;
`;

export const NextButtonLabel = styled.label`
  height: 20px;
  width: 89px;
  color: #2a2a2a;
  font-family: "Source Sans Pro";
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 20px;
  cursor: pointer;
`;

export const ArrowRightIconWrapper = styled.div`
  height: 14px;
  width: 17.11px;
  display: inline-block;
  margin-left: 15px;
  cursor: pointer;
  svg,
  svg > g > g {
    height: 14px;
    width: 17.11px;
    fill: #2a2a2a;
  }
`;
