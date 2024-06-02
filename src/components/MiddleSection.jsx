import React from "react";
import * as images from "./Images.jsx";
import { FaHeart, FaRegBookmark } from "react-icons/fa";
import { FiMessageCircle, FiSend} from "react-icons/fi";
import "../assets/styles/MiddleSection.css";

export default function MiddleSection(){

    function StorieProfile(props){
        return(
            <div className="profile">
            <img src={props.image} alt="Profile Image" />
            <p>{props.name}</p>
        </div>
        );
    };

    function Vermelho(event){
        const element = event.target;

        element.classList.contains("vermelho") ? element.classList.remove("vermelho") : element.classList.add("vermelho");
    };

    function EnviarComentario(event){
        event.preventDefault();

        const comentarios = document.querySelector(".comentarios");
        const textInput = document.querySelector("input[type=text]").value;
        
        if(textInput === "" || !textInput) return;
        
        comentarios.innerHTML += `<p><strong>Guts:</strong> ${textInput}</p>`;
        document.querySelector("input[type=text]").value = "";
    };

    function Postagem({profileImage, profileName, date, postagem, liked, text, commentaries}){
        return(
            <div className="Postagem">
                <div className="cabecalho">
                    <img src={profileImage} alt="Profile Image" />
                    <p><strong>{profileName}</strong> <span className="date"> • {date}</span></p>
                    <span>...</span>
                </div>
                <img src={postagem} alt="Postagem" />
                <div className="icones">
                    <div>
                        <FaHeart onClick={Vermelho} className="coracao" />
                        <FiMessageCircle />
                        <FiSend />
                    </div>

                    <FaRegBookmark />
                </div>
                <p className="liked">Curtido por <strong>{liked}</strong> e outros</p>
                <p className="textoPostagem"><strong>{profileName}:</strong> {text}</p>
                <p className="commentary">Ver todos os {commentaries} comentários</p>
                <form onSubmit={EnviarComentario}>
                    <input type="text" placeholder="Adicionar um comentário" /> 
                    <input type="submit" value="Postar" />
                </form>
                <div className="comentarios"></div>
            </div>
        );
    }
    
    return(
        <main>
            <header>
                <StorieProfile name="Seu Story" image={images.Guts} />
                <StorieProfile name="Guts>:(" image={images.AngryGuts} />
                <StorieProfile name="Pu_ck" image={images.puck} />
                <StorieProfile name="GutsXD" image={images.GutsLauching} />
                <StorieProfile name="Casca33" image={images.casca} />
                <StorieProfile name="DragonFire" image={images.irvine} />
                <StorieProfile name="Sla923n" image={images.Slan} />
                <StorieProfile name="Z00D" image={images.zodd} />
            </header>
            <div id="posts">
                <Postagem profileImage={images.puck} profileName="Pu_ck" date="2d" postagem={images.PostPuck} liked="Casca33" text="Caraaa! Lembro desse dia como se fosse ontem..." commentaries="6" />

                <Postagem profileImage={images.GutsDraw} profileName="GutsDraw" date="5d" postagem={images.GutsPost1} liked="DragonFire" text="Saudades de comer um Bandeclay nunca mais achei um lugar onde vendia ;-;" commentaries="116" />

                <Postagem profileImage={images.AngryGuts} profileName="Guts>:(" date="1d" postagem={images.GutsPost} liked="GutsDraw" text="Lemon.... AAAAAAAAAAAAAAAAAAAAAAAAAAAh" commentaries="54" />

                <Postagem profileImage={images.puck} profileName="Pu_ck" date="7d" postagem={images.PostPuck1} liked="SkulKnight" text="Acho que aquilo não era uma bola..." commentaries="99" />

                <Postagem profileImage={images.casca} profileName="Casca" date="14d" postagem={images.CascaPost} liked="Guts" text="Tá tão frio que começou a nevar aqui em sp." commentaries="105" />

                <Postagem profileImage={images.Isidoro} profileName="Isidoro" date="24d" postagem={images.IsidoroPost} liked="Pu_ck" text="Esses piratas tem mais que se ferrar mesmo huahauha" commentaries="904" />

                <Postagem profileImage={images.GriffithRounded} profileName="Griffith" date="1m" postagem={images.GriffithPost} liked="SnackMan" text="Acontece né, segundas-feiras são complicadas kkkk" commentaries="10" />
            </div>
        </main>
    );
};