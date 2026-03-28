
import PromocionCuotas from './components/PromocionCuotas'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import Banner from './components/Banner'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center">
            <PromocionCuotas />
            <NavBar />
            <Banner />
            <ItemListContainer texto={"Bienvenidos a Luciernaga"} />

            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
