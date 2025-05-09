import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  //CHAMA A API E SALVA NO ESTADO PRODUTOS OS PRODUTOS QUE ESTÃO NA API
  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
  //     .then((res) => res.json())
  //     .then((res) => setProdutos(res))
  // }, [])

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
