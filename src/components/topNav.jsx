import logo from "../assets/logo/logo.png"


function TopNav() {
    return (
      <div className="h-[80px] w-full bg-blue-400 shadow-lg bg-fixed">
        <div className="TOP-NAV  flex items-end bg-fixed"> 
                <div>
                    <img src={logo} alt="logo" className="w-auto h-[70px] pt-[10px]  ml-[70px]" /> 
                </div>
                <h6 className="mb-[20px]">
                
                    <span className="space-x-10  ml-[650px] ">
                        <span className="hover:text-blue-600 cursor-pointer"><a href="#home"></a>Home</span>
                        <span className="hover:text-blue-600 cursor-pointer"><a href="#about">About</a></span>
                        <span className="hover:text-blue-600 cursor-pointer"><a href="#contactUs" >Contact Us</a></span>
                    </span>
                </h6>
         </div>
      </div>
    );
  }
  
  export default TopNav;
  