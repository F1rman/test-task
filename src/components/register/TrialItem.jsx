export default function Item({ img, title, description }) {
    const image = require(`common/images/${img}`);
    return (<div className='flex flex-col'>
        <div className="flex items-center">
            <img src={image} alt="trial-item" />
            <span className="text-white font-semibold text-[14px] leading-[16.94px] ml-2">{title}</span>
        </div>
            <span className="text-[#484848] font-normal text-[14px] leading-6 ml-8">{description}</span>
    </div>);
}