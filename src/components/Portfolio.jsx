import React from 'react'
import portfolio from '../../data/portfolio'
import PortfolioItem from './PortfolioItem'
import Title from './Title'

function Portfolio() {
  return (
    <div>
      <Title>Portfolio</Title>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {portfolio.map((project) => (
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              description={project.description}
              stack={project.stack}
              key={project.title}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
