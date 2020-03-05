import React from 'react'
import { Link } from 'gatsby'

import Form from './form'

function FormCard () {
  return (
    <div className='max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8'>
      <div className='shadow-2xl px-6 py-6 bg-gray-800 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 text-center xl:text-left xl:flex xl:items-center'>
        <div className='xl:w-0 xl:flex-1'>
          <h2 className='text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9'>
            Want products news and updates?
          </h2>
          <p className='mt-3 xl:max-w-3xl text-lg leading-6 text-indigo-200'>
            Sign up for our newsletter to stay up to date.
          </p>
        </div>
        <div className='mt-8 sm:w-full sm:max-w-md mx-auto xl:mt-0 xl:ml-8'>
          <Form />
          <p className='mt-3 text-sm leading-5 text-indigo-200'>
            We care about the protection of your data. Read our{` `}
            <Link
              className='text-white font-medium underline'
              key={`Privacy`}
              to={`/privacy`}
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FormCard
