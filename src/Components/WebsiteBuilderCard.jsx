import computer from "../assets/computer.png"
import PropTypes from 'prop-types';

function WebsiteBuilderCard({name, rating, highlights, description, imageName, comment, stars,tag}) {

    return (
        <div className="w-full bg-[#FFFFFF] flex gap-4 rounded-lg relative">
             <span className="absolute top-[-10px] bg-[#FF7724] font-inter text-base p-1 rounded-r-lg text-white overflow-visible">{tag}</span>
                <div className=" flex flex-col justify-center items-center p-4">
                    <img className="h-[103px] p-4" src={computer} alt="" />
                    <h3 className="font-inter text-sm text-[#727D87]">{imageName}</h3>
                </div>
                <div className="w-[505px] p-6 ">
                    <p className=" font-inter text-base "><strong>{name}</strong>{description}</p>
                    <h3 className=""><strong>Main Highlights</strong></h3>
                    <p className="p-2 font-inter text-base ">{highlights}</p>
                    <button className="bg-[#FFFFFF] text-[#1B88F4] font-inter text-sm">Show More ↓</button>
                </div>
                <div className="flex flex-col mx-auto px-4">
                    <div className="w-[135px] h-[118px] bg-[#F3F9FF] rounded-b-lg ml-11">
                        <h1 className="text-3xl text-center text-[#074786] p-3 font-inter ">{rating}</h1>
                        <h3 className="text-sm text-[#074786] text-center p-1">{comment}</h3>
                        <h3 className="text-sm text-[#074786] text-center">{stars}</h3>
                    </div>
                    <div className="relative">
                        <button className="absolute top-[25px] w-[232px] h-[48px] bg-[#1B88F4] mt-20 rounded-lg text-white font-inter text-base">View</button>
                    </div>

                </div>
                
        </div>

        
    )
}

WebsiteBuilderCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    highlights: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    stars: PropTypes.string.isRequired,
    imageName: PropTypes.string.isRequired,
    values: PropTypes.object.isRequired,
    tag: PropTypes.object.isRequired,
};

export default WebsiteBuilderCard
