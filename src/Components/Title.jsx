
import tickImage from '../assets/tick.png';
import ibuttonImage from '../assets/ibutton.png';

function Title() {
    return (
        <div className="flex flex-col mx-auto justify-center w-[1024px] mt-10">
            <h1 className="font-normal text-[#2C384A] font-inter text-5xl">Best Website builders in the US</h1>
            <hr className="my-4 border-t-2 border-[#E1E4E6]"></hr>
            <div className="flex gap-5 justify-between leading-none ">
                <div className='flex gap-4'>
                    <div className='flex gap-1'>
                        <img className="w-[20px] h-[20px]" src={tickImage} alt="" />
                        <h3 className="text-[#4B5665] font-normal text-sm">Last Updated - 22 Feburary, 2020</h3>
                    </div>
                    <div className='flex gap-1'>
                        <img className="w-[20px] h-[20px]" src={ibuttonImage} alt="" />
                        <h3 className="text-[#4B5665] font-normal text-sm">Advertising Disclosure</h3>
                    </div>
                </div>
                <div className='flex gap-1'>
                    <select className="bg-[#FFFFFF] text-[#4B5665] font-normal text-sm">
                        <option className="text-sm">Top Relevant</option>
                    </select>
                </div>
            </div>
            <hr className="my-4 border-t-2 border-[#E1E4E6]"></hr>
            <div className='flex gap-5 items-start'>
                <button className='w-[105px] h-[36px] rounded-lg text-sm text-[#4B5665] bg-white'>AWS Builder</button>
                <button className='w-[105px] h-[36px] rounded-lg text-sm text-[#4B5665] bg-white'>Tools</button>
                <button className='w-[105px] h-[36px] rounded-lg text-sm text-[#4B5665] bg-white'>Start Build</button>
                <button className='w-[105px] h-[36px] rounded-lg text-sm text-[#4B5665] bg-white'>Build Supplies</button>
                <button className='w-[105px] h-[36px] rounded-lg text-sm text-[#4B5665] bg-white'>Tooling</button>
                <button className='w-[105px] h-[36px] rounded-lg text-sm text-[#4B5665] bg-white'>BlueHosting</button>
            </div>
            <div className='mt-2'>
                <span className='font-inter text-sm text-[#727D87]'>Home &gt; </span>
                <span className='font-inter text-sm text-[#727D87]'>Hosting fo&gt; all &gt; </span>
                <span className='font-inter text-sm text-[#727D87]'>Hosting &gt; </span>
                <span className='font-inter text-sm text-[#727D87]'>Hosting6 &gt; </span>
                <span className='font-inter text-sm text-[#727D87]'>Hosting5</span>
            </div>
        </div>
    )
}

export default Title
