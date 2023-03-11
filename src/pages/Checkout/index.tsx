import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import {
  AdressContainer,
  CardCoffeContainer,
  CardMoneyContainer,
  CheckoutContainer,
  DivContainer,
  FooterContainer,
  PaymentContainer,
  TextContainer,
  TextTotalContainer,
} from './styles'
import { NavLink } from 'react-router-dom'
import { ButtonInputContainer } from '../../components/ListCoffe/styles'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CyclesContexts'

export function Checkout() {

  const { cart, setCart, buyerAddress, setBuyerAddress } = useContext(CartContext)

  const total = cart.reduce((acc, item) => acc + item.price * item.qnt, 0);
  const delivery = 3.5;
  const totalPrice = total + delivery;

  const [newStreet, setNewStreet] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newDistrict, setNewDistrict] = useState('')
  const [newCity, setNewCity] = useState('')
  const [newState, setNewState] = useState('')
  const [pay, setPay] = useState('')

  const isFormValid = newStreet.trim() !== '' && newNumber.trim() !== '' && newDistrict.trim() !== '' && newCity.trim() !== '' && newState.trim() !== ''

  function ClickLess(id: number) {
    const less = [...cart]
    const itemId = cart.find(item => item.id === id)

    if (id === itemId?.id && itemId.qnt > 1) {
      qnt: itemId.qnt -= 1
      setCart(less)
    } else {
      handleDelete(id)
    }
  }

  function handleDelete(id: number) {
    if (cart.length > 0) {
      const removeItemCart = cart.filter(item =>
        item.id !== id
      )
      setCart(removeItemCart)
    }
  }

  function ClickMore(id: number) {
    const more = [...cart]
    const itemId = cart.find(item => item.id === id)

    if (id === itemId?.id) {
      qnt: itemId.qnt += 1
      setCart(more)
    }
  }

  function handleFinish(cart: number) {
    cart > 0 ? setCart([]) : cart

    setBuyerAddress([...buyerAddress, {
      id: 0,
      street: newStreet,
      number: newNumber,
      district: newDistrict,
      city: newCity,
      state: newState,
      pay: pay
    }])
    setNewStreet('')
    setNewNumber('')
    setNewDistrict('')
    setNewCity('')
    setNewState('')
    setPay('')
  }

  return (
    <DivContainer>

      <CheckoutContainer>
        <h1>Complete seu pedido</h1>
        <form action="">
          <aside>
            <header>
              <MapPinLine color="#C47F17" size={22} />
              <div>
                <h2>Endereço de entrega</h2>
                <h3>Informe o endereço onde deseja receber o seu pedido</h3>
              </div>
            </header>
            <input type="number" placeholder="CEP" />
            <input
              type="text"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewStreet(event?.target.value)}
              value={newStreet}
              required
              maxLength={50}
              placeholder="Rua"
            />
            <AdressContainer>
              <input
                type="number"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewNumber(event?.target.value)}
                value={newNumber}
                required
                placeholder="Numero"
              />
              <input type="text" maxLength={20} placeholder="Complemento Opcional" />
            </AdressContainer>
            <FooterContainer>
              <input
                type="text"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewDistrict(event?.target.value)}
                value={newDistrict}
                required
                maxLength={15}
                placeholder="Bairro"
              />
              <input
                type="text"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewCity(event?.target.value)}
                maxLength={25}
                value={newCity}
                required
                placeholder="Cidade"
              />
              <input
                type="text"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewState(event?.target.value)}
                value={newState}
                maxLength={2}
                required
                placeholder="UF"
              />
            </FooterContainer>
          </aside>

          <PaymentContainer>
            <div>
              <CurrencyDollarSimple color="purple" size={32} />
              <TextContainer>
                <p> Pagamento</p>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </TextContainer>
            </div>
            <CardMoneyContainer>
              <button
                disabled={!isFormValid}
                onClick={(e) => {
                  e.preventDefault();
                  setPay('Cartão de Crédito');
                }}
              >
                <CreditCard color="#8047F8" size={16} />
                CARTAO DE CREDITO
              </button>
              <button
                disabled={!isFormValid}
                onClick={(e) => {
                  e.preventDefault();
                  setPay('Cartão de Débito');
                }}
              >
                <Bank color="#8047F8" size={16} />
                CARTAO DE DEBITO
              </button>
              <button disabled={!isFormValid}
                onClick={(e) => {
                  e.preventDefault();
                  setPay('Dinheiro');
                }}
              >
                <Money color="#8047F8" size={16} />
                DINHEIRO
              </button>
            </CardMoneyContainer>
          </PaymentContainer>
        </form>
      </CheckoutContainer>

      <div>
        <h1>Café selecionados</h1>
        <CardCoffeContainer>

          {cart.map((item, index) => (
            <section key={index}>
              <div key={item.id}>
                <div>
                  <img src={item.img} />
                </div>
                <aside>
                  <p>{item.name}</p>
                  <main>
                    <ButtonInputContainer>
                      <button onClick={() => ClickLess(item.id)}>-</button>
                      <p>{item.qnt}</p>
                      <button onClick={() => ClickMore(item.id)}>+</button>
                    </ButtonInputContainer>
                    <button onClick={() => handleDelete(item.id)} name="trash">
                      <Trash color="#8047F8" size={16} /> REMOVER
                    </button>
                  </main>
                </aside>
                <strong>R${item.price * item.qnt}</strong>
              </div>
            </section>
          ))
          }
          <TextTotalContainer>
            <div>
              <p>Total de itens</p> <span>{total.toFixed(2)}</span>
            </div>
            <div>
              <p>Entrega</p> <span>R${delivery.toFixed(2)}</span>
            </div>
            <div>
              <strong>Total</strong> <strong>R${totalPrice.toFixed(2)}</strong>
            </div>
            <nav>
              <NavLink to="/sucess" title="Sucess">
                <button
                  disabled={!isFormValid || pay.length === 0}
                  onClick={() => handleFinish(cart.length)}>
                  CONFIRMAR PEDIDO
                </button>
              </NavLink>
            </nav>
          </TextTotalContainer>
        </CardCoffeContainer>
      </div>
    </DivContainer >
  )
}
