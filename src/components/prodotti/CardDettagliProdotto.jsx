import { Link } from "react-router-dom"

function CardDettagliProdotto(props) {

    const { infoProd } = props


    return (
        <div className="character-detail">
            <h2>{infoProd.title}</h2>
            <img src={infoProd.image} alt={infoProd.title} />
            <p>Descrizione: {infoProd.description}</p>
            <p>Prezzo: {infoProd.price}</p>


            <Link to="/prodotti" className="btn btn-primary">
                Torna alla lista dei prodotti
            </Link>

        </div>

    )
}

export default CardDettagliProdotto