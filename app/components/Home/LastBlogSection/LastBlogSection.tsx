import React from "react";

import "./LastBlogSection.css";
import LastBlog from "./LastBlog/LastBlog";
import LastBlogs from "./LastBlogs/LastBlogs";

async function getData(): Promise<any> {
  const res: any = await fetch(
    "https://friendly-sunburst-035709.netlify.app/.netlify/functions/api/blog-post-terziiski"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function LastBlogSection(): Promise<any> {
  const data: any[] = await getData();
  const lastBlog = data.slice(-1);
  const lastBlogs = data.slice(-3);

  return (
    <div className="blog-section-wrapper">
      <div className="bog-section-title-container">
        <h1 className="section-title">Блог</h1>
        <h3 className="subTitle">
          Открийте здравни новини и препоръки, от нашите специалисти.
        </h3>

        <LastBlog lastBlog={lastBlog} />
      </div>
      <div className="blog-section-recommended-blogs">
        <p className="blog-section-recommended-blogs-info">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,{" "}
        </p>
        {/* <button className="purle-button" onClick={() => console.log("cuk")}>
          Виж всички
        </button> */}
        <LastBlogs lastBlogs={lastBlogs} />
      </div>
    </div>
  );
}
