import Lesson from '../../assets/images/png/videoLesson.png'
import time from '../../assets/images/icons/time.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const OpenCoursePage = () => {
    useEffect(() => {
        Aos.init({duration:1500});
    }, [])
  return (
   <section className='mt-20'>
          <div data-aos="fade-right-down" className="container flex justify-between items-center ">
              <h1 data-aos="fade-right-down" className="text-4xl font-semibold">
        UI/UX Design Course
        </h1>
              <p data-aos="fade-right-down" className="w-3/6">Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum</p>
    </div>
          <div data-aos="fade-right-down" className='container '>
              <img data-aos="fade-right-down" className='mt-40' src={Lesson} alt="" />
    </div>
          <div data-aos="fade-right-down" className=' mt-24'>
              <div data-aos="fade-right-down" className='container flex flex-wrap gap-y-4 mt-24 '>
                  <div data-aos="fade-right-down" className='bg-white w-3/6 p-3'>
        <h3 data-aos="fade-right-down" className='text-6xl font-semibold text-end '>01</h3>
        <p data-aos="fade-right-down" className='text-2xl font-semibold mt-12'>Introduction to UI/UX Design</p>
        <div data-aos="fade-right-down" className='p-6 mt-12 flex justify-between items-center border rounded'>
        Understanding UI/UX Design Principles <br />Lesson 01
        <p data-aos="fade-right-down" className='flex border p-2'><img src={time} alt="" />45 Minutes</p>
        </div>
        <div data-aos="fade-right-down" className='p-6 mt-12 flex justify-between items-center border rounded'>
        Importance of User-Centered Design <br />Lesson 01
        <p data-aos="fade-right-down" className='flex bg-yellow-100 border-yellow-100 p-2'><img src={time} alt="" />1 Hour</p>
        </div> <div data-aos="fade-right-down" className='p-6 mt-12 flex justify-between items-center border rounded'>
        The Role of UI/UX Design in Product Development <br />Lesson 03
        <p data-aos="fade-right-down" className='flex border p-2'><img src={time} alt="" />45 Minutes</p>
        </div>
    </div>    <div className='bg-white w-3/6 p-3'>
        <h3 className='text-6xl font-semibold text-end '>02</h3>
        <p className='text-2xl font-semibold mt-12'>Introduction to UI/UX Design</p>
        <div className='p-6 mt-12 flex justify-between items-center border rounded'>
        Understanding UI/UX Design Principles <br />Lesson 01
        <p className='flex border p-2'><img src={time} alt="" />45 Minutes</p>
        </div>
        <div data-aos="fade-right-down" className='p-6 mt-12 flex justify-between items-center border rounded'>
        Importance of User-Centered Design <br />Lesson 02
        <p data-aos="fade-right-down" className='flex border-yellow-100 p-2'><img src={time} alt="" />1 Hour</p>
        </div> <div data-aos="fade-right-down" className='p-6 mt-12 flex justify-between items-center border rounded'>
        The Role of UI/UX Design in Product Development <br />Lesson 03
        <p className='flex border p-2'><img src={time} alt="" />45 Minutes</p>
        </div>
    </div>    <div className='bg-white w-3/6 p-3'>
        <h3 className='text-6xl font-semibold text-end '>03</h3>
        <p className='text-2xl font-semibold mt-12'>Introduction to UI/UX Design</p>
        <div data-aos="fade-right-down" className='p-6 mt-12 flex justify-between items-center border rounded'>
        Understanding UI/UX Design Principles <br />Lesson 01
        <p className='flex border p-2'><img src={time} alt="" />45 Minutes</p>
        </div>
        <div data-aos="fade-right-down" className='p-6 mt-12 flex justify-between items-center border rounded'>
        Importance of User-Centered Design <br />Lesson 02
        <p className='flex  border-yellow-100 p-2'><img src={time} alt="" />1 Hour</p>
        </div> <div data-aos="fade-right-down" className='p-6 mt-12 flex justify-between items-center border rounded'>
        The Role of UI/UX Design in Product Development <br />Lesson 03
        <p className='flex border p-2'><img src={time} alt="" />45 Minutes</p>
        </div>
    </div>    <div data-aos="fade-right-down" className='bg-white w-3/6 p-3'>
        <h3 className='text-6xl font-semibold text-end '>04</h3>
        <p className='text-2xl font-semibold mt-12'>Introduction to UI/UX Design</p>
        <div className='p-6 mt-12 flex justify-between items-center border rounded'>
        Understanding UI/UX Design Principles <br />Lesson 01
        <p className='flex border p-2'><img src={time} alt="" />45 Minutes</p>
        </div>
        <div className='p-6 mt-12 flex justify-between items-center border rounded'>
        Importance of User-Centered Design <br />Lesson 02
        <p className='flex  border-yellow-100 p-2'><img src={time} alt="" />1 Hour</p>
        </div> <div className='p-6 mt-12 flex justify-between items-center border rounded'>
        The Role of UI/UX Design in Product Development <br />Lesson 03
        <p className='flex border p-2'><img src={time} alt="" />45 Minutes</p>
        </div>
    </div>    <div data-aos="fade-right-down" className='bg-white w-3/6 p-3'>
        <h3 className='text-6xl font-semibold text-end '>05</h3>
        <p className='text-2xl font-semibold mt-12'>Introduction to UI/UX Design</p>
        <div className='p-6 mt-12 flex justify-between items-center border rounded'>
        Understanding UI/UX Design Principles <br />Lesson 01
        <p className='flex border p-2'><img src={time} alt="" />45 Minutes</p>
        </div>
        <div data-aos="fade-right-down" className='p-6 mt-12 flex justify-between items-center border rounded'>
        Importance of User-Centered Design <br />Lesson 02
        <p className='flex  border-yellow-100 p-2'><img src={time} alt="" />1 Hour</p>
        </div> <div className='p-6 mt-12 flex justify-between items-center border rounded'>
        The Role of UI/UX Design in Product Development <br />Lesson 03
        <p className='flex border p-2'><img src={time} alt="" />45 Minutes</p>
        </div>
    </div>      
    </div>
 </div>
   </section>
  )
}

export default OpenCoursePage