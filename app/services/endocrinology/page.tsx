import EndocrinologyContent from "@/app/components/Endocrinology/EndocrinologyContent/EndocrinologyContent";
import HeaderImage from "@/app/components/Global/HeaderImage/HeaderImage";
import SectionsHeader from "@/app/components/Global/SectionsHeader/SectionsHeader";
import SummarySection from "@/app/components/Global/SummarySection/SummarySection";
import React from "react";

export const metadata = {
  title: "Ендокринология и болести на обмяната - д-р Мария Бояджиева",
  description:
    "Ендокринологията е медицинска наука, изучаваща жлезите с вътрешна секреци.Хипертиреоидизъм.Гестационният диабет.Инсулинова резистентност.Щитовидна жлеза",
  keywords:
    " д-р Мария Бояджиева, Ендокринологията, щитовидна жлеза, гестационен диабед",
};

const EndocrinologyPage = () => {
  return (
    <div>
      <HeaderImage
        imageUrl="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/Endocrinology%2Fendocrinology-header-image.webp?alt=media&token=2f6adf25-a122-4e39-8d3e-965bec15e95c"
        imgAlt="Медицински Център Терзийски. Ендорктинология."
      />
      <SectionsHeader
        title="Ендокринология"
        subTitle="Ендокринологията е изследване на хормоните. Хормоните са от съществено значение за нашето ежедневно оцеляване."
        content="Жлезите и органите на ендокринната система отделят хормони, които регулират редица жизненоважни функции на нашето тяло. Тези жлези включват хипоталамуса, епифизното тяло, хипофизата, щитовидната жлеза, паращитовидните жлези, надбъбречните жлези, панкреаса, тестисите и яйчниците. "
      />
      <EndocrinologyContent />

      <div className="height" />
      <SummarySection
        reversed
        subTitle="На база резултатите от направеното изследване и здравословно състояние на пациента се изготвя индивидуален план на хранене и двигателна активност."
        imageUrl="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/dietetics%2Fdietetics%20review.png?alt=media&token=d19d5f1d-22d1-47bc-9259-f0f929a573a3"
        imgAlt="здравословна храна, авокадо, броколи, червен портокал, аспержи, боб"
      />
    </div>
  );
};

export default EndocrinologyPage;
