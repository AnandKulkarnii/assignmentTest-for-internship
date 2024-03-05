import WebsiteBuilderCard from "./WebsiteBuilderCard"
import computer from "../assets/computer.png"

function WebsiteBuilderList() {
    const cardData = [
        {name:"WixPro 72-Inch Responsive Website Builder ",tag:"🏆 Best Choice",description: "- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)", highlights: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.", image: computer, rating: 9.8, comment: "Exceptional  " ,stars: "⭐⭐⭐⭐⭐", imageName: "Builder 1", count: 1},
        {name:"SiteCraft 68-Inch Ultimate Web Design Studio ",tag:"💎 Best Value",description: "- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)", highlights: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.", image: computer, rating: 9.5, comment: "Excellent",stars: "⭐⭐⭐⭐", imageName: "Biulder", count: 2},
        {name:"SiteCraft 68-Inch Ultimate Web Design Studio ",description: "- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)", highlights: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.", image: computer, rating: 9.3 , comment: "Excellent",stars: "⭐⭐⭐⭐⭐", imageName: "Builder 1", count: 3},
        {name:"CDK Resposive Builder",description: ": An extensive library of widgets and apps, and detailed step-by-step guides", highlights: "abc", image: computer, rating: 9.1, comment: "Excellent",stars: "⭐⭐⭐⭐", imageName: "CDK", count: 4},
      ]
    return (
        <div className="w-[1024px] mx-auto rounded-lg gap-4  mt-5">
            {cardData.map((item, index) => (
              <div key={index} className="mb-4">
                <WebsiteBuilderCard
                    key={index}
                    name={item.name}
                    tag = {item.tag}
                    description={item.description}
                    highlights={item.count===4 ? <div className="w-[505px]">
                    <div className="bg-[#FFF4ED] p-2 rounded-lg mb-4">
                        <ul>
                            <li className="text-sm font-inter">9.9 Building Responsive</li>
                            <li className="text-sm font-inter">8.9 Cool</li>
                            <li className="text-sm font-inter">8.9 Docs</li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-lg">
                        <h2 className="font-inter text-base">Why we love it</h2>
                        <ul>
                            <li className="font-inter">✓ Documentation</li>
                            <li className="font-inter">✓ Easy Use</li>
                            <li className="font-inter">✓ Out Of Box</li>
                        </ul>
                    </div>
                </div>: item.highlights}
                    rating={item.rating}
                    comment={item.comment}
                    stars={item.stars}
                    imageName={item.imageName}
                    values={item}
                />
              </div>
            ))}
        </div>

    )
}

export default WebsiteBuilderList


