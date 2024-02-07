import logo from '../assets/images/icons/maquin.svg'
import zapier from '../assets/images/icons/zapier.svg'
import spotify from '../assets/images/icons/spotify.svg'
import zoom from '../assets/images/icons/zoom.svg'
import amazon from '../assets/images/icons/amazon.svg'
import adobe from '../assets/images/icons/adobe.svg'
import notion from '../assets/images/icons/notion.svg'
import netflix from '../assets/images/icons/neflix.svg'
import course from '../assets/images/png/videoLeeson2.png'
import orange from '../assets/images/icons/orange icon.svg'
import home1 from '../assets/images/png/homeImage.png'
import home2 from '../assets/images/png/homeImage2.png'
import home3 from '../assets/images/png/homeImage3.png'
import home4 from '../assets/images/png/homeImage4.png'
import home5 from '../assets/images/png/homeImage5.png'
import home6 from '../assets/images/png/homeImage6.png'
import person from '../assets/images/png/iconimg.png'
import person2 from '../assets/images/png/iconimg2.png'
import person3 from '../assets/images/png/iconimg3.png'
import person4 from '../assets/images/png/iconimg4.png'
import nike from '../assets/images/icons/nike.svg'
import x from '../assets/images/icons/x.svg'
import { Link } from 'react-router-dom'
import AccordionMenu from '../components/Accardion/Accordion'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'




