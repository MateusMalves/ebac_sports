import { Produto as ProdutoType } from '../App'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useGetProdutosQuery } from '../services/api'
import Produto from '../components/Produto'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: products } = useGetProdutosQuery()
  const fav = useSelector((state: RootState) => state.favorito.itens)

  const produtoEstaNosFavoritos = (produtoId: number) =>
    fav.some((f) => f.id === produtoId)

  return (
    <S.Produtos>
      {products?.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto.id)}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
