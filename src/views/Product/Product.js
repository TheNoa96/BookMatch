import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Footer2 from "../../components/FotterLogueado/Footer2.js";
import "./Product.css";
//FALTA AGREGAR EL CAMPO USER_ID PARA CREAR LIBRO CON USER QUE ESTA LOGGEADO

const Product = () => {
  let userinfo = localStorage.getItem("userinfo");
  userinfo = JSON.parse(userinfo);
  console.log(userinfo.user.id);

  const { store, actions } = useContext(Context);
  const [state, setState] = useState({
    title: "",
    autor: "",
    editorial: "",
    review: "",
    user_id: userinfo.user.id,
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    actions.saveProduct(state, e);
    console.log(state);
  };

  return (
    <>
      <ProfileNavbar />
      <div className="container mt-5 product1" style={{ maxWidth: "780px" }}>
        <div className="row">
          <div className="col-12">
            <h1
              className="titleproduct"
              style={{ fontFamily: "sans-serif", color: "#ddd5dd" }}
            >
              Publica tu Libro
            </h1>
          </div>
        </div>
        <form className="formsize" onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3 row formproduct" style={{ textAlign: "left" }}>
            <label
              htmlFor="title"
              className="me-6 col-sm-2 col-form-label"
              style={{ fontFamily: "sans-serif", color: "#ddd5dd" }}
            >
              Titulo
            </label>

            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="title"
                onChange={(e) => onChange(e)}
                name="title"
                placeholder="Title"
              />
            </div>
          </div>
          <div className="mb-3 row formproduct">
            <label
              htmlFor="autor"
              className="col-sm-2 col-form-label"
              style={{
                textAlign: "left",
                fontFamily: "sans-serif",
                color: "#ddd5dd",
              }}
            >
              Autor
            </label>

            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="autor"
                onChange={(e) => onChange(e)}
                name="autor"
                placeholder="Autor"
              />
            </div>
          </div>
          <div className="mb-3 row formproduct">
            <label
              htmlFor="editorial"
              className="col-sm-2 col-form-label"
              style={{
                textAlign: "left",
                fontFamily: "sans-serif",
                color: "#ddd5dd",
              }}
            >
              Editorial
            </label>

            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="editorial"
                onChange={(e) => onChange(e)}
                name="editorial"
                placeholder="Editorial"
              />
            </div>
          </div>
          <div className="mb-3 row formproduct">
            <label
              htmlFor="category"
              className="col-sm-2 col-form-label"
              style={{
                textAlign: "left",
                fontFamily: "sans-serif",
                color: "#ddd5dd",
              }}
            >
              Categoría
            </label>
            <div className="col-sm-10">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue>Escoge una categoria</option>
                <option value="1">Ficción</option>
                <option value="2">Romance</option>
                <option value="3">Historico</option>
                <option value="3">Misterios y Suspenso</option>
                <option value="3">Clásicos</option>
                <option value="3">Infantil y Juvenil</option>
              </select>
            </div>
          </div>

          <div className="mb-3 row ">
            <label
              htmlFor="review"
              className="col-sm-2 col-form-label review2"
              style={{ fontFamily: "sans-serif", color: "#ddd5dd" }}
            >
              Reseña
            </label>
            <div className="mb-3 formproductreview3">
              <textarea
                className="form-control"
                id="review"
                onChange={(e) => onChange(e)}
                name="review"
                placeholder="Reseña"
              ></textarea>
            </div>
          </div>
          {/* <div className="mb-3 formproduct3">
                        <label htmlFor="" className="col col-form-label"></label>
                        <input type="file" className="form-control" id="inputGroupFile01" />
                    </div>  */}

          <div className="input-group mb-3 formproduct4">
            <span
              className="input-group-text"
              style={{ fontSize: "70%" }}
              id="basic-addon3"
            >
              https://ediotorialplaneta/libros/
            </span>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </div>

          <div className="text-center">
            {/* <button
              className="btn btn-outline-light gradient-custom"
              style={{
                fontFamily: "sans-serif",
                color: "white",
                borderRadius: "25px",
                marginTop: "10px",
                marginBottom: "20px",
              }}
              type="submit"
            >
              Publicar
            </button> */}

        
            <button type="button" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{
                fontFamily: "sans-serif",
                color: "white",
                borderRadius: "25px",
                marginTop: "10px",
                marginBottom: "25px",
                background:"#4c3b80"
              }}>
            Publicar
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">BookMatch</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  ¿Seguro que quieres publicar tu libro?
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" className="btn btn-success">Publicar Libro</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div>
            <input type="hidden"></input>
          </div>
        </form>
      </div>

      <Footer2 />
    </>
  );
};

export default Product;