import { SearchIcon } from '@heroicons/react/outline';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import React from 'react'

const Widget = () => {
  return (
   <div className='col-span-2 hidden lg:inline mt-2'>
    <div className='mt-2 flex items-center space-x-2 rounded-full
    bg-gray-100 p-3'>
      <SearchIcon className='h-5 w-5 text-gray-400'/>
      <input 
      type='text'
      placeholder='Search Twitter'
      className='flex-1 bg-transparent outline-none'
      />
    </div>

     <TwitterTimelineEmbed
        sourceType="profile"
        // screenName="bange_sabastine"
        // options={{height: 1000}}
         screenName="saurabhnemade"
        options={{height: 400}}
      />
   </div>
  )
}

export default Widget