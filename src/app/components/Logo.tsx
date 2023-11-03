import Image from "next/image";
import logo from "./../../../assets/images/logo.png";

export default function Logo() {
    return (<Image alt="Logo" src={logo} height="96" width="160" className="img-responsive"></Image>)
}
