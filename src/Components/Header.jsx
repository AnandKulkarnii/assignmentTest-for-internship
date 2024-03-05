function Header() {
    return (
        <div className="w-full h-16 bg-[#212731] flex justify-center gap-11 items-center">
            <input
                className="h-[37px] w-[258px] rounded-md"
                type="text"
                placeholder=""
                onChange=""
                value="" />
            <h2 className="text-sm font-normal font-inter text-[#D1D6DA]">Categories</h2>
            <h2 className="text-sm font-normal font-inter text-[#D1D6DA]">Website Builders</h2>
            <h2 className="text-sm font-normal font-inter text-[#D1D6DA]">Today's deals</h2>
        </div>
    )
}

export default Header
