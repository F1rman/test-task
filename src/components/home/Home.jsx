import star from "common/images/star.svg";
import facebook from "common/images/facebook.svg";
import youtube from "common/images/youtube.svg";
import x from "common/images/x.svg";
import Container from "layout/container";
import Posts from "./HomePosts";


export default function Home() {
    return (<div className='relative home'>
        <Container >
            <div className="flex flex-col w-full items-center mt-[37px] mb-[50px]">
                <div className="flex items-center justify-center">
                    <img src={star} alt="star" />
                    <span className="text-secondary_color text-[20px] font-medium leading-[24.2px] pl-2">Featured</span>
                </div>
                <h3 className="text-center text-[32px] font-semibold text-secondary_color leading-[38.73px] mt-5 tracking-[-0.05em]"

                >Global Climate Summit <br /> Urges Immediate Action</h3>
                <span className="text-[14px] text-secondary_color opacity-50 leading-[16.94px] font-normal mt-[8px] tracking-[-0.05em]"

                >Leaders from around the world gathered for a global climate summit, emphasizing the urgent need for coordinated action to address climate change.</span>
                <div className="flex items-center justify-center my-5">
                    <span className="uppercase text-secondary_color opacity-60 mr-5 text-[12px] font-medium leading-[14.52px]">wednesday 12, march 2024</span>
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
            </div>

           <Posts />
        </Container>
    </div>);
}