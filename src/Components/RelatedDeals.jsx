import RelatedDealsCard from "./RelatedDealsCard"
import computerImg from "../assets/computer.png"

const dealsData =[
    {image: computerImg, price:"$39.96", ogPrice: "49.96", name:"Webbuilder 1", discount:"20% Off", valid:"Limited time", description: "Computer  Modern clasic with wix support"},
    {image: computerImg, price:"$39.96", ogPrice: "49.96", name:"Webbuilder 1", discount:"20% Off", valid:"Limited time", description: "Computer  Modern clasic with wix support"},
    {image: computerImg, price:"$39.96", ogPrice: "49.96", name:"Webbuilder 1", discount:"20% Off", valid:"Limited time", description: "Computer  Modern clasic with wix support"},
]

function RelatedDeals() {
    return (
        <div className="flex flex-col justify-center w-[1024px] mx-auto mt-16 p-2">
            <h1 className="font-inter text-3xl text-[#2C384A]">Related deals you might like for</h1>
            <div className="flex gap-4">
                {dealsData.map((item, index)=>{return(
                        <RelatedDealsCard key={index} image={item.image} price={item.price} ogPrice={item.ogPrice} name={item.name} discount={item.discount} valid={item.valid} description={item.description}/>
                )})}
            </div>
        </div>
    )
}

export default RelatedDeals
