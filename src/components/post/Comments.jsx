export default function Comments({ comments }) { 
    return (<div className='flex flex-col mt-8'>
        <h4 className="text-[22px] font-semibold text-secondary_color leading-[38.73px] mb-3 tracking-[-0.05em]">Comments</h4>
        <div className="flex flex-col gap-2">
        {comments.map((comment, index) => (
            <div key={index} className="flex flex-col">
                <h5 className="text-[18px] font-semibold text-secondary_color leading-[38.73px] tracking-[-0.05em]">{comment.name}sdcsdc</h5>
                <span className="mb-3 text-secondary_color opacity-60 mr-5 text-[14px] font-medium leading-[14.52px]">{comment.email}</span>
                <p>{comment.body}</p>
            </div>
        ))}
        </div>
    </div>);
}