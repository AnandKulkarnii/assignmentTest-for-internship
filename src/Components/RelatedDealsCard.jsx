import PropTypes from 'prop-types';
function RelatedDealsCard({name, description,ogPrice,price,image,discount,valid}) {
    return (
        <div className="w-[333px] mt-10 rounded-lg p-4 bg-white">
            <div className="w-[292px] h-[148px] flex justify-center items-center">
                <img src={image} alt="" />
            </div>

            <div className="px-2 flex gap-2 mt-2">
                <span className="font-inter text-xs rounded-md bg-[#F2F4F7] text-[#074786] p-1">{discount}</span>
                <span className="font-inter text-xs rounded-md bg-[#F2F4F7] text-[#074786] p-1">{valid}</span>
            </div>
            <div className="flex justify-center mt-2">
                <span className="text-center font-bold text-[#626E79]">{name}</span>
            </div>
            <p className="text-base font-inter text-[#626E79] mt-2">{description}</p>
            <div className=" flex gap-2 mt-1">
                <span className="font-inter text-xl p-1 text-[#5C6874]">{price}</span>
                <span className="font-inter text-sm text-[#9FA9B3] pt-2">{ogPrice}</span>
                <span className="font-inter text-sm text-[#EF4C5D] pt-2">{(discount)}</span>
            </div>
            <button className="w-[292px] h-[48px] bg-[#1B88F4] text-white text-base rounded-lg mt-1">View Deal</button>
        </div>
    )
}

RelatedDealsCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ogPrice: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    valid: PropTypes.object.isRequired,
};

export default RelatedDealsCard
