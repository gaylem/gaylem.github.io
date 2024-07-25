import React from 'react'
import Title from './Title'

function Publications() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-10 pt-8">
      <div className="w-full md:w-7/12">
        <Title>Publications</Title>
        <ul className="list-disc pl-4">
          <li className="pb-2 pt-2">
            <a
              href="https://medium.com/@gayle.swe/my-heroku-pipeline-part-1-node-js-webpack-and-cors-c19da8df8823"
              className="text-blue-500 underline"
            >
              My Heroku Pipeline, Part 1: Node.js, Webpack, and CORS
            </a>{' '}
            - Medium article published February 6, 2024
          </li>
          <li className="pb-2 pt-2">
            <a
              href="https://medium.com/@gayle.swe/my-heroku-pipeline-part-2-mongodb-atlas-serverless-quotaguard-static-b3fbf75f6acf"
              className="text-blue-500 underline"
            >
              My Heroku Pipeline, Part 2: MongoDB Atlas (Serverless) &
              QuotaGuard Static
            </a>{' '}
            - Medium article published February 13, 2024
          </li>
          <li className="pb-2 pt-2">
            <a
              href="https://medium.com/@gayle.swe/dockerizing-python-gridsome-app-for-electrify-chicago-508ab91e568f"
              className="text-blue-500 underline"
            >
              Dockerizing Python/Gridsome App for Electrify Chicago
            </a>{' '}
            - Medium article published April 12, 2024
          </li>
          <li className="pb-2 pt-2">
            <a
              href="https://medium.com/@gayle.swe/github-actions-automate-issue-creation-for-codeql-alerts-for-hack-for-la-c0616e557eca"
              className="text-blue-500 underline"
            >
              GitHub Actions: Automate Issue Creation for CodeQL Alerts for Hack
              for LA
            </a>{' '}
            - Medium article published May 6, 2024
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Publications
