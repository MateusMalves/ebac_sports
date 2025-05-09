import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)
  const fav = useSelector((state: RootState) => state.favorito.itens)

  const valorTotal = itens.reduce((acc: number, item: { preco: number }) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{fav.length} favoritos</span>
        <img src={cesta} alt="Carrinho" />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
