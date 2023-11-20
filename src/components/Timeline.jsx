import React from 'react'
import timeline from '../../data/timeline'
import TimelineItem from './TimelineItem'
import Title from './Title'

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>My Story</Title>
        {timeline.map((item) => (
          <TimelineItem
            year={item.year}
            title={item.title}
            details={item.details}
          />
        ))}
      </div>
    </div>
  )
}

export default Timeline
