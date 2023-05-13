"use client";
import { useState } from "react";

import "./SingleDoctor.css";
import Image from "next/image";

const SingleDoctor = ({
  id,
  title,
  image,
  content,
  sectionId,
  doctor,
  career
}: {
  doctor: string;
  id: number;
  title: string;
  image: string;
  content: any;
  sectionId?: string;
  career?:string
}) => {
  const [doctorId, setDoctorId] = useState(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    let anchorTarget = document.getElementById(id);
    if (anchorTarget) {
      anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
      document
        .getElementById(sectionId ? sectionId : "single-doctor-wrapper")
        ?.scrollTo({
          left: 0,
          top: anchorTarget.offsetTop,
          behavior: "smooth",
        });
    }
  };

  return (
    <>
      <div
        className="single-doctor-wrapper"
        id={sectionId ? sectionId : "modal-wrapper"}
      >
        <Image
          src={image}
          alt={doctor}
          width={600}
          height={300}
          priority
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          className="single-doctor-image"
        />

        <p className="single-doctor-title">{doctor}</p>
        <p className="single-doctor-content">{career}</p>
        <button
          className="single-doctor-learn-more"
          onClick={() => {
            setDoctorId(id);
            setShowModal(true);
            scrollToSection(sectionId ? sectionId : "modal-wrapper");
          }}
        >
          Научи повече
        </button>
      </div>
      {/* {showModal && <Modal doctorId={doctorId} setShowModal={setShowModal} />} */}
    </>
  );
};

export default SingleDoctor;
