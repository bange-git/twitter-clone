import React from 'react';
import {
EmojiHappyIcon,
LocationMarkerIcon,
PhotographIcon,
SearchCircleIcon,
CalendarIcon,
} from '@heroicons/react/outline';

const TweetBox = () => {
  return (
    <div className='flex space-x-2 p-5'>
       <img 
       className='mt-4 h-14 w-14 rounded-full object-cover'
       src='./images/profile.jpeg'
       alt='profile'
       />

       <div className='flex flex-1 items-center pl-2 '>
         <form className='flex flex-1 flex-col'>
          <input type='text' placeholder="what's Happenning"
          className='h-24 w-full text-xl outline-none'
          />
          <div className='flex items-center'>
            <div className='flex flex-1 space-x-2 text-twitter'>
               <PhotographIcon className='h-5 w-5 cursor-pointer 
               transition-transform duration-150 ease-out hover:scale-150' />
               <SearchCircleIcon className='h-5 w-5' />
               <EmojiHappyIcon className='h-5 w-5' />
               <CalendarIcon className='h-5 w-5' />
               <LocationMarkerIcon className='h-5 w-5' />
            </div>
             
             <button className='rounded-full bg-twitter px-5 py-2 font-bold text-white'
                 >Tweet</button>
          </div>
         </form>
       </div>
    </div>
  )
}

export default TweetBox