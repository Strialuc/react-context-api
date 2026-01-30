import CardProdotto from "./CardProdotto";



function ListaProdotti({ prodotti }) {


    return (
        <div className="container">
            <h1 className="mb-4">Lista Prodotti</h1>
            <div className="lista-prodotti row g-4">
                {prodotti.map(prodotto => (
                    <div
                        key={prodotto.id}
                        className="col-12 col-sm-6 col-md-4 col-lg-3"
                    >
                        <CardProdotto prodotto={prodotto} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListaProdotti