import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { cartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import { Button } from './'

const CartItem = ({imageSource, name, category, price, quantity}) => {
  return (
    <div className='flex p-7 border-b-1 border-color'>
      <img src={imageSource} className='rounded-lg w-24 h-80' />
      <div className='ml-5 flex flex-col justify-between'>
        <div>
          <p className='font-bold'>{name}</p>
          <p className='text-gray-400 text-sm font-bold'>{category}</p>
        </div>
        <div className='flex space-x-10'>
          <span className='font-bold'>{price}</span>
          <span className='flex space-x-4 text-green-300 font-bold text-xl'>
            <span className='text-red-300'>-</span><span>{quantity}</span><span>+</span>
          </span>
        </div>
      </div>
    </div>
  )
}

const Cart = () => {
  const { setIsClicked, currentColor } = useStateContext()

  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] dark:bg-secondary-dark-bg w-400'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-xl'>Shopping Cart</p>
          <button
            type='button'
            onClick={() => setIsClicked({cart: false})}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className='pl-8'>
          {cartData.map((item, index) => (
            <CartItem
              key={index}
              imageSource={item.image}
              name={item.name}
              category={item.category}
              quantity={index}
              price={item.price}
            />
          ))}
        </div>
        <div className='p-8'>
          <div className='flex justify-between pb-4'><span className='text-gray-400'>Sub Total</span><span className='font-bold'>$890</span></div>
          <div className='flex justify-between'><span className='text-gray-400'>Total</span><span className='font-bold'>$890</span></div>
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            extraStyle='w-full mt-5'
            onClick={() => setIsClicked({cart: false})}
          />
        </div>
      </div>
    </div>
  )
}

export default Cart