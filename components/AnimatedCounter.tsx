'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: {amount: number}) => {
  return (
    <div>
        {/*using counting animation to show the money as its counting*/}
        <CountUp end={amount}
            duration={3}
            decimals={2}
            decimal=','
            prefix='£'
        />
    </div>
  )
}

export default AnimatedCounter