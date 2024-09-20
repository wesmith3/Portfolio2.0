import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

function RecentProjects() {
  return (
    <div className='py-20'>
      <h1 className='heading'>
        A Small Selection of {' '}
        <span className='text-orange-500 font-mono'>PROJECTS</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 lg:gap-10 mt-10'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
            <PinContainer title={link} href={link}>
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <img src='/bg.png' alt='bg-img'/>
                </div>
                <img 
                  src={img}
                  alt={title}
                  className='z-10 absolute bottom-0 rotate-[2.5deg]'
                  />
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              <p className='lg:text-lg lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2}px)`}}>
                      <img src={icon} alt={icon} className='p-2'/>
                    </div>
                  ))}
                </div>

                <div className='flex justify-center items-center'>
                  <p className='flex lg:text-l md:text-xs text-sm text-orange-500'>Check Live Site</p>
                  <FaLocationArrow  className='ms-3' color='#f97316'/>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
