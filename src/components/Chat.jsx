import React from 'react'

import { MdOutlineCancel } from 'react-icons/md'

import Button from './Button'

import { useStateContext } from '../contexts/ContextProvider'

import { chatData } from '../data/dummy'

const ChatItem = ({item}) => {
  <div>
    <img src={item.image} alt="" />
    <div>
      <h2>{item.message}</h2>
      <p>{item.desc}</p>
      <p>{item.time}</p>
    </div>
  </div>
}

const Chat = () => {
  const { currentColor, setIsClicked } = useStateContext()

  return (
    <div className='z-10 rounded-lg p-10 w-max absolute top-16 right-48 dark:text-gray-200 bg-white dark:[#484B52] dark:bg-secondary-dark-bg'>
      <div className='flex justify-between pb-5'>
        <p className='font-bold text-xl dark:text-gray-500'>Messages</p>
        <button
            type='button'
            onClick={() => setIsClicked({cart: false})}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className="text-2xl hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
      </div>
      {chatData.map((item, index) => (
        <div key={index} className="flex p-2 items-center justify-center border-b border-solid divide-gray-300">
          <img src={item.image} alt={item.image} className="rounded-full h-24 p-5" />
          <div className='flex flex-col justify-between content-between h-20'>
            <h2 className='font-bold'>{item.message}</h2>
            <div className='text-gray-600'>
              <p className='text-sm'>{item.desc}</p>
              <p className='text-xs'>{item.time}</p>
            </div>
          </div>
        </div>
      ))}
      <Button
        color="white"
        bgColor={currentColor}
        text="Place Order"
        borderRadius="10px"
        extraStyle='w-full mt-5'
        onClick={() => setIsClicked({chat: false})}
      />
    </div>
  )
}

export default Chat