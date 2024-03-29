import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Widget(){
  return( 
   <Popover className='fixed bottom-4 right-4 md:bottom-8 md:right-10 group flex flex-col items-end'>
      
      <Popover.Panel><WidgetForm/></Popover.Panel>  
     
     <Popover.Button className='bg-red-800  rounded-full px-3 h-12 flex items-center'>
      
      <ChatTeardropDots className='w-6 h-6 text-white'/>

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs text-white transition-all duration-500 ease-linear'>
          <span pl-2></span>
          Feedback
   
        </span>
   
     </Popover.Button>
   
   </Popover>
  )
}