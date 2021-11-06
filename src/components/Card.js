import { useEffect, useState } from "react";
import Api from "../services/Api";


    const Card= ()=> {
        const [dados, setDados] = useState([]);

        const urlInicial = "/character";

        const chamadaApi = (url) => {
            Api.get(url)
            .then(response => {
                setDados(response.data.result)
            }).catch(error =>{
                console.error(error)
            })
        }

        useEffect(() =>{
            chamadaApi(urlInicial);
        }, [])

        console.log(dados)
    

    return(

        <div>
            <div>
                {
                    dados.map((item, index) =>{
                        return(
                            <div>
                                <img className="card-img" src={item.imge} alt="" />
                                <div>
                                    <strong>{item.name}</strong>
                                    <p>{item.specie}</p>
                                    <p>{item.location?.name}</p>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Card;