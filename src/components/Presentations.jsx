import React from 'react';
import Title from './Title';

function Presentations() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center my-10 pt-8'>
      <div className='w-full md:w-7/12'>
        <Title>Presentations</Title>
        <p className='pb-2 pt-2'>"Apache Kafka Explained" | Tech Talk sponsored by Remake Labs - October 2023</p>
        <div className='py-5 text-center' style={{ position: 'relative', paddingBottom: '56.25%' }}>
          <iframe src='/portfolio/assets/trimmed-tech-talk.mp4?autoplay=0' width='100%' height='100%' style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} frameBorder='0' allowFullScreen='' title='Embedded post'></iframe>
        </div>ß
      </div>
    </div>
  );
}

export default Presentations;
