import { useState, useEffect } from "react";
import {FiMenu} from "react-icons/fi";
import {MdClose} from "react-icons/md";
import {AiFillInstagram, AiFillFacebook, AiOutlineTwitter} from "react-icons/ai";

const Navbar = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(()=> {
        if(openMobileMenu){
            document.body.style.overflowY = "hidden"
        }else{
            document.body.style.overflowY = "auto"
        }
    },[openMobileMenu])

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 0){
                setIsScrolling(true)
            }else{
                setIsScrolling(false)
            }
        };

        window.addEventListener("scroll", handleScroll)

        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    const handleMobileMenu = () =>{
        setOpenMobileMenu(!openMobileMenu);
    }


  return (
    <nav className={`py-3 w-full ${isScrolling ? "fixed top-0 bg-white shadow-lg z-10" : "relative"}`}>
        <div className="w-[89%] m-auto
        max-w-[1400px] flex justify-between items-center">
            <a href="/">
                <h1 className="text-3xl font-bold text-primary">InfluenceHub</h1>
            </a>
            <ul className={`md:flex items-center gap-8 md:static absolute text-gray-400 ${openMobileMenu ? "top-12 py-4 w-full bg-primary left-0 text-center space-y-10 text-white drop-shadow-lg z-20" :
            "hidden"}`}>
                <li className="">
                    <a href="/" className=""
                      onClick={()=> setOpenMobileMenu(false)}>Home</a>
                </li>
                <li className="">
                    <a href="#about" className=""   
                    onClick={()=> setOpenMobileMenu(false)}>About</a>
                </li>
                <li className=""
                  onClick={()=> setOpenMobileMenu(false)}>
                    <a href="#pricing" className="">Pricing</a>
                </li>
                <li className=""
                  onClick={()=> setOpenMobileMenu(false)}>
                    <a href="#contact" className="">Contact</a>
                </li>
            </ul>

            <div className="flex gap-4 text-white items-center ml-auto md:ml-0">
                <div className="bg-primary p-1 rounded-full hover:translate-y-[-5px] transition-all cursor-pointer">
                    <AiFillFacebook/>
                </div>
                <div className="bg-primary p-1 rounded-full hover:translate-y-[-5px] transition-all cursor-pointer">
                    <AiFillInstagram/>
                </div>
                <div className="bg-primary p-1 rounded-full hover:translate-y-[-5px] transition-all cursor-pointer">
                    <AiOutlineTwitter/>
                </div>
            </div>

            <div className="md:hidden ml-4"
            onClick={handleMobileMenu}>
                {!openMobileMenu ? <FiMenu/> : <MdClose/>}
            </div>
        </div>
    </nav>
  )
}

export default Navbar