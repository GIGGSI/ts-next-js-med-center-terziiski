import React from "react";

import HeaderImage from "@/app/components/Global/HeaderImage/HeaderImage";
import SectionsHeader from "@/app/components/Global/SectionsHeader/SectionsHeader";
import SummarySection from "@/app/components/Global/SummarySection/SummarySection";
import OsteoporosisContent from "@/app/components/Osteoporosis/OsteoporosisContent/OsteoporosisContent";

export const metadata = {
  title: "Медицински Център Терзийски.",
  description:
    "Остеопорозата е заболяване, характеризиращо се с понижена костна маса и намалена здравина на костите, поради което те стават лесно чупливи.",
  keywords:
    " д-р Мария Бояджиева, Ендокринологията, щитовидна жлеза, гестационен диабед",
};

const OsteoporosisPage = () => {
  return (
    <div>
      <HeaderImage
        imageUrl="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/Endocrinology%2Fendocrinology-header-image.webp?alt=media&token=2f6adf25-a122-4e39-8d3e-965bec15e95c"
        imgAlt="Медицински Център Терзийски. Ендорктинология."
      />

      <SectionsHeader
        title="Остеопороза"
        subTitle="Остеопорозата е заболяване на скелета, характеризиращо се с намалена костна маса и структурни изменения на костната тъкан, които водят до повишена чупливост и последващ риск от счупвания. "
        content="Толкова чупливи, че падане или дори леки травми могат да причинят счупване. Счупвания, свързани с остеопороза, най-често се появяват в областта на шийката на бедрената кост в тазобедрената става, китката или прешлените на гръбначния стълб. Тъй като процесът на намаляване на костното вещество и разреждането на костната тъкан напредва бавно и незабележимо през годините, остеопорозата сполучливо е наречена “ТИХИЯ КРАДЕЦ”."
      />

      <OsteoporosisContent />

      <SummarySection
        subTitle="Изследва се най-добре с рентгеновия остеодензитометър DEXA, тъй като се измерва костната плътност с точност на ЦЯЛОТО ТЯЛО."
        imgAlt="Красива, стройна жена, измерваща талията си."
        imageUrl="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/osteoporosis%2F%3Aosteoporosis.png?alt=media&token=ed29a181-95f8-44ad-9afd-c3bf589d1136"
      />
    </div>
  );
};

export default OsteoporosisPage;
