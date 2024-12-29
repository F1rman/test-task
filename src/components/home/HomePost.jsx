export default function Post({ post, onClick }) {
    return (
        <div className="flex flex-col w-[246px] cursor-pointer"
           onClick={onClick}
        >
            <div className="flex flex-col gap-5">
                <div className="bg-[#F5F5F5] rounded-[16px] w-full h-[136px]"></div>
                <span className="uppercase text-[12px] font-medium leading-[14.52px] tracking-[-0.05em] text-secondary_color opacity-30" >wednesday 12, march 2024</span>
                <h4 className="text-secondary_color font-semibold text-[17px] leading-[20.57px] tracking-[-0.05em] col_elipsis">
                    {post.title}
                </h4>
            </div>
            <p className="text-[14px] leading-[16.94px] text-secondary_color tracking-[-0.05em] mt-2 description opacity-50">{post.body}</p>
        </div>
    );
}