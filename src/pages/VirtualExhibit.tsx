import { IonCol, IonPage, IonRow } from "@ionic/react";
import { useState } from "react";

// Icons
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-icon-right.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close-icon.svg";

// Components
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

// Style
import {
  ArrowRightIconWrapper,
  DescriptionContent,
  DescriptionTextArea,
  ExperienceContent,
  FieldSet,
  IconWrapper,
  Legend,
  LegendContainer,
  LegendLeftTitle,
  LegendRightTitle,
  LegendSeparator,
  NextButton,
  NextButtonLabel,
  PageContent,
  PageTitle,
  PageWrapper,
  Tag,
  TagContent,
} from "./VirtualExhibit.style";

const VirtualExhibit: React.FC = () => {
  const [tags, setTags] = useState([
    { label: "20th Century", bgColor: "#717C9C" },
    { label: "Jewish women", bgColor: "#717C9C" },
    { label: "Feminism", bgColor: "#0849ff" },
    { label: "Women's Rights", bgColor: "#0849ff" },
    { label: "Suffrage", bgColor: "#0849ff" },
  ]);

  const [expContent, setExpContent] = useState(
    "Jewish Women in the Century of Change"
  );
  const [desc, setDesc] = useState(
    `Over the course of the 20th century European society has experienced dramatic social, political and economical changes. This digital exhibit documents these changes through the lives of eight game changing Jewish women whose lives have been documented in documented in photographs, videos, and works of art.`
  );

  const removeTag = (index: number) =>
    setTags(tags.filter((_, i) => i !== index));

  return (
    <IonPage id="home-page">
      <Header showLeftIcon={true} />
      <PageContent fullscreen>
        <PageWrapper>
          <IonRow>
            <IonCol>
              <PageTitle>Describe Your Virtual Exhibit</PageTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <FieldSet>
                <Legend>
                  <LegendContainer>
                    <LegendLeftTitle>Experience Name</LegendLeftTitle>
                    <LegendSeparator></LegendSeparator>
                    <LegendRightTitle>
                      {expContent.length}/60 characters
                    </LegendRightTitle>
                  </LegendContainer>
                </Legend>
                <ExperienceContent
                  value={expContent}
                  onChange={(e) => setExpContent(e.target.value)}
                  maxLength={60}
                />
              </FieldSet>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <FieldSet>
                <Legend>
                  <LegendContainer>
                    <LegendLeftTitle>Description</LegendLeftTitle>
                    <LegendSeparator></LegendSeparator>
                    <LegendRightTitle>
                      {desc.length}/{400} characters
                    </LegendRightTitle>
                  </LegendContainer>
                </Legend>
                <DescriptionContent data-replicated-value={desc}>
                  <DescriptionTextArea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    maxLength={400}
                  ></DescriptionTextArea>
                </DescriptionContent>
              </FieldSet>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <FieldSet>
                <Legend>
                  <LegendContainer>
                    <LegendLeftTitle>Tags</LegendLeftTitle>
                    <LegendSeparator></LegendSeparator>
                    <LegendRightTitle>{tags.length}/30 tags</LegendRightTitle>
                  </LegendContainer>
                </Legend>
                <TagContent>
                  {tags.map((tag, i) => (
                    <Tag key={i} theme={{ bgColor: tag.bgColor }}>
                      {tag.label}
                      <IconWrapper onClick={(e) => removeTag(i)}>
                        <CloseIcon />
                      </IconWrapper>
                    </Tag>
                  ))}
                </TagContent>
              </FieldSet>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol style={{ textAlign: "right" }}>
              <NextButton>
                <NextButtonLabel>Next Step</NextButtonLabel>
                <ArrowRightIconWrapper>
                  <ArrowRightIcon />
                </ArrowRightIconWrapper>
              </NextButton>
            </IonCol>
          </IonRow>
        </PageWrapper>
      </PageContent>
      <Footer />
    </IonPage>
  );
};

export default VirtualExhibit;
