import { Flor } from "../Interfaces/Flor";


     let flores:Flor[]= []

    export function getValues():Flor[]{
        fetch('https://dulces-petalos.herokuapp.com/api/product',{
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "fairestdb.p.rapidapi.com",
            "x-rapidapi-key": "apikey"
          }
          
       }).then(async res =>{
        const data = await res.json()
       
           flores = data
           return flores
       })
       .catch(error => console.log(error))
       return flores
     }


    //  const getFloresApi = async ()=>{
    //     await  fetch('https://dulces-petalos.herokuapp.com/api/product',{
    //       "method": "GET",
    //       "headers": {
    //         "x-rapidapi-host": "fairestdb.p.rapidapi.com",
    //         "x-rapidapi-key": "apikey"
    //       }
          
    //    })
    //    .then(res => res.json())
    //    .then((data) =>{
    //        flores = data
    //        return flores
    //    })
    //    .catch(error => console.log(error))
    //   }



