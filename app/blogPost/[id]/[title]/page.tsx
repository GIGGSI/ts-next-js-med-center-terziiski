import React from "react";

async function getData(): Promise<any> {
  const res: any = await fetch(
    "https://friendly-sunburst-035709.netlify.app/.netlify/functions/api/blog-post-terziiski"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const SingleBlogPage = async ({
  params: { id, title },
}: {
  params: { id: string; title: string };
}) => {
  const data: any[] = await getData();
  const filteredBlog = data.filter((item) => item.id === parseInt(id))[0]
  return <div>{filteredBlog?.title}</div>;
};

export default SingleBlogPage;
