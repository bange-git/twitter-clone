import React, {SVGProps} from 'react';

interface Props {
Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
title: string
}

const SidebarRow = ({title, Icon} : Props) => {
  return (
    <div className='group flex max-w-fit cursor-pointer items-center
    space-x-2 rounded-full px-4 py-3 transition-all duration-200
    hover:bg-gray-100'>
      <Icon  className='h-6 w-6'/>
      <p className=' hidden text-base font-light lg:text-xl md:inline-flex group-hover:text-twitter'>{ title }</p>
      
    </div>
  )
}

export default SidebarRow
