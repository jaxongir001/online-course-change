import { Link } from 'react-router-dom'

 import person1 from '../../assets/images/png/image1.png'
 import person2 from '../../assets/images/png/image2.png'
 import person3 from '../../assets/images/png/image3.png'
 import person4 from '../../assets/images/png/image4.png'
 import person5 from '../../assets/images/png/image5.png'
 import person6 from '../../assets/images/png/image6.png'
 import person7 from '../../assets/images/png/image7.png'
 import person8 from '../../assets/images/png/image8.png'
 import person9 from '../../assets/images/png/image9.png'
 import person10 from '../../assets/images/png/image10.png'
 import person11 from '../../assets/images/png/image11.png'
 import person12 from '../../assets/images/png/image12.png'
 import person13 from '../../assets/images/png/image13.png'
 import person14 from '../../assets/images/png/image14.png'
 import person15 from '../../assets/images/png/image15.png'
const Main = () => {
  return (
    <div>
        <main>
          <section>
            <div className=" px-20 py-20 flex  justify-between">
              <h1  className=" text-5xl font-semibold">
              Online Courses on Design and Development
              </h1>
              <p className="text-lg w-3/6 ">
              Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.
              </p>
            </div>
          </section>
          <section>
            <div className="bg-white px-20 py-5">
              <h2 className="text-2xl font-semibold">
              Web Design Fundamentals
              </h2>
              <div className="flex justify-between items-center ">
                <p className="w-3/4">
                Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.
                </p>
                <Link to='course-open' className="border p-4">
                View Course
                </Link>
              </div>
              <div className="flex items-center justify-between py-8 gap-8 mt-8">
                <img className='w-96' src={person1} alt="" />
                <img className='w-96' src={person2} alt="" />
                <img className='w-96' src={person3} alt="" />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex gap-7'>
                  <button className='border p-2'>
                  4 Weeks
                    </button>
                    <button className='border p-2'>
                    Beginner
                    </button>
                </div>
                <p className='font-semibold'>
                By John Smith
                </p>
              </div>
              <h3 className='text-xl font-semibold mt-12'>
              Curriculum
              </h3>
              <div className='flex justify-between mt-12'>
                <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    01
                  </p>
                  <p className='font-semibold'>Introduction to UI/UX Design</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    02
                  </p>
                  <p className='font-semibold'>User Research and Personas</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    03
                  </p>
                  <p className='font-semibold'>Wireframing and Prototyping</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    04
                  </p>
                  <p className='font-semibold'>Visual Design and Branding</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    05
                  </p>
                  <p className='font-semibold'>Usability Testing and Iteration</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="bg-white px-20 py-5 mt-14">
              <h2 className="text-2xl font-semibold">
              Mobile App Development
              </h2>
              <div className="flex justify-between items-center ">
                <p className="w-3/4">
                Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.
                </p>
                <Link to='course-open' className="border p-4">
                View Course
                </Link>
              </div>
              <div className="flex items-center justify-between py-8 gap-8 mt-8">
                <img className='w-96' src={person4} alt="" />
                <img className='w-96' src={person5} alt="" />
                <img className='w-96' src={person6} alt="" />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex gap-7'>
                  <button className='border p-2'>
                  4 Weeks
                    </button>
                    <button className='border p-2'>
                    Beginner
                    </button>
                </div>
                <p className='font-semibold'>
                By John Smith
                </p>
              </div>
              <h3 className='text-xl font-semibold mt-12'>
              Curriculum
              </h3>
              <div className='flex justify-between mt-12'>
                <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    01
                  </p>
                  <p className='font-semibold'>Introduction to UI/UX Design</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    02
                  </p>
                  <p className='font-semibold'>User Research and Personas</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    03
                  </p>
                  <p className='font-semibold'>Wireframing and Prototyping</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    04
                  </p>
                  <p className='font-semibold'>Visual Design and Branding</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    05
                  </p>
                  <p className='font-semibold'>Usability Testing and Iteration</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="bg-white px-20 py-5 mt-14">
              <h2 className="text-2xl font-semibold">
              Mobile App Development
              </h2>
              <div className="flex justify-between items-center ">
                <p className="w-3/4">
                Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.
                </p>
                <button className="border p-4">
                View Course
                </button>
              </div>
              <div className="flex items-center justify-between py-8 gap-8 mt-8">
                <img className='w-96' src={person7} alt="" />
                <img className='w-96' src={person8} alt="" />
                <img className='w-96' src={person9} alt="" />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex gap-7'>
                  <button className='border p-2'>
                  4 Weeks
                    </button>
                    <button className='border p-2'>
                    Beginner
                    </button>
                </div>
                <p className='font-semibold'>
                By John Smith
                </p>
              </div>
              <h3 className='text-xl font-semibold mt-12'>
              Curriculum
              </h3>
              <div className='flex justify-between mt-12'>
                <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    01
                  </p>
                  <p className='font-semibold'>Introduction to UI/UX Design</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    02
                  </p>
                  <p className='font-semibold'>User Research and Personas</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    03
                  </p>
                  <p className='font-semibold'>Wireframing and Prototyping</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    04
                  </p>
                  <p className='font-semibold'>Visual Design and Branding</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    05
                  </p>
                  <p className='font-semibold'>Usability Testing and Iteration</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="bg-white px-20 py-5 mt-14">
              <h2 className="text-2xl font-semibold">
              Mobile App Development
              </h2>
              <div className="flex justify-between items-center ">
                <p className="w-3/4">
                Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.
                </p>
                <button className="border p-4">
                View Course
                </button>
              </div>
              <div className="flex items-center justify-between py-8 gap-8 mt-8">
                <img className='w-96' src={person10} alt="" />
                <img className='w-96' src={person11} alt="" />
                <img className='w-96' src={person12} alt="" />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex gap-7'>
                  <button className='border p-2'>
                  4 Weeks
                    </button>
                    <button className='border p-2'>
                    Beginner
                    </button>
                </div>
                <p className='font-semibold'>
                By John Smith
                </p>
              </div>
              <h3 className='text-xl font-semibold mt-12'>
              Curriculum
              </h3>
              <div className='flex justify-between mt-12'>
                <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    01
                  </p>
                  <p className='font-semibold'>Introduction to UI/UX Design</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    02
                  </p>
                  <p className='font-semibold'>User Research and Personas</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    03
                  </p>
                  <p className='font-semibold'>Wireframing and Prototyping</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    04
                  </p>
                  <p className='font-semibold'>Visual Design and Branding</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    05
                  </p>
                  <p className='font-semibold'>Usability Testing and Iteration</p>
                </div>
              </div>
            </div>
          </section>    <section>
            <div className="bg-white px-20 py-5 mt-14">
              <h2 className="text-2xl font-semibold">
              Mobile App Development
              </h2>
              <div className="flex justify-between items-center ">
                <p className="w-3/4">
                Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.
                </p>
                <button className="border p-4">
                View Course
                </button>
              </div>
              <div className="flex items-center justify-between py-8 gap-8 mt-8">
                <img className='w-96' src={person13} alt="" />
                <img className='w-96' src={person14} alt="" />
                <img className='w-96' src={person15} alt="" />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex gap-7'>
                  <button className='border p-2'>
                  4 Weeks
                    </button>
                    <button className='border p-2'>
                    Beginner
                    </button>
                </div>
                <p className='font-semibold'>
                By John Smith
                </p>
              </div>
              <h3 className='text-xl font-semibold mt-12'>
              Curriculum
              </h3>
              <div className='flex justify-between mt-12'>
                <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    01
                  </p>
                  <p className='font-semibold'>Introduction to UI/UX Design</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    02
                  </p>
                  <p className='font-semibold'>User Research and Personas</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    03
                  </p>
                  <p className='font-semibold'>Wireframing and Prototyping</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    04
                  </p>
                  <p className='font-semibold'>Visual Design and Branding</p>
                </div> <div className='w-48'>
                  <p className='text-5xl font-semibold '>
                    05
                  </p>
                  <p className='font-semibold'>Usability Testing and Iteration</p>
                </div>
              </div>
            </div>
          </section>
        </main>
    </div>
  )
}

export default Main