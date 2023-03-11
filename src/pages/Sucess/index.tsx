import { ClientsDataContainer, SucessContainer } from './styles'
import motobike from '../../assets/motobike.svg'
import { CurrencyDollarSimple, MapPinLine, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CyclesContexts'

export function Sucess() {

  const { buyerAddress } = useContext(CartContext)

  return (
    <SucessContainer>
      <strong>Uhu! Pedido confirmado</strong>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      {buyerAddress.map((item) => (
        <section key={item.id}>
          <div>
            <aside>
              <span>
                <MapPinLine size={16} />
              </span>
              <div>
                <p>
                  Entrega em <strong>{item.street}, {item.number}</strong>
                </p>
                <p>{item.district} - {item.city}, {item.state}</p>
              </div>
            </aside>

            <ClientsDataContainer>
              <main>
                <span>
                  <Timer size={16} />
                </span>
                <div>
                  <p>Previsao de entrega</p>
                  <strong>20 min - 30 min</strong>
                </div>
              </main>
              <footer>
                <span>
                  <CurrencyDollarSimple size={16} />
                </span>
                <div>
                  <p>Pagamento na entrega</p>
                  <strong>{item.pay}</strong>
                </div>
              </footer>
            </ClientsDataContainer>
          </div>

          <img src={motobike} alt="" />
        </section>

      ))
      }
    </SucessContainer>
  )
}
