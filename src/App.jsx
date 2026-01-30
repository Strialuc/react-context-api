// importo tutti i componenti di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importo pages da usare nelle rotte
import Homepage from "./pages/Homepage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import DettagliProdotto from "./pages/DettagliProdotto"

// import layout
import DefaultLayout from "./layouts/DefaultLayout";

import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/chisiamo" element={<ChiSiamo />} />
            <Route path="/prodotti">
              <Route index element={<Prodotti />} />
              <Route path=":id" element={<DettagliProdotto />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
