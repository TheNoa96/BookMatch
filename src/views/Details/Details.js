import React, { useContext, useEffect } from "react";
import "./index.css"
import Card2 from "../../components/Card2/Card2"
import { Context } from "../../store/appContext";

const Details = (props) => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
      actions.getProducts();
    }, []);

    return <div className="container">
        <div className="row align-items-start">
            
            <div className="col photobook">
                <img src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg" className="img-thumbnail" style={{ width: "350px", height: "300px", display: "inline-block", }} alt="..."></img>
            </div>
            <div className="col">
                <h1 className="titledetails">Titulo</h1>
            <h4 className="titledetails2">Autor</h4>
                <h5 className="">Reseña</h5>
                <p>Ea nisi ea aliquip occaecat excepteur veniam nisi. Aute officia cupidatat occaecat cupidatat duis nostrud dolore eiusmod voluptate est. Qui mollit aliquip enim duis quis. Labore adipisicing magna magna ipsum mollit elit non veniam excepteur ipsum.</p>
                <a href="#" className="btn btn-primary bottondetails1">Añadir Favoritos</a> {""}
                <a href="#" className="btn btn-primary bottondetails2">Hacer Match</a> {""}
            </div>
            <div className="col">
                <h1 className="titledetails">Usuario</h1>
                <Card2 /> 
            </div>
        </div>
            <img src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg" className="img-thumbnail" style={{ width: "350px", height: "300px" }} alt="..."/>
            <img src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg" className="img-thumbnail" style={{ width: "350px", height: "300px" }} alt="..."/>
            <img src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg" className="img-thumbnail" style={{ width: "350px", height: "300px" }} alt="..."/>
    </div>
}


export default Details;