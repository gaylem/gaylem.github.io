import React from 'react';
import Title from './Title';

function Presentations() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center my-10 pt-8'>
      <div className='w-full md:w-7/12'>
        <Title>Presentations</Title>
        <div className='py-5 text-center' style={{ position: 'relative', paddingBottom: '56.25%' }}>
          <iframe src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7123385886758633473?compact=1' width='100%' height='100%' style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} frameBorder='0' allowFullScreen='' title='Embedded post'></iframe>
        </div>
      </div>
    </div>
  );
}

export default Presentations;
