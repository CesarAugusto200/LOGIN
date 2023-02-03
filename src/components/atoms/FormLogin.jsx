import { Link } from "react-router-dom";
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";

function FormLogin(){   
   
   const form =useRef();
   const endpoint ="http://34.225.239.102/api/iniciar"

   const handlerClick = (e) =>{
    
    e.preventDefault();
    const newForm = new FormData(form.current)
   

    const options ={
        method :"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            usuario: newForm.get("usuario"),
            contrasenia: newForm.get("contrasenia")
        })
    }

    fetch(endpoint, options)
    .then(response => response.json())
    .then (data =>{
        if(data.status === true ){
            alert(`Bienvenido: ${newForm.get(`usuario`)}`)
            localStorage.setItem('data',JSON.stringify(data.data));
            window.location="/Alta";
        }else
            alert('Usuario no encontrado')
        
    })
   }



    return(
         <div>
         <div className="Texto">Welcome</div>
                    <form className="Conteiner" ref={form} > 
                    <div className="datos">
                <label className="texto">Usuario
                    <input className="dat" type="text"  id="usuario" name="usuario"/>
                </label>
            </div>

            <div>
            <div>
                <label className="texto">Password</label>
                <input type="password" id="contrasenia" name='contrasenia' />
            </div>
                </div>
                <button type="button" onClick={handlerClick}>Inicar session</button>
                <Link className="link" to="/register">No tienes cuenta? Registrate aqui</Link>
      
        </form>

        
     </div>
     
    )
}
export default FormLogin;