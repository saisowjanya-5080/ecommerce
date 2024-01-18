import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";


const Footer = () => {
    return (
        <div className=" w-full bg-green-800    
    text-white h-[200px] flex  flex-col justify-center items-center mt-9">
            <div className=" flex gap-5 justify-center   ">
                <p className="cursor-pointer">Cookie Settings </p>
                <p>|</p>
                <p className="cursor-pointer">Privacy Policy </p>
                <p>|</p>
                <p className="cursor-pointer">Terms and Conditions </p>
                <p>|</p>
                <p className="cursor-pointer">Cookies</p>
            </div>
            <div className="flex items-center gap-3 mt-5">
                <p>Follow us on </p>
                <a href="https://www.instagram.com/state_library/">
                    <BsInstagram className="text-xl cursor-pointer " />
                </a>
                <a href="https://www.facebook.com/groups/773217057624330">
                    <AiOutlineFacebook className="text-3xl cursor-pointer " />
                </a>
                <a href="https://www.youtube.com/@statelibraryvictoria/videos">
                    <FiYoutube className="h-9 text-3xl cursor-pointer " />
                </a>
            </div>
        </div>
    );
};

export default Footer;