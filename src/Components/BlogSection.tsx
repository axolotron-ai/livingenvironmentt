import React from "react";
import BlogGridItem from "./BlogGridItem";

function BlogSection() {
  return (
    <div className="md:mx-20 md:px-40 text-center md:py-20 border-b mx-6 px-4 py-8">
      <h1 className="font-bold text-2xl mb-2">
        Recent Updates & <span className="text-[#FC9713]">Blog Post</span>
      </h1>
      <h2 className="md:mx-60 hidden md:inline-block">
        We bring you the latest trends and expert opinions all in one place,
        helping you stay ahead and make informed decisions.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 mt-10 mb-0 pb-0">
        <BlogGridItem
          icon="/bg-01.png"
          heading="Trends and innovation in best Construction
"
          description="Building components are constructed offsite and then assembled onsite,reducing construction
"
        />
        <BlogGridItem
          icon="/bg-02.png"
          heading="Stories of Construction Our world Creativity"
          description="The creative process in architecture involves blend of engineering aesthetic,and environmental"
        />
        <BlogGridItem
          icon="/bg-03.png"
          heading="Innovative trends transform Construction"
          description="Theconstruction of philosophical System like Immanuel kants critique of pure resonor japan "
        />
      </div>
      <button className="bg-[#FC9713] text-black px-6 py-2 rounded-md mt-10">
        More Articles
      </button>
    </div>
  );
}

export default BlogSection;
