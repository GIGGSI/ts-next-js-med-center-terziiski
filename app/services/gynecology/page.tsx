import React from "react";

import HeaderImage from "@/app/components/Global/HeaderImage/HeaderImage";
import SectionsHeader from "@/app/components/Global/SectionsHeader/SectionsHeader";
import SummarySection from "@/app/components/Global/SummarySection/SummarySection";
import GynecologyContent from "@/app/components/Gynecology/GynecologyContent/GynecologyContent";

export const metadata = {
  title: "Медицински Център Терзийски.",
  description:
    "МЦ Терзийски предлага висококачествена доболнична помощ в областта на Акушерството и Гинекологията",
  keywords:
    "д-р Яна Терзийка, д-р Бойко Терзийски, гинекологичен преглед. Годишен преглед. Профилактика",
};

const GynecologyPage = () => {
  return (
    <div>
      <HeaderImage
        imageUrl="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/Gynecology%2Fgynecology-header-image.webp?alt=media&token=0a37a696-f003-435a-a03f-b3e11be0bde0"
        imgAlt="Грижа за жената"
      />

      <SectionsHeader
        title="Гинекология"
        subTitle=""
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />

      <GynecologyContent />

      <SummarySection
        reversed
        subTitle="Изследва се най-добре с рентгеновия остеодензитометър DEXA, тъй като се измерва костната плътност с точност на ЦЯЛОТО ТЯЛО."
        imgAlt="Красива, стройна жена, измерваща талията си."
        imageUrl="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/osteoporosis%2F%3Aosteoporosis.png?alt=media&token=ed29a181-95f8-44ad-9afd-c3bf589d1136"
      />
    </div>
  );
};

export default GynecologyPage;
