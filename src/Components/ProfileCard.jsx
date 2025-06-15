import React from 'react'
import elon from "../assets/elon.jpg"

export default function ProfileCard({name ,bio}) {
  return (
    <div className='bg-pink p-6 rounded shadow-md w-64 text-center color-gray'>
      <img
      src='{elon}'
      alt='profile'
      className='w-24 h-24 rounded-full mx-auto mb-4'
      />
      <h2 className='text-xl fonts-semibold'>{name}</h2>
      <p className='text-gray-600'> {bio}</p>
      </div>
  )
}
