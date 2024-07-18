import React from 'react'
import BlogCard from './BlogCardMain'
import { blogCard } from "../assets";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Button } from '@mui/material';
import { GoDotFill } from "react-icons/go";
import { BiLogoTelegram } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";


const BlogContent = () => {
    return (
        <div className='main-market'>

            <div className='market'>
                <div className='flex  items-center gap-6 my-5'>
                    <FaArrowLeftLong style={{ color: 'green' }} />
                    <p className='text-white text-2xl font-semibold'>Article Name Placeholder</p>

                </div>


                <div className=' flex flex-col'>

                    <div className='flex'>

                        <img src={blogCard} alt="" className="flex-1" style={{ width: '1100px', height: '600px', borderRadius: '20px' }} />

                    </div>

                    <div className='text-gray-500 mt-5 gap-10 text-justify'>
                        <p>
                            In a recent post on social media platform X, prominent economist, financial analyst, and investor Peter Schiff weighed in on former President Donald Trump’s stance on inflation and the oil industry. Schiff’s remarks come as Trump and the Republican Party have outlined a potentially extreme agenda for the environment, with a heavy focus on oil and gas drilling.

                            In his post, Schiff pointed out that Trump seems to believe that the root cause of inflation lies in insufficient oil drilling. Trump’s approach appears to center on the notion that boosting oil production will alleviate inflationary pressures. This perspective is reflected in Trump’s slogan, “drill, baby, drill,” which he has emphasized during recent speeches and rallies.

                            However, Schiff raises a crucial concern. He highlights that while Trump advocates for increased oil drilling as a solution to inflation, the former president failed to address government spending during his first term adequately. Schiff’s critique underscores the importance of fiscal responsibility to control inflation effectively.                    </p>

                        <p className='mt-5'>                            In his post, Schiff pointed out that Trump seems to believe that the root cause of inflation lies in insufficient oil drilling. Trump’s approach appears to center on the notion that boosting oil production will alleviate inflationary pressures. This perspective is reflected in Trump’s slogan, “drill, baby, drill,” which he has emphasized during recent speeches and rallies.
.</p>
                    </div>

                    <div className='flex gap-5 mt-5'>

                        <img src={blogCard} alt="" className="flex-1" />
                        <img src={blogCard} alt="" className="flex-1" />


                    </div>

                    <div className='text-gray-500 mt-5 text-justify'>
                        <p>
                            In a recent post on social media platform X, prominent economist, financial analyst, and investor Peter Schiff weighed in on former President Donald Trump’s stance on inflation and the oil industry. Schiff’s remarks come as Trump and the Republican Party have outlined a potentially extreme agenda for the environment, with a heavy focus on oil and gas drilling.

                            In his post, Schiff pointed out that Trump seems to believe that the root cause of inflation lies in insufficient oil drilling. Trump’s approach appears to center on the notion that boosting oil production will alleviate inflationary pressures. This perspective is reflected in Trump’s slogan, “drill, baby, drill,” which he has emphasized during recent speeches and rallies.

                            However, Schiff raises a crucial concern. He highlights that while Trump advocates for increased oil drilling as a solution to inflation, the former president failed to address government spending during his first term adequately. Schiff’s critique underscores the importance of fiscal responsibility to control inflation effectively.                    </p>

                    </div>

                </div>

                <div className='flex justify-center rounded-3xl my-6'>
                    <Button variant="outlined" style={{ color: 'green', borderRadius: '10px',height:'2rem', border: '1px solid green' }} startIcon={<GoDotFill style={{ color: 'green' }} />}>
                        Show Article
                    </Button>
                </div>

                <div style={{ color: 'green' }} className='flex justify-center gap-8'>
                    <BiLogoTelegram className='w-10 h-10' />
                    <FaFacebookF className='w-10 h-10' />
                    <FaInstagram className='w-10 h-10' />
                    <FaWhatsapp className='w-10 h-10' />
                    <LuTwitter className='w-10 h-10' />
                </div>

            </div>


            <div className='test-m flex flex-row flex-wrap' style={{ width: '100%', marginTop: '1rem' }}>
                <BlogCard />
                <BlogCard />

            </div>
        </div>
    )
}

export default BlogContent