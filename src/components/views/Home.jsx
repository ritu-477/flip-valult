import React from 'react'
import TransactionsWork from '../home/TransactionsWork'
import Footer from '../../common/Footer'
import Ready from '../home/Ready'
import SupportedWallets from '../home/SupportedWallets'
import Benefits from '../home/Benefits'
import HeroHome from '../home/HeroHome'
import Trade from '../home/Trade'
import HowWorks from '../home/HowWorks'
import KeyFeatures from '../home/KeyFeatures'
import Faq from '../home/Faq'
import Roadmap from '../home/Roadmap'
import Volume from '../home/Volume'
import OurTeam from '../home/OurTeam'

const Home = () => {
    return (
        <div>
            <HeroHome />
            <Trade />
            <KeyFeatures />
            <Roadmap/>
            <HowWorks/>
            <TransactionsWork />
            <Volume/>
            <SupportedWallets />
            <Benefits />
            {/* <OurTeam/> */}
            <Faq/>
            <Ready/>
            <Footer />
        </div>
    )
}

export default Home