import NavBar from "./NavBar";
import Footer from "./Footer";
import Admin_controller from "./Admin_controller";



function Admin_Page(props) {

    return (
        <>
            <div className="flex-col space-y-[100.33px] py-[100.33px]">
                <div>
                    <div className="flex-col flex items-center">
                        <h2 className="h2 ">Welcome</h2>
                    </div>
                    <Admin_controller />
                </div>
                <div className="flex-col flex items-center gap-4">
                    <h2 className="h2 " >Statistics</h2>
                    <div className="flex gap-8 p-4">
                        <div className="flex-col space-y-2 ">
                            <h3 className="h3 text-[#989898]">Eastern</h3>
                            <div className="flex gap-2 w-[276px] h-[34px] justify-between font-semibold ">
                                <h1 className="h1">{props.Eastern_Statistics}EGP</h1>
                                <div className="flex rounded-lg w-[82px] h-[25px] justify-between px-1.5 " style={{ backgroundColor: (props.Eastern_percentage) > 0 ? "#9DFFBF" : "#FFB4B7" }}>
                                    <p>--</p>
                                    <p style={{ color: props.Eastern_percentage > 0 ? "#066B29" : "#C4141C" }}>{props.Eastern_percentage}%</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col space-y-2">
                            <h3 className="h3 text-[#989898]">Western</h3>
                            <div className="flex gap-2 w-[276px] h-[34px] justify-between font-semibold">
                                <h1 className="h1">{props.Western_Statistics}EGP</h1>
                                <div className="flex rounded-lg w-[82px] h-[25px] justify-between px-1.5 " style={{ backgroundColor: (props.Western_percentage) > 0 ? "#9DFFBF" : "#FFB4B7" }}>
                                    <p>--</p>
                                    <p style={{ color: props.Western_percentage > 0 ? "#066B29" : "#C4141C" }}>{props.Western_percentage}%</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col space-y-2">
                            <h3 className="h3 text-[#989898]">Drinks</h3>
                            <div className="flex gap-2 w-[276px] h-[34px] justify-between font-semibold">
                                <h1 className="h1">{props.Drinks_Statistics}EGP</h1>
                                <div className="flex rounded-lg w-[82px] h-[25px] justify-between px-1.5 " style={{ backgroundColor: (props.Drinks_percentage) > 0 ? "#9DFFBF" : "#FFB4B7" }}>
                                    <p>--</p>
                                    <p style={{ color: props.Drinks_percentage > 0 ? "#066B29" : "#C4141C" }}>{props.Drinks_percentage}%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin_Page;