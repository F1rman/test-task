import articles from "common/images/articles.svg";
import Button from "components/common/buttons/button";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { postService } from "services/api.service";

export default function Posts() {
  const { state } = useLocation();

  const [posts, setPosts] = useState(state?.posts || []);
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (posts.length === 0) postService.getAll().then(setPosts);
  }, []);

  return (<div className='flex flex-col w-[471px]'>
    <div className="flex items-center w-full justify-between">
      <div className="flex items-center">
        <img src={articles} alt="articles" width={18} height={18} />
        <span className="text-secondary_color text-[20px] font-medium leading-[24.2px] tracking-[-0.05em] ml-2">Related Articles</span>
      </div>
      <Button
        variant="default"
        onClick={() => setCount((prev) => prev + 5)}
        className="h-[37px]"
      >
        <span className="text-secondary_color text-[14px] tracking-[-0.05em]">
          Read more
        </span>
      </Button>
    </div>

    <div className="flex flex-col overflow-auto gap-[44px] max-h-[880px] mt-[38px]">
      {[...posts].slice(0, count).map((post) => (
        <Link className="flex items-center w-full gap-5" key={post.id} to={`${post.id}`}>
          <div className="bg-[#F5F5F5] rounded-[16px] flex w-full h-[136px]"></div>
          <div className="flex flex-col w-full">
            <span className="uppercase text-[12px] text-secondary_color font-medium tracking-[-0.05em] mb-5 leading-[14.52px]">wednesday 12, march 2024</span>
            <h6 className="text-secondary_color text-[17px] leading-[20.57px] font-semibold tracking-[-0.05em] col_elipsis">{post.title}</h6>
            <p className="text-[14px] text-secondary_color tracking-[-0.05em] mt-2 leading-[16.94px] max-w-[227px] description">{post.body}</p>
          </div>
        </Link>
      ))}
    </div>


  </div>);
}