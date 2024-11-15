import React from 'react'
import transactionsImg from '../../assets/images/webp/transactions-work.webp'
import PrimaryHeading from '../../common/Heading'
import Heading from '../../common/Heading'

const TransactionsWork = () => {
    return (
        <div className='lg:py-20 md:py-14 sm:py-10 py-6'>
            <div className='container'>
                <div className='lg:flex-row flex flex-col justify-center lg:justify-between'>
                    <div className='lg:w-1/2 flex flex-col w-full justify-center'>
                        <Heading className='text-white lg:text-start text-center' text={"How transactions work"} />
                        <p className='text-base font-normal lg:text-start text-center w-full lg:max-w-[495px] text-white opacity-80 pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id metus ut ante gravida accumsan. Aliquam erat volutpat. Quisque vehicula arcu ut ante convallis pretium. Aliquam in orci purus. Sed at porttitor tellus. Nunc tristique, est placerat consectetur commodo, leo tellus sollicitudin nulla, quis blandit turpis leo sed neque. Nullam tristique sed nunc vel porttitor.</p>
                    </div>
                    <div className='lg:w-1/2 w-full max-lg:mt-6 flex justify-center'>
                        <img className='w-full pointer-events-none max-w-[558px]' src={transactionsImg} alt="transactions-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionsWork