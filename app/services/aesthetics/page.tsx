import React from "react";
import HeaderImage from "@/app/components/Global/HeaderImage/HeaderImage";
import SectionsHeader from "@/app/components/Global/SectionsHeader/SectionsHeader";

const AestheticsPage = () => {
  return (
    <div>
      <HeaderImage
        imageUrl="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/obstetrics%2Fobstetrics-header-image.jpg?alt=media&token=4998e25b-75c7-4e8a-88f3-b48a27020c77"
        imgAlt="Медицински Център Терзийски. Акушерство."
      />
      <SectionsHeader
        title="Естетика"
        subTitle=""
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </div>
  );
};

export default AestheticsPage;
