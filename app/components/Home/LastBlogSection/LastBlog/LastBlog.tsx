import React from "react";
import Image from "next/image";

import Link from "next/link";

import "./LastBlog.css";
const LastBlog = ({ lastBlog }: { lastBlog: any }) => {
  const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;

  return (
    <div className="single-recommended-blog-wrapper">
      <p className="single-recommended-blog-title">Препоръчани за вас</p>
      <div className="single-recommended-blog-image-container">
        <Image
          src={lastBlog[0]?.imgUrl}
          alt={lastBlog[0]?.title}
          width={600}
          height={300}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="single-recommended-info">
        <p>Д-р Яна Терзийска</p>
        <p>22.02.2023г.</p>
      </div>
      <p className="single-recommended-blog-post-title">{lastBlog[0]?.title}</p>
      <p className="single-recomended-blog-info">
        {lastBlog[0]?.info.length > 150
          ? lastBlog[0]?.info.slice(0, 150) + "..."
          : lastBlog[0]?.length}
      </p>

      <Link
        href={`/blogPost/${lastBlog[0]?.id}/${lastBlog[0]?.title.replace(
          regex,
          "-"
        )}`}
        className="single-reommended-blog-go-to"
      >
        Към статията
      </Link>
    </div>
  );
};

export default LastBlog;
