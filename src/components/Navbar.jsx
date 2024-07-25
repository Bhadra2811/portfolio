
import favicon from "../assets/android-icon-48x48.png"
import { FaLinkedin} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
return(
<nav className="mb-20 flex items-center justify-between py-6">
  <div className="flex flex-shrink-0 items-center">
    <img className="mx-2 w-20" src={favicon} alt=""/>
</div>
<div className="m-8 flex items-center justify-center gap-4 text-2xl">
<a href="https://www.linkedin.com/in/g-bhadra-nair-669a59249" target="_blank" rel="g bhadra nair"><FaLinkedin /></a>
<a href="https://github.com/Bhadra2811" target="_blank" rel="Bhadra2811"><FaGithub /></a>
<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl" target="_blank" rel="noopener noreferrer"><SiGmail /></a>
<a href="https://www.instagram.com/g_bhadra_nair_" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
  </div>  
  </nav>
  );
  };

export default Navbar;