const HomePage = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <main>
      <section>
        <div data-aos="fade-right" className="container">
          <div data-aos="fade-right" className=" bg-white flex justify-center items-center mt-32"><img className='bg-red-100 p-2 rounded' src={logo} alt="" /> <span className="text-orange-400 text-5xl font-semibold mr-5">Unlock</span><h1 className="text-5xl font-semibold">Your Creative Potential</h1></div>
          <h2 data-aos="fade-right" className='text-center text-3xl mt-7'>with Online Design and Development Courses.</h2>
          <p className='text-center'>Learn from Industry Experts and Enhance Your Skills.</p>
          <div data-aos="fade-right" className='flex justify-center items-center gap-3 mt-16'><button className='bg-orange-400 p-3 text-white rounded font-semibold'>Explore Courses</button><button className='border rounded p-3 '>View Pricing</button></div>
        </div>
      </section>
      <section>
        <div data-aos="fade-right" className="container">
          <div data-aos="fade-right" className='flex justify-between bg-white mt-16 p-10'>
            <a href="/"><img src={zapier} alt="" /></a>
            <a href="/"><img src={spotify} alt="" /></a>
            <a href="/"><img src={zoom} alt="" /></a>
            <a href="/"><img src={amazon} alt="" /></a>
            <a href="/"><img src={adobe} alt="" /></a>
            <a href="/"><img src={notion} alt="" /></a>
            <a href="/"><img src={netflix} alt="" /></a>
          </div>
        </div>
      </section>
      <section data-aos="fade-right" >
        <div data-aos="fade-right" className="container">
          <img className='mt-24' src={course} alt="" />
        </div>
      </section>
      <section>
        <div className='container'>
          <h3 className='text-3xl font-semibold mt-36'>Benefits</h3>
          <div data-aos="fade-left" className=' flex items-center justify-between'>
            <p className='w-3/4'> Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            <button className='border  bg-white p-3'>
              View All
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div data-aos="fade-left" className='flex flex-wrap justify-between gap-y-5 mt-20'>
            <div className='bg-white p-14 w-1/3'>
              <p className='text-7xl font-semibold text-end  '>01</p>
              <h4 className='text-2xl font-semibold mt-12'>Flexible Learning Schedule</h4>
              <p className='mt-4'>Fit your coursework around your existing commitments <br /> and obligations.</p>
              <Link to='/coursecard'>
                <img className='mt-16 ml-auto border rounded p-2 ' src={orange} alt="" />
              </Link>
            </div>
            <div data-aos="fade-down" className='bg-white p-14 w-1/3'>
              <p data-aos="fade-right" className='text-7xl font-semibold text-end  '>02</p>
              <h4 data-aos="fade-right" className='text-2xl font-semibold mt-12'>Expert Instruction</h4>
              <p data-aos="fade-right" className='mt-4'>Fit your coursework around your existing commitments <br /> and obligations.</p>
              <img data-aos="fade-right" className='mt-16 ml-auto border rounded p-2 ' src={orange} alt="" />
            </div>
            <div data-aos="fade-right-down" className='bg-white p-14 w-1/3'>
              <p className='text-7xl font-semibold text-end  '>03</p>
              <h4 className='text-2xl font-semibold mt-12'>Flexible Learning Schedule</h4>
              <p className='mt-4'>Fit your coursework around your existing commitments <br /> and obligations.</p>
              <img data-aos="fade-right" className='mt-16 ml-auto border rounded p-2 ' src={orange} alt="" />
            </div>
            <div data-aos="fade-right-down" className='bg-white p-14 w-1/3'>
              <p className='text-7xl font-semibold text-end  '>04</p>
              <h4 className='text-2xl font-semibold mt-12'>Flexible Learning Schedule</h4>
              <p className='mt-4'>Fit your coursework around your existing commitments <br /> and obligations.</p>
              <img data-aos="fade-right" className='mt-16 ml-auto border rounded p-2 ' src={orange} alt="" />
            </div>
            <div data-aos="fade-right-down" className='bg-white p-14 w-1/3'>
              <p className='text-7xl font-semibold text-end  '>05</p>
              <h4 className='text-2xl font-semibold mt-12'>Flexible Learning Schedule</h4>
              <p className='mt-4'>Fit your coursework around your existing commitments <br /> and obligations.</p>
              <img data-aos="fade-right-down" className='mt-16 ml-auto border rounded p-2 ' src={orange} alt="" />
            </div>
            <div data-aos="fade-right-down" className='bg-white p-14 w-1/3'>
              <p className='text-7xl font-semibold text-end  '>06</p>
              <h4 className='text-2xl font-semibold mt-12'>Flexible Learning Schedule</h4>
              <p className='mt-4'>Fit your coursework around your existing commitments <br /> and obligations.</p>
              <img className='mt-16 ml-auto border rounded p-2 ' src={orange} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div data-aos="fade-right-down" className='container'>
          <h3 className='text-3xl font-semibold mt-36'>Our Courses</h3>
          <div className=' flex items-center justify-between'>
            <p className='w-3/4'> Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            <button className='border  bg-white p-3'>
              View All
            </button>
          </div>
          <div data-aos="fade-right-down" className='flex flex-wrap justify-between gap-y-5'>
            <div className='w-2/5 p-12 bg-white'>
              <img src={home1} alt="" />
              <div>
                <div data-aos="fade-right-down" className='flex justify-between items-center mt-7'>
                  <div className='flex gap-2'>
                    <p className='border bg-white p-1 rounded'>4 Weeks</p>
                    <p className='border bg-white p-1 rounded'>Beginner</p>
                  </div>
                  <div>
                    <h5 className='font-semibold'>By John Smith</h5>
                  </div>
                </div>
                <h6 className='font-semibold text-xl mt-7'>
                  Web Design Fundamentals
                </h6>
                <p className='w-auto'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                <Link to='course-open'> <button className='bg-gray-200 mt-7 w-full p-4'>Get it Now</button></Link>
              </div>
            </div>
            <div data-aos="fade-right-down" className='w-2/5 p-12 bg-white'>
              <img src={home2} alt="" />
              <div>
                <div data-aos="fade-right-down" className='flex justify-between items-center mt-7'>
                  <div className='flex gap-2'>
                    <p className='border bg-white p-1 rounded'>4 Weeks</p>
                    <p className='border bg-white p-1 rounded'>Beginner</p>
                  </div>
                  <div>
                    <h5 className='font-semibold'>By John Smith</h5>
                  </div>
                </div>
                <h6 data-aos="fade-left-down" className='font-semibold text-xl mt-7'>
                  Web Design Fundamentals
                </h6>
                <p className='w-auto'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                <Link to='course-open'> <button className='bg-gray-200 mt-7 w-full p-4'>Get it Now</button></Link>

              </div>
            </div>   <div data-aos="fade-right-down" className='w-2/5 p-12 bg-white'>
              <img src={home3} alt="" />
              <div>
                <div className='flex justify-between items-center mt-7'>
                  <div className='flex gap-2'>
                    <p className='border bg-white p-1 rounded'>4 Weeks</p>
                    <p className='border bg-white p-1 rounded'>Beginner</p>
                  </div>
                  <div>
                    <h5 className='font-semibold'>By John Smith</h5>
                  </div>
                </div>
                <h6 className='font-semibold text-xl mt-7'>
                  Web Design Fundamentals
                </h6>
                <p className='w-auto'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                <Link to='course-open'> <button className='bg-gray-200 mt-7 w-full p-4'>Get it Now</button></Link>

              </div>
            </div>   <div className='w-2/5 p-12 bg-white'>
              <img src={home4} alt="" />
              <div>
                <div data-aos="fade-right-down" className='flex justify-between items-center mt-7'>
                  <div className='flex gap-2'>
                    <p className='border bg-white p-1 rounded'>4 Weeks</p>
                    <p className='border bg-white p-1 rounded'>Beginner</p>
                  </div>
                  <div>
                    <h5 className='font-semibold'>By John Smith</h5>
                  </div>
                </div>
                <h6 data-aos="fade-left-down" className='font-semibold text-xl mt-7'>
                  Web Design Fundamentals
                </h6>
                <p className='w-auto'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                <Link to='course-open'> <button className='bg-gray-200 mt-7 w-full p-4'>Get it Now</button></Link>

              </div>
            </div>   <div data-aos="fade-right-down" className='w-2/5 p-12 bg-white'>
              <img src={home5} alt="" />
              <div>
                <div data-aos="fade-right-down" className='flex justify-between items-center mt-7'>
                  <div className='flex gap-2'>
                    <p className='border bg-white p-1 rounded'>4 Weeks</p>
                    <p className='border bg-white p-1 rounded'>Beginner</p>
                  </div>
                  <div>
                    <h5 data-aos="fade-right-down" className='font-semibold'>By John Smith</h5>
                  </div>
                </div>
                <h6 data-aos="fade-right-down" className='font-semibold text-xl mt-7'>
                  Web Design Fundamentals
                </h6>
                <p className='w-auto'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                <Link to='course-open'> <button className='bg-gray-200 mt-7 w-full p-4'>Get it Now</button></Link>

              </div>
            </div>   <div data-aos="fade-right-down" className='w-2/5 p-12 bg-white'>
              <img data-aos="fade-right-down" src={home6} alt="" />
              <div>
                <div data-aos="fade-right-down" className='flex justify-between items-center mt-7'>
                  <div className='flex gap-2'>
                    <p className='border bg-white p-1 rounded'>4 Weeks</p>
                    <p className='border bg-white p-1 rounded'>Beginner</p>
                  </div>
                  <div>
                    <h5 data-aos="fade-right-down" className='font-semibold'>By John Smith</h5>
                  </div>
                </div>
                <h6 className='font-semibold text-xl mt-7'>
                  Web Design Fundamentals
                </h6>
                <p className='w-auto'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                <Link to='course-open'> <button className='bg-gray-200 mt-7 w-full p-4'>Get it Now</button></Link>

              </div>
            </div>

          </div>
        </div>
      </section>
      <section data-aos="fade-right-down" >
        <div data-aos="fade-right-down" className="container">
          <h3 className='text-3xl font-semibold mt-36'>Our Testimonials</h3>
          <div data-aos="fade-right-down" className=' flex items-center justify-between'>
            <p className='w-3/4'> Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            <button className='border  bg-white p-3'>
              View All
            </button>
          </div>
          <div data-aos="fade-right-down" className='flex flex-wrap gap-y-2 mt-20'>
            <div data-aos="fade-right-down" className='w-2/4 bg-white p-12'>
              <p>
                The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!
              </p>
              <div className='flex justify-between items-center mt-20'>
                <div data-aos="fade-right-down" className='flex items-center gap-4'>
                  <img src={person} alt="" />
                  <p className='font-semibold'>Sarah L</p>
                </div>
                <div className='bg-gray-200 p-4 rounded'>
                  Read Full Story
                </div>

              </div>
            </div>       <
              div className='w-2/4 bg-white p-12'>
              <p>
                The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!
              </p>
              <div className='flex justify-between items-center mt-20'>
                <div className='flex items-center gap-4'>
                  <img src={person2} alt="" />
                  <p className='font-semibold'>Sarah L</p>
                </div>
                <div className='bg-gray-200 p-4 rounded'>
                  Read Full Story
                </div>

              </div>
            </div>       <div className='w-2/4 bg-white p-12'>
              <p>
                The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!
              </p>
              <div className='flex justify-between items-center mt-20'>
                <div className='flex items-center gap-4'>
                  <img src={person3} alt="" />
                  <p className='font-semibold'>Sarah L</p>
                </div>
                <div className='bg-gray-200 p-4 rounded'>
                  Read Full Story
                </div>

              </div>
            </div>
            <div data-aos="flip-right" className='w-2/4 bg-white p-12'>
              <p>
                The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!
              </p>
              <div data-aos="flip-right" className='flex justify-between items-center mt-20'>
                <div data-aos="flip-right" className='flex items-center gap-4'>
                  <img data-aos="flip-right" src={person4} alt="" />
                  <p data-aos="flip-right" className='font-semibold'>Sarah L</p>
                </div>
                <div data-aos="flip-right" className='bg-gray-200 p-4 rounded'>
                  Read Full Story
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="flip-right" >
        <div data-aos="zoom-in" className='container'>
          <h3 data-aos="zoom-in" className='text-3xl font-semibold mt-36'>Our Testimonials</h3>
          <div data-aos="zoom-in" className=' flex items-center justify-between'>
            <p data-aos="zoom-in" className='w-3/4'> Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            <div data-aos="zoom-in" className='bg-white p-2'>
              <button data-aos="zoom-in" className='text-white rounded  bg-orange-400 p-3'>
                Monthly
              </button>
              <button data-aos="zoom-in" className='p-3'>
                Yearly
              </button>
            </div>
          </div>
          <div data-aos="zoom-in" className='flex justify-between mt-20' >
            <div className='border w-2/4 p-12'>
              <button data-aos="zoom-in" className='bg-red-100 w-full p-5'>
                Free Plan
              </button>

              <div >
                <div data-aos="zoom-in" className='flex justify-center items-end mt-12 '><h5 className='text-7xl font-semibold'>$0</h5><span>/month</span></div>
                <p data-aos="flip-left-down" className='font-semibold text-center mt-20'>Available Features</p>
                <div data-aos="zoom-in-down" className='flex border item-center gap-1 p-4 justify-start mt-5'><img className='bg-red-50 p-1' src={nike} alt="" /><p>Access to selected free courses.</p></div>
                <div data-aos="zoom-in-down" className='flex border item-center gap-1 p-4 justify-start mt-5'><img className='bg-red-50 p-1' src={nike} alt="" /><p>Limited course materials and resources.</p></div>
                <div data-aos="zoom-in-down" className='flex border item-center gap-1 p-4 justify-start mt-5'><img className='bg-red-50 p-1' src={nike} alt="" /><p>Basic community support.</p></div>
                <div data-aos="zoom-in-down" className='flex border item-center gap-1 p-4 justify-start mt-5'><img className='bg-red-50 p-1' src={nike} alt="" /><p>No certification upon completion.</p></div>
                <div data-aos="zoom-in-down" className='flex border item-center gap-1 p-4 justify-start mt-5'><img className='bg-red-50 p-1' src={nike} alt="" /><p>Ad-supported platform.</p></div>
                <div data-aos="zoom-in-down" className='flex border item-center gap-1 p-4 justify-start mt-5'><img className='border rounded p-1' src={x} alt="" /><p>Access to exclusive Pro Plan community forums.</p></div>
                <div data-aos="zoom-in-down" className='flex border item-center gap-1 p-4 justify-start mt-5'><img className='border rounded p-1' src={x} alt="" /><p>Early access to new courses and updates.</p></div>
              </div>

            </div>
            <div className='border w-2/4 p-12'>
              <button className='bg-red-100 w-full p-5'>
                Pro Plan
              </button>

              <div>
                <div className='flex justify-center items-end mt-12 '><h5 className='text-7xl font-semibold'>$79</h5><span>/month</span></div>
                <p className='font-semibold text-center mt-20'>Available Features</p>
                <div data-aos="zoom-in-down" className='flex border item-center gap-1 p-4 justify-start mt-5'><img className='bg-red-50 p-1' src={nike} alt="" /><p>Unlimited access to all courses.</p></div>
                <div data-aos="zoom-in-down" className='flex border item-center gap-1 p-4 justify-start mt-5'><img className='bg-red-50 p-1' src={nike} alt="" /><p>Unlimited course materials and resources.</p></div>
                <div data-aos="zoom-in-down" className='flex border item-center gap-1 p-4 justify-start mt-5'><img className='bg-red-50 p-1' src={nike} alt="" /><p>Priority support from instructors.</p></div>
                <div data-aos="zoom-in-down" className='flex border item-center gap-1 p-4 justify-start mt-5'><img className='bg-red-50 p-1' src={nike} alt="" /><p>Course completion certificates.</p></div>
                <div data-aos="zoom-in-down" className='flex border item-center gap-1 p-4 justify-start mt-5'><img className='bg-red-50 p-1' src={nike} alt="" /><p>Ad-free experience.</p></div>
                <div data-aos="zoom-in-down" className='flex border item-center gap-1 p-4 justify-start mt-5'><img className='bg-red-50 border rounded p-1' src={nike} alt="" /><p>Access to exclusive Pro Plan community forums..</p></div>
                <div data-aos="zoom-in-down" className='flex border item-center gap-1 p-4 justify-start mt-5'><img className='bg-red-50 border rounded p-1' src={nike} alt="" /><p>Early access to new courses and updates.</p></div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section data-aos="zoom-in-down" >
        <div data-aos="fade-right-down" className="container">
          <AccordionMenu />
        </div>
      </section>
    </main>

  )
}

export default HomePage 