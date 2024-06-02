import React from "react";
import * as images from "./Images.jsx";
import "../assets/styles/RightSection.css"

export default function RightSection(){
    function Profile({nickname, text, img, asideText}){
        return(
            <div>
                <div>
                    <img src={img} alt="Profile Photo." />
                    <span>
                        <p>{nickname}</p>
                        <p>{text}</p>
                    </span>
                </div>
                <aside>
                    {asideText}
                </aside>
            </div>
        );
    };

    return(
        <aside className="asideMain">
            <Profile nickname="Guts" text="Berserk" img={images.Guts} asideText="Switch"/>
            <p className="profilesTitle"><span>Sugeridos para você</span> <span>Ver Todos</span></p>
            <Profile nickname="Fernese" text="Novo no Instagram" img={images.Fernese} asideText="Seguir de volta"/>
            <Profile nickname="GriffithRounded" text="Sugerido para você" img={images.GriffithRounded} asideText="Seguir de volta"/>
            <Profile nickname="GutsDraw" text="Sugerido para você" img={images.GutsDraw} asideText="Seguir"/>
            <Profile nickname="SkulKnight" text="Sugerido para você" img={images.SkulKnight} asideText="Seguir"/>
            <Profile nickname="SnackMan" text="Novo no Instagram" img={images.SnackMan} asideText="Seguir"/>
            <footer>
                About - Help - Press - API - Jobs - Privacy - Terms - Locations - Language - Meta Verified
                <br />
                <span>© 2024 INSTAGRAM FROM META</span>
            </footer>
        </aside>
    );  
}
