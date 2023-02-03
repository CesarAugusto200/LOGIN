import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function FormAlta(){
    const navigate = useNavigate()
    const placa = useRef()
    const numasientos = useRef()
    const fecha = useRef()
    const tipo = useRef()
    const nombre = useRef()

    const form = useRef()
    const endpoint = 'http://34.225.239.102/api/autobus/register'

    const handlerClick = (e)=>{
        
        e.preventDefault();

        const newForm = new FormData(form.current)
     

        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                placa: newForm.get(' placa'),
                numasientos: newForm.get('numasientos'),
                fecha: newForm.get('fecha'),
                tipo: newForm.get('tipo'),
                nombre: newForm.get('nombre')
            })
        }
        fetch(endpoint, options)
        .then(response => response.json())
        .then (data =>{
            if(data.status === true ){
                alert(`Bienvenido: ${newForm.get(`usuario`)}`)
               
            }else
                alert('Usuario no encontrado')
            
        })
    }







    return(
        <form className="Conteiner" ref={form}>
            <label className="texto" htmlFor="name">clave del autobus</label>
            <input type="text" id="clave"/>


            
            <label className="texto" htmlFor="name">Placa del autobus</label>
            <input type="text" id="placa"/>

            <label className="texto" htmlFor="name">numero de asientos</label>
            <input type="number" id="numasientos"/>


            
            <label className="texto" htmlFor="name">fecha de alta</label>
            <input type="Date" id="fecha"/>
        

            
            <label className="texto" htmlFor="name">Tipo</label>
            <input type="text" id="tipo"/>

            <label className="texto" htmlFor="name">nombre del chofer</label>
            <input type="text" id="nombre"/>


           

            
            
           <button className="boton" onClick={handlerClick}>Registro</button>
          
        </form>
    )
}
export default  FormAlta;