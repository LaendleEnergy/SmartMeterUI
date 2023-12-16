import Image from "next/image";
import logo from "./../../../assets/images/logo.png";

interface LogoProps {
    h: number;
    w: number;
  }
  
export default function Logo({h, w} : LogoProps) {
    return (<Image alt="Logo" src={logo} height={h} width={w} className="img-responsive"></Image>)
}
