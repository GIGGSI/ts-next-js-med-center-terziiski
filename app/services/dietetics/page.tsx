import React from "react";

import HeaderImage from "@/app/components/Global/HeaderImage/HeaderImage";
import SectionsHeader from "@/app/components/Global/SectionsHeader/SectionsHeader";
import SummarySection from "@/app/components/Global/SummarySection/SummarySection";
import DieteticsContent from "@/app/components/Dietetics/DieteticsContent/DieteticsContent";
import DieteticsReview from "@/app/components/Dietetics/DieteticsReview/DieteticsReview";

export const metadata = {
  title: "Диетолог",
  description:
    "Здравословното състояние на всеки човек до голяма степен се определя от начина на живот, който той води.",
  keywords:
    "Диетолог, Благоевград Диетолог, здраве, хрнителен режим, хранене, здравословно хранене.",
};

const DieteticsPage = () => {
  return (
    <div>
      <HeaderImage
        imageUrl="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/dietetics%2Fdietetics-header-image.jpg?alt=media&token=8c1e0d68-6f9d-4377-85d7-daa59ef79773"
        imgAlt="здравословна храна, авокадо, броколи, червен портокал, аспержи, боб"
      />
      <SectionsHeader
        title="Диететика"
        subTitle="Здравословното състояние на всеки човек до голяма степен се определя от начина на живот, който той води."
        content="Основно значение за здравето имат здравословно хранене и двигателната активност. Неправилният хранителен режим може да причини редица заболявания като затлъстяване, анорексия, високо кръвно налягане, рак, сърдечно-съдови заболявания, диабет и остеопроза."
      />
      <DieteticsContent />
      <DieteticsReview />
      <SummarySection
        subTitle="На база резултатите от направеното изследване и здравословно състояние на пациента се изготвя индивидуален план на хранене и двигателна активност."
        imageUrl="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/dietetics%2Fdietetics%20review.png?alt=media&token=d19d5f1d-22d1-47bc-9259-f0f929a573a3"
        imgAlt="здравословна храна, авокадо, броколи, червен портокал, аспержи, боб"
      />
    </div>
  );
};

export default DieteticsPage;
