import React from 'react'
import connectWallets from '../../assets/images/webp/connect-wallets.webp'

const ConnectWallets = () => {
  return (
    <div className='lg:pt-16 sm:pt-12 pt-6'>
          <div className='container'>
               <img src={connectWallets} className='w-full' alt="connect-wallet" />
          </div>
    </div>
  )
}

export default ConnectWallets