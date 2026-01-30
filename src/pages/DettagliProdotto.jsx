import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import CardDettagliProdotto from "../components/prodotti/CardDettagliProdotto";

const endpointDettagli = "https://fakestoreapi.com/products/";

function DettagliProdotto() {
    const [dettagli, setDettagli] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(endpointDettagli + id)
            .then(resp => setDettagli(resp.data))
            .catch(err => {
                console.log("errore chiamata", err)
                navigate("/prodotti");
            })
    }, [])

    const navigate = useNavigate();

    return (
        <>
            <h1>Dettaglio del prodotto</h1>
            {dettagli ? (
                <CardDettagliProdotto infoProd={dettagli} />
            ) : (
                <p className="loader">Loading...</p>
            )
            }
        </>
    );
}

export default DettagliProdotto