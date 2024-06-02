import React from "react";
import "../assets/styles/LeftSection.css";
import {Guts} from "./Images.jsx";

import { IoMdHome } from "react-icons/io";
import { FaMagnifyingGlass, FaThreads, FaRegSquarePlus } from "react-icons/fa6";
import { FaRegCompass, FaRegHeart, FaInstagram } from "react-icons/fa";
import { LuClapperboard } from "react-icons/lu";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";

export default function LeftSection(){
    const mainIcons = [<IoMdHome />, <FaMagnifyingGlass />, <FaRegCompass />, <LuClapperboard />,<BiMessageRoundedDetail />, <FaRegHeart />, <FaRegSquarePlus />, <Profile src={Guts} />];

    const FooterIcons = [<FaThreads  />, <RxHamburgerMenu  />];
    const text = ["Home", "Pesquisa", "Explorar", "Reels", "Mensagens", "Notificações", "Criar", "Perfil"];

    return(
        <section>
            <FaInstagram style={{width: "27px", margin: "15px auto"}} />
            <ul>
                <Icone icons={mainIcons}/>
            </ul>
            <footer>
                <ul>
                    <Icone icons={FooterIcons} text={text} />
                </ul>
            </footer>
        </section>
    );
}

const Icone = ({icons}) => icons.map((icon, index) => <li key={index} style={{fontSize: "27px"}}>{icon}</li>);

const Profile = ({src}) => <img src={src} alt="Imagem de perfil." />;