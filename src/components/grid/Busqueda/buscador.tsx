import { useContext } from "react"
import { FiltroContext } from "../../../context/FiltroBusquedaContext"

function BuscadorItems(){
    const {data,setData} = useContext(FiltroContext)
    return(
        <div className="container-fluid mb-5 mt-3 p-0">
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
                onChange={(event)=>{
                    setData(event.target.value)
                }}/>
            </form>
        </div>
    )
}
export default BuscadorItems