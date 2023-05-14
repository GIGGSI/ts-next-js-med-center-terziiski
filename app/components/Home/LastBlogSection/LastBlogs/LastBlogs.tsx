import React from "react";
import Image from "next/image";
import Link from "next/link";

import "./LastBlogs.css";

const LastBlogs = ({ lastBlogs }: { lastBlogs: any }) => {
  const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;

  return (
    <div className="recommended-blogs-wrapper">
      {lastBlogs.map((item: any) => (
        <div key={item.id} className="recommended-blog-container">
          <div className="recommended-blog-image-wrapper">
            <Image
              src={item?.imgUrl}
              alt={item?.title}
              width={600}
              height={300}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="recommended-blog-content">
            <div className="recommended-blog-author-container">
              <p>{item.author}</p>
              <p>{item.date}</p>
            </div>
            <p className="recommended-blog-title">{item.title}</p>
            <Link
              href={`/blogPost/${item?.id}/${item?.title.replace(regex, "-")}`}
              className="single-reommended-blog-go-to"
            >
              Към статията
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastBlogs;
