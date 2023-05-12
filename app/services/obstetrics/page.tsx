import React from "react";
import HeaderImage from "@/app/components/Global/HeaderImage/HeaderImage";
import SectionsHeader from "@/app/components/Global/SectionsHeader/SectionsHeader";
import SummarySection from "@/app/components/Global/SummarySection/SummarySection";
import ObstetricsContent from "@/app/components/Obstetrics/ObstetricsContent/ObstetricsContent";
import ObstetricsReview from "@/app/components/Obstetrics/ObstetricsReview/ObstetricsReview";

const obstetricsPage = () => {
  return (
    <div>
      <HeaderImage
        imageUrl="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/obstetrics%2Fobstetrics-header-image.jpg?alt=media&token=4998e25b-75c7-4e8a-88f3-b48a27020c77"
        imgAlt="Медицински Център Терзийски. Акушерство."
      />
      <SectionsHeader
        title="Акушерство"
        subTitle=""
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <ObstetricsContent />
      <ObstetricsReview />
      <SummarySection
        imageUrl="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/obstetrics%2FFetal%20morphology.png?alt=media&token=e8a80e29-af19-4c83-8e49-7aebcfbb70b2"
        title="Фетална морфология - между 28 -32 седмица"
        subTitle="Късна фетална морфология е високоспециализирано ултразвуково изследване, което дава оценка за общото добро състояние на плода в крайните етапи на бременността.
    Целта й е да информира за това как се чувства бебето в утробата на майката. По време на този преглед, отново се обръща особено внимание на  развитието и жизненоважните системи и органи на плода, както и на състоянието на бъдещата майка.
    "
        imgAlt="Фетална морфология - между 28 -32 седмица"
      />
    </div>
  );
};

export default obstetricsPage;
