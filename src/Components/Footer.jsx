function Footer() {
    return (
        <div className="w-full h-[482px] bg-[#212731] flex justify-center p-10">
            <div className="flex justify-between">
                <div className="w-[333px] h-[258px]">
                    <h3 className="font-inter text-sm text-[#FFFFFF] pb-4">CATEGORIES</h3>
                    <ul>
                        <li className="font-inter text-xs text-[#B6BDC4] pb-6">Web Builder</li>
                        <li className="font-inter text-xs text-[#B6BDC4] pb-6">Hosting</li>
                        <li className="font-inter text-xs text-[#B6BDC4] pb-6">Data Center</li>
                        <li className="font-inter text-xs text-[#B6BDC4] pb-6">Robotic-Automation</li>
                    </ul>
                </div>
                <div className="w-[333px] h-[258px]">
                    <h3 className="font-inter text-sm text-[#FFFFFF] pb-4">CONTACT</h3>
                    <ul>
                        <li className="font-inter text-xs text-[#B6BDC4] pb-6">Contact</li>
                        <li className="font-inter text-xs text-[#B6BDC4] pb-6">Privacy Policy</li>
                        <li className="font-inter text-xs text-[#B6BDC4] pb-6">Terms Of Service</li>
                        <li className="font-inter text-xs text-[#B6BDC4] pb-6">Categories</li>
                        <li className="font-inter text-xs text-[#B6BDC4] pb-6">About</li>
                    </ul>
                </div>
                <div className="w-[333px] h-[258px] flex justify-center items-center relative">
                    <select className="bg-[#212731] text-[#D1D6DA] w-[95px] h-[20px] text-xs absolute">
                        <option className="text-sm">United States</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Footer
