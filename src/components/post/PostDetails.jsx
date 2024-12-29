import facebook from "common/images/facebook.svg";
import youtube from "common/images/youtube.svg";
import x from "common/images/x.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postService } from "services/api.service";
import Comments from "./Comments";

export default function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);


    useEffect(() => {
        Promise.all([postService.getById(id), postService.getComments(id)])
            .then(([data, comments]) => {
                setPost({ ...data, comments });
            })
    }, [id]);

    return (
        <div className="flex flex-col w-full max-w-[553px] lg:w-[553px] items-start mb-[50px]">
            <h3 className="text-left text-[32px] font-semibold text-secondary_color leading-[38.73px] tracking-[-0.05em]">{post?.title}</h3>
            <span className="text-[14px] text-secondary_color leading-[16.94px] font-normal mt-[8px] tracking-[-0.05em]"
            >{post?.body}</span>
            <div className="flex items-center justify-center my-5">
                <span className="uppercase text-secondary_color mr-5 text-[12px] font-medium leading-[14.52px]">wednesday 12, march 2024</span>
                <div className="py-[5px] pl-[5px] pr-2 rounded-[99px] border-[1px] border-solid border-[#0000001A] flex items-center gap-2">
                    <div className="bg-[#00000033] rounded-full w-6 h-6"></div>
                    <span className="text-secondary_color text-[14px] leading-[16.94px] font-medium">John Doe</span>
                </div>
            </div>
            <div className="w-full max-w-[894px] h-[339px] bg-[#F5F5F5] rounded-[24px] relative">
                <div className="flex justify-center items-center h-5 px-2 absolute bottom-[22px] left-4 bg-[#00000066]">
                    <span className="text-white text-[10px] font-medium tracking-[-0.05em]"
                    >Photo by Antara</span>
                </div>
            </div>
            <div className="flex items-center mt-5">
                <span className="text-secondary_color text-[14px] leading-[16.94px] tracking-[-0.05em]"
                >Share to</span>
                <div className="flex items-center gap-[9px] ml-3">
                    <img src={facebook} alt="facebook" />
                    <img src={x} alt="x" />
                    <img src={youtube} alt="youtube" />
                </div>
            </div>
            <Comments comments={post?.comments || []} />
        </div>
    );
}