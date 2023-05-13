"use client";
import React, { useEffect, useState } from "react";

import SingleContentContainer from "../../Global/SingleContentContainer/SingleContentContainer";

import "./OsteoporosisContent.css";

const OsteoporosisContent = () => {
  const [data, setData] = useState<singleServiceData[]>([]);

  useEffect(() => {
    const fetchOsteoporosis = async () => {
      const res = await fetch("/api/services/osteoporosis");
      const resultData = await res.json();

      setData(resultData);
    };
    fetchOsteoporosis();
  }, []);

  return (
    <div className="osteoporosis-content-wrapper">
      <div className="osteoporosis-container">
        {data.map((item: singleServiceData) => (
          <SingleContentContainer
            {...item}
            key={"osteoporosis-content" + item.id}
          />
        ))}
      </div>
      <div className="height" />
    </div>
  );
};

export default OsteoporosisContent;
