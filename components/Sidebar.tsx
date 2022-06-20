import React from 'react';
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon
} from '@heroicons/react/outline';
import SidebarRow from './SidebarRow';

const Sidebar = () => {
  return (
    <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
       <img src='./images/twitter_logo.png'  className='h-10 w-10' alt=''/>
       <SidebarRow title='Home' Icon={HomeIcon} />
       <SidebarRow title='Explore' Icon={HashtagIcon} />
       <SidebarRow title='Notifications' Icon={BellIcon} />
       <SidebarRow title='Messages' Icon={MailIcon} />
       <SidebarRow title='Bookmarks' Icon={BookmarkIcon} />
       <SidebarRow title='Lists' Icon={CollectionIcon} />
       <SidebarRow title='Sign In' Icon={UserIcon} />
       <SidebarRow title='More' Icon={DotsCircleHorizontalIcon} />
       

    </div>
  )
}

export default Sidebar