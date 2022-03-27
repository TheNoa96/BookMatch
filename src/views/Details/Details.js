import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import React, { useContext, useEffect, useState  } from "react";
import "./index.css";
import Card2 from "../../components/Card2/Card2";
import { Context } from "../../store/appContext";
import Footer2 from "../../components/FotterLogueado/Footer2"
import { useParams } from "react-router-dom";

const Details = (props) => {
  const { store, actions } = useContext(Context);
 //HACER DESDE AQUI SOLICITUD PARA ENVIAR ESTADO DE PENDIENTE EN STATUS #requestmatch 
    const params = useParams();
   console.log(params.id)
    useEffect(() => {
	  actions.getProduct(params.id)
	  }, [])
    //si no está iniciado sesión, el objeto en localstorage no esta lleno. por lo tanto no puedes hacer match
    let userinfo = localStorage.getItem('userinfo');
    userinfo = JSON.parse(userinfo)
    console.log(userinfo.user.id) 
    
  //requestMatching    
   const [state, setState] = useState({
   title: store.product.title,
   autor: store.product.autor,
   editorial: store.product.editorial,
   review: store.product.review,
   user_id: userinfo.user.id,
   status : "pending"
  })
  
  return (
    <>
      {" "}
      <ProfileNavbar />
      <div className="container">
        <div className="container">
          <div className="row align-items-start">
            <div className="col photobook">
              <img
                src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
                className="img-thumbnail"
                style={{
                  width: "350px",
                  height: "300px",
                  display: "inline-block",
                }}
                alt="..."
              ></img>
            </div>
            <div className="col">
              <h1 className="titledetails">{store.product?.title}</h1>
              <h4 className="titledetails2">{store.product?.editorial}</h4>
              {/* <h5 className="">{store.product?.review}</h5> */}
              <p>
                Ea nisi ea aliquip occaecat excepteur veniam nisi. Aute officia
                cupidatat occaecat cupidatat duis nostrud dolore eiusmod
                voluptate est. Qui mollit aliquip enim duis quis. Labore
                adipisicing magna magna ipsum mollit elit non veniam excepteur
                ipsum.
              </p>
              <button to="#" className="btn btn-primary">
                Añadir Favoritos
              </button>{" "}
              {""}
              
              {""}

              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                Hacer Match
              </button>


              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Match</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p className="card-text fw-light" >El libro que deseas intercambiar debe estar en muy buen estado, es decir, no debe: tener hojas sueltas, tapas y lomo despegado, haber estado mojado, estar manchado o contar con rayones en su portada o en el interior que dificulten su lectura.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onCLick={() => actions.requestMatching(state)} >Aceptar</button>
                      <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <h1 className="titledetails">Usuario</h1>
              <Card2 />
            </div>
          </div>
          <img
            src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
            className="img-thumbnail"
            style={{ width: "350px", height: "300px" }}
            alt="..."
          />
          <img
            src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
            className="img-thumbnail"
            style={{ width: "350px", height: "300px" }}
            alt="..."
          />
          <img
            src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023888_1024x576.jpg"
            className="img-thumbnail"
            style={{ width: "350px", height: "300px" }}
            alt="..."
          />
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Details;
