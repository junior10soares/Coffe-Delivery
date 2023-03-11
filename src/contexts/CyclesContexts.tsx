import { createContext, ReactNode, useState } from 'react'
import coffee from '../assets/coffee.svg'
import americano from '../assets/americano.svg'
import cremoso from '../assets/cremoso.svg'
import capuccino from '../assets/capuccino.svg'
import cubano from '../assets/cubano.svg'
import gelado from '../assets/gelado.svg'
import havaiano from '../assets/havaiano.svg'
import latte from '../assets/latte.svg'
import machiato from '../assets/machiato.svg'
import mocacino from '../assets/mocacino.svg'
import quente from '../assets/quente.svg'
import leite from '../assets/leite.svg'


interface CartContextProviderProps {
  children: ReactNode
}

export interface ItensCoffeProps {
  id: number,
  name: string,
  sub: string,
  subone?: string,
  subtwo?: string,
  qnt: number
  img: string,
  description: string,
  price: number
}

export interface cartProps {
  id: number,
  name: string,
  img: string,
  qnt: number
  price: number
}
interface CartContextProps {
  items: ItensCoffeProps[]
  cart: cartProps[]
  buyerAddress: BuyerAddressProps[]
  setCart: React.Dispatch<React.SetStateAction<cartProps[]>>;
  setItems: (items: ItensCoffeProps[]) => void
  setBuyerAddress: (buyerAddress: BuyerAddressProps[]) => void

}
export interface BuyerAddressProps {
  id: number,
  street: string,
  number: string,
  district: string,
  city: string,
  state: string,
  pay: string
}

const ITEMS = [
  {
    id: 0,
    name: 'Expresso Tracional',
    img: coffee,
    price: 9.99,
    sub: 'TRADICIONAL',
    description: 'O tradicional café feito com água quente e grãos moídos',
    qnt: 0
  },
  {
    id: 1,
    name: 'Expresso Americano',
    img: americano,
    price: 9.99,
    sub: 'TRADICIONAL',
    description: 'Expresso diluído, menos intenso que o tradicional',
    qnt: 0
  },
  {
    id: 2,
    name: 'Expresso Cremoso',
    img: cremoso,
    price: 9.99,
    sub: 'TRADICIONAL',
    description: 'Café expresso tradicional com espuma cremosa',
    qnt: 0
  },
  {
    id: 3,
    name: 'Expresso Gelado',
    img: gelado,
    price: 9.99,
    sub: 'TRADICIONAL',
    subone: 'GELADO',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    qnt: 0
  },
  {
    id: 4,
    name: 'Café com Leite',
    img: leite,
    price: 9.99,
    sub: 'TRADICIONAL',
    subone: 'COM LEITE',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    qnt: 0
  },
  {
    id: 5,
    name: 'Latte',
    img: latte,
    price: 9.99,
    sub: 'TRADICIONAL',
    subone: 'COM LEITE',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    qnt: 0
  },
  {
    id: 6,
    name: 'Capuccino',
    img: capuccino,
    price: 9.99,
    sub: 'TRADICIONAL',
    subone: 'COM LEITE',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    qnt: 0
  },
  {
    id: 7,
    name: 'Macchiato',
    img: machiato,
    price: 9.99,
    sub: 'TRADICIONAL',
    subone: 'COM LEITE',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    qnt: 0
  },
  {
    id: 8,
    name: 'Mocaccino',
    img: mocacino,
    price: 9.99,
    sub: 'TRADICIONAL',
    subone: 'COM LEITE',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    qnt: 0
  },
  {
    id: 9,
    name: 'Chocolate Quente',
    img: quente,
    price: 9.99,
    sub: 'TRADICIONAL',
    subone: 'COM LEITE',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    qnt: 0
  },
  {
    id: 10,
    name: 'Cubano',
    img: cubano,
    price: 9.99,
    sub: 'TRADICIONAL',
    subone: 'ALCOOLICO',
    subtwo: 'GELADO',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    qnt: 0
  },
  {
    id: 11,
    name: 'Havaiano',
    img: havaiano,
    price: 9.99,
    sub: 'ESPECIAL',
    description: 'Bebida adocicada preparada com café e leite de coco',
    qnt: 0
  },

]

export const CartContext = createContext({} as CartContextProps)

export function CardContextProvider({ children }: CartContextProviderProps) {

  const [items, setItems] = useState<ItensCoffeProps[]>(ITEMS);

  const [cart, setCart] = useState<cartProps[]>([]);

  const [buyerAddress, setBuyerAddress] = useState<BuyerAddressProps[]>([])

  return (
    <CartContext.Provider
      value={{
        items,
        cart,
        buyerAddress,
        setBuyerAddress,
        setCart,
        setItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
