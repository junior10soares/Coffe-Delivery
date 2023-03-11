import { HeaderContainer } from './styles'
import logoCoffe from '../../assets/logo-coffe.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CyclesContexts'



export function Header() {

  const { cart, setCart, setBuyerAddress } = useContext(CartContext)

  const cartAmountTotal = cart.reduce((total, item) => total + item.qnt, 0);

  function resetAll() {
    setCart([])
    setBuyerAddress([])
  }

  return (
    <HeaderContainer>

      <nav onClick={resetAll}>
        <NavLink to="" title="Home">
          <img src={logoCoffe} alt="logotipo da marca do café" />
        </NavLink>
      </nav>

      <div>
        <p>
          <MapPin size={22} />
          Porto Alegre, RS
        </p>
        {
          cartAmountTotal > 0 ?
            <span>
              <nav>
                <NavLink to="/checkout" title="Checkout">
                  <ShoppingCart color='#C47F17' size={22} />
                </NavLink>
              </nav>
              <strong>{cartAmountTotal}</strong>
            </span>
            :
            ''
        }
      </div>
    </HeaderContainer>
  )
}
