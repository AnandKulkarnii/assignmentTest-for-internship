import RelatedDeals from "./RelatedDeals"
import Signup from "./Signup"
import Title from "./Title"
import WebsiteBuilderList from "./WebsiteBuilderList"
//#FBFCFD
function MainContent() {
    return (
        <div className="bg-[#FBFCFD]">
            <Title/>
            <WebsiteBuilderList />
            <RelatedDeals />   
            <Signup/> 
        </div>
    )
}

export default MainContent
