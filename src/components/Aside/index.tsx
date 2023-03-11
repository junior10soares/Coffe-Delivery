import {
  AsideContainer,
  BoxIcon,
  CartIcon,
  ClockIcon,
  CoffeIcon,
} from './styles'
import imgCoffe from '../../assets/img-coffe.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Aside() {
  return (
    <AsideContainer>
      <aside>
        <strong>
          <p>Encontre o café perfeito</p>
          <p>para qualquer hora do dia</p>
        </strong>

        <p>Com o Coffee Delivery você recebe seu café onde estiver, a</p>
        <p> qualquer hora</p>

        <div>
          <CartIcon>
            <ShoppingCart size={16} />
          </CartIcon>
          Compra simples e segura
          <BoxIcon>
            <Package size={16} />
          </BoxIcon>
          Embalagem mantém o café intacto
        </div>
        <div>
          <ClockIcon>
            <Timer size={16} />
          </ClockIcon>
          Entrega rápida e rastreada
          <CoffeIcon>
            <Coffee size={16} />
          </CoffeIcon>
          O café chega fresquinho até você
        </div>
      </aside>
      <img src={imgCoffe} alt="imagem de copo de café" />
    </AsideContainer>
  )
}
