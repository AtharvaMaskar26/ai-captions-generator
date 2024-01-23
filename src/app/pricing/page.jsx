import React from 'react'

import PageHeaders from '@/components/PageHeaders'

const PricingPage = () => {
  return (
    <div>
        <PageHeaders
            h1Text='Check out our pricing'
            h2Text='Our pricing is very simple'
        />
        <div className="bg-white text-slate-700 rounded-lg max-w-xs mx-auto text-center p-4">
            <h3 className='font-bold text-2xl'>Free</h3>
            <h4>Free Forever</h4>
        </div>
    </div>
  )
}

export default PricingPage