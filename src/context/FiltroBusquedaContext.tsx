import { createContext, FC, useState } from "react"
import { FiltroContextState } from "../types/types"
const defaultValues:FiltroContextState = {
    data:'',
    setData:()=>{}
}
export const FiltroContext = createContext(defaultValues)
const dataBusqueda = ''

export const FiltroBusquedaProvider:FC = ({children}) =>{
    const [data,setData] = useState(dataBusqueda)
    return (
        <FiltroContext.Provider value={{data,setData}}>
            {children}
        </FiltroContext.Provider>
    )

}