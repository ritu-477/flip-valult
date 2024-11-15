import React from 'react'
import connectWallets from '../../assets/images/webp/connect-wallets.webp'
import connectEllipse from '../../assets/images/webp/connect-wallets-ellipse.webp'

const ConnectWallets = () => {
  return (
    <div className='lg:pt-16 sm:pt-12 pt-6 relative' id='connect'>
      <img className='left-0 lg:block hidden absolute -z-10 max-w-[600px] pointer-events-none w-full' src={connectEllipse} alt="connect-ellipse" />
          <div className='container'>
               <img src={connectWallets} className='w-full pointer-events-none' alt="connect-wallet" />
          </div>
    </div>
  )
}

export default ConnectWallets