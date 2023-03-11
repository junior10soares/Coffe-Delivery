import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react';
import { CartContext } from '../../contexts/CyclesContexts';
import { ButtonInputContainer, ListCoffeContainer } from './styles'

export function ListCoffe() {

  const { items, setCart, cart, setItems } = useContext(CartContext)

  function handleCart(id: number, name: string, img: string, qnt: number, price: number) {

    resetQuantity(id)

    const cartItem = {
      id: id,
      name: name,
      img: img,
      qnt: qnt,
      price: price
    }
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
      existingItem.qnt += cartItem.qnt
      setCart([...cart]);

    } else { // se n tiver 
      const cartItem = { id, name, img, qnt, price };
      setCart([...cart, cartItem]);
    }
  }
  function resetQuantity(id: number) {
    const resetAmount = (items.map(item => {
      if (item.id === id) {
        qnt: item.qnt = 0
      }
    }));
  }
  function ClickLess(id: number) {
    const less = [...items]
    if (less[id].qnt > 0) {
      less[id].qnt -= 1
    }
    setItems(less)
  }

  function ClickMore(id: number) {
    const more = [...items]
    more[id].qnt += 1
    setItems(more)
  }

  return (
    <ListCoffeContainer>
      <strong>Nossos cafés</strong>
      <ul>
        {items.map((item, index) => (
          <section key={index}>
            <li key={item.id}>
              <img src={item.img} />
              <div>
                <h3>{item.sub}</h3>
                {item.subone ? <h3>{item.subone}</h3> : <div style={{ display: 'none' }} />}
                {item.subtwo ? <h3>{item.subtwo}</h3> : <div style={{ display: 'none' }} />}
              </div>
              <h1>{item.name}</h1>
              <h2>{item.description}</h2>
              <footer>
                <span>R${item.price}</span>
                <ButtonInputContainer>
                  <button onClick={() => ClickLess(item.id)}>-</button>
                  <p>{item.qnt}</p>
                  <button onClick={() => ClickMore(item.id)}>+</button>
                </ButtonInputContainer>
                <button
                  onClick={() => handleCart(item.id, item.name, item.img, item.qnt, item.price)}
                  type='submit'
                  disabled={item.qnt < 1}
                  name="cart">
                  <ShoppingCart size={22} />
                </button>
              </footer>
            </li>
          </section>
        ))
        }
      </ul>
    </ListCoffeContainer >
  )
}
