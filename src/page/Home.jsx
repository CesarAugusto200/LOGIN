import { Link } from "react-router-dom"
import "../assets/style/FormLogin.css"

function Home(){
    return(
        <>
         <Link  className="estilo" to="/login"> Entra para Inicar session o Registrarse</Link>
        <Link className="estilo" to="/Alta"> Entra para Inicar session o Registrarse</Link>
        </>
   
    )
}
export default Home;