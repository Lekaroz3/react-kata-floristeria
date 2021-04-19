import { createContext, useState } from "react";
import BuscadorItems from "./Busqueda/buscador";
import ItemsGrid from "./Items/itemsGrid";
import {FiltroBusquedaProvider} from '../../context/FiltroBusquedaContext'

function GridFloristeria(){
    
    return(
        <div className="container">
            <FiltroBusquedaProvider>
                <BuscadorItems></BuscadorItems>
                <ItemsGrid></ItemsGrid>
            </FiltroBusquedaProvider>
        </div>
    )
}

export default GridFloristeria
