import React from 'react'

import { MdOutlineCancel } from 'react-icons/md'

import Button from './Button'

import { useStateContext } from '../contexts/ContextProvider'

import { userProfileData } from '../data/dummy'

import avatar3 from '../data/avatar3.png'

const UserProfile = () => {
  const { currentColor, setIsClicked } = useStateContext()

  return (
    <div className='z-10 rounded-lg p-10 w-max absolute top-16 right-40 dark:text-gray-200 bg-white dark:[#484B52] dark:bg-secondary-dark-bg'>
      <div className='flex justify-between pb-5'>
        <p className='font-bold text-xl dark:text-gray-500'>User Profile</p>
        <button
          type='button'
          onClick={() => setIsClicked({userProfile: false})}
          style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
          className="text-2xl hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="flex items-center justify-center border-b border-solid divide-gray-300">
          <img src={avatar3} className="rounded-full h-36 p-5" />
          <div className=''>
            <h2 className='font-bold text-xl'>Michael Roberts</h2>
            <div className='text-gray-600'>
              <p className='text-sm'>Administrator</p>
              <p className='font-bold text-sm'>info@shop.com</p>
            </div>
          </div>
        </div>
      {userProfileData.map((item, index) => (
        <div key={index} className="flex p-5 items-center  border-b border-solid divide-gray-300">
          <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg }} className="text-2xl opacity-0.9 rounded-xl p-4 hover:drop-shadow-xl">
            {item.icon}
          </button>
          <div className='ml-5'>
            <h2 className='font-bold'>{item.title}</h2>
            <p className='text-gray-600 text-sm'>{item.desc}</p>
          </div>
        </div>
      ))}
      <Button
        color="white"
        bgColor={currentColor}
        text="Logout"
        borderRadius="10px"
        extraStyle='w-full mt-5'
        onClick={() => setIsClicked({userProfile: false})}
      />
    </div>
  )
}

export default UserProfile