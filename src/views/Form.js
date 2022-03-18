import React, { useState }from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";


/* FORMULARIO PARA REGISTRARSE*/
const Form = () => {
    //Estado del state
    const [state, setState] = useState({});

    const onChange = (evento) => {
        setState({[evento.target.name] : evento.target.value})
    }
    const onSubmit = () => {
        actions.createUser(state)
    
    }
    const { store, actions } = useContext(Context)
    return (
        <div className="container loginback ">
            <legend>
                {" "}
                <h1 className="form-title text-white">Crear una nueva cuenta</h1>
            </legend>
            <h2 className="form-subtitle text-white">Información Personal</h2>
            <br></br>
            
            <form onSubmit={(evento)=>onSubmit(evento)}>
                <div class="mb-3">
                    <label for="exampleInputNombre" class="form-label d-flex text-white">
                        Nombre <i class="fa fa-asterisk fa-xs " style={{ fontSize: 6, color: "#fd4444" }}></i>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputNombre"
                        aria-describedby="nombreHelp"
                        required
                        onChange={(evento) => onChange(evento)}
                    />

                </div>
                <div class="mb-3">
                    <label for="exampleInputApellido" class="form-label d-flex text-white">
                        Apellidos <i class="fa fa-asterisk fa-xs " style={{ fontSize: 6, color: "#fd4444" }}></i>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputApellido"
                        aria-describedby="apellidoHelp"
                        required
                        onChange={(evento) => onChange(evento)}
                    />

                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail" class="form-label d-flex text-white">
                        Correo Electrónico <i class="fa fa-asterisk fa-xs" style={{ fontSize: 6, color: "#fd4444" }}></i>
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                        onChange={(evento) => onChange(evento)}
                    />
                    <div id="emailHelp" class="form-text d-flex text-white">
                        Nunca debes compartir tu correo con nadie
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label d-flex text-white">
                        Contraseña <i className="fa fa-asterisk fa-xs" style={{ fontSize: 6, color: "#fd4444" }}></i>
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        required
                        onChange={(evento) => onChange(evento)}
                    />
                    <div id="passwordHelpBlock" className="form-text d-flex text-white">
                        Tu contraseña debe contener:
                        8 o más carácteres,
                        letras mayúsculas y minúsculas,
                        al menos un número.
                    </div>
                </div>
                <div className="asterisk d-flex">

                    <i class="fa fa-asterisk  p-2" style={{ fontSize: 6, color: "#fd4444" }}></i>Campos Obligatorios
                </div>

                <button className="btn btn-outline-light gradient-custom-2 mt-3" type="submit">
                    Crear una cuenta
                </button>

            </form>
            <ul></ul>
        </div>
    );
};

export default Form;