import { footerData } from "./footerData";
import logo from "../assets/logo/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  
  return (
    <div className="">
      <div className="bg-black flex flex-col h-[200px]">
        
        <div className="flex flex-col mt-[50px] ml-[300px]">
            <div className="">
                <img src={logo} alt="logo" className="h-[100px] w-auto"/>
            </div>
          <div className="flex justify-center flex-wrap space-x-[50px] mt-[-100px] ml-[100px]">
            {footerData.map((footer, index) => {
              return (
                <div className=" hover:text-blue-700" key={index}>
                  <a href={footer.link} className=" text-gray-50">
                    <p>{footer.item}</p>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="flex  mt-[50px] ml-[500px] space-x-[30px]">
         <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faFacebookF} size="2x" className="text-white hover:text-blue-700" />
         </a>
         <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white hover:text-blue-700" />
         </a>
         <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white hover:text-blue-700" />
         </a>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;