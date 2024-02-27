import React from 'react'
import ecommerce from '../assets/portfolio/ecommerce.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import applicationP from "../assets/portfolio/api7.jpg"

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: ecommerce,
            link: 'https://ecommerce-flame-seven.vercel.app/'
                 
        },
        {
            id: 2,
            src: applicationP,
            link: "https://documenter.getpostman.com/view/30558979/2sA2rCU1kq"
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: reactSmooth
        },
        {
            id: 5,
            src: installNode
        },
        {
            id: 6,
            src: reactWeather
        }
    ]



    return (

        <div name="portfolio" className='bg-gradient-to-b from-black to bg-gray-800 w-full text-white md:h-screen'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>



                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {
                        portfolios.map(({ id, src, link }) => (
                            <div  key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="rounded-md duration-200 hover:scale-105" />

                                <div className='flex items-center justify-center'>
                                    {link &&
                                        <>
                                            <a className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'href={link}>Demo</a>
                                            <a className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'href={link}>Code</a>
                                        </>
                                    }
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>-
        </div>
    )
}

export default Portfolio