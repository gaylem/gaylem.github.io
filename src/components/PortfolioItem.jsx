import React from 'react';

function PortfolioItem({ title, imgUrl, description, stack, link }) {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer' className='border-2 border-stone-900 dark:border-white rounded-md flex flex-col h-full'>
      <div className='relative h-64 md:h-80'>
        <img src={imgUrl} alt='portfolio' className='w-full h-full object-cover object-top cursor-pointer rounded-none' />
      </div>
      <div className='w-full p-6 flex flex-col justify-between'>
        <div>
          <h3 className='text-xl md:text-xl dark:text-white mb-2 md:mb-3 font-semibold'>{title}</h3>
          <p className='pb-4'>{description}</p>
        </div>
        <div className='flex flex-wrap gap-2 items-center justify-start text-xs md:text-sm dark:text-white '>
          {stack.map((item, index) => (
            <span key={index} className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md'>
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default PortfolioItem;
