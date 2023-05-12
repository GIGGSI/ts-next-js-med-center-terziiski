import React from "react";
import HeaderImage from "../components/Global/HeaderImage/HeaderImage";
import SectionsHeader from "../components/Global/SectionsHeader/SectionsHeader";
import OurTeam from "../components/OurTeam/OurTeam/OurTeam";

export const metadata = {
  title: "Медицински Център Терзийски Екип",
  description:
    "МЦ Терзийски предлага висококачествена доболнична помощ в областта на Акушерството и Гинекологията",
  keywords:
    "Диетолог, Благоевград Диетолог, здраве, хрнителен режим, хранене, здравословно хранене.",
};

const OurTeamPage = () => {
  return (
    <div>
      <HeaderImage
        imageUrl="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/our-team%2Fimages-wrapper.jpg?alt=media&token=790850b4-313c-4779-b848-3875d78a6b47"
        imgAlt="Медицински Център Терзийски. Екип. Д-р Яна Терзийска, Д-р Бойко Терзийски"
      />
      <SectionsHeader
        title="Екип"
        subTitle=""
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <OurTeam />
    </div>
  );
};

export default OurTeamPage;
