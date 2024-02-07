import email from '../../assets/images/icons/email.svg'
import phone from '../../assets/images/icons/phone.svg'
import location from '../../assets/images/icons/location.svg'
import facebook from '../../assets/images/icons/facebook.svg'
import twitter from '../../assets/images/icons/twitter.svg'
import ini from '../../assets/images/icons/ini.svg'


const Footer = () => {
  return (
    <div>
      <footer className='bg-white mt-36'>
        <div className='py-24'>
          <nav className='container flex justify-between items-start '>
            <ul>
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="54" height="54" rx="8" fill="#FF9500" />
                <path d="M11.167 43.667L22.0003 32.8337H32.8337V22.0003L43.667 32.8337L32.8337 43.667H11.167Z" fill="white" />
                <path d="M11.167 22.0003L22.0003 32.8337V22.0003H32.8337L43.667 11.167H22.0003L11.167 22.0003Z" fill="white" />
              </svg>


              <li className='flex items-center gap-1 mt-10'><img src={email} alt="" />hello@skillbridge.com</li>
              <li className='flex items-center gap-1 mt-5'><img src={phone} alt="" />+91 91813 23 2309</li>
              <li className='flex items-center gap-1 mt-5'><img src={location} alt="" />Somewhere in the World</li>

            </ul>
            <ul>
              <li className='font-semibold text-1xl'>Home</li>

              <li className='flex items-center gap-1 mt-10'>Benefits</li>
              <li className='flex items-center gap-1 mt-5'>Our Courses</li>
              <li className='flex items-center gap-1 mt-5'>Our Testimonials</li>
              <li className='flex items-center gap-1 mt-5'> Our FAQ</li>

            </ul> <ul>
              <li className='font-semibold text-1xl'>About Us</li>

              <li className='flex items-center gap-1 mt-10'>Company</li>
              <li className='flex items-center gap-1 mt-5'>Achievements</li>
              <li className='flex items-center gap-1 mt-5'>Our  Goals</li>

            </ul> <ul>
              <li className='font-semibold text-1xl'>Social Profiles</li>

              <div className=' flex items-center gap-1 mt-4'>
                <li className='border p-2 rounded'><img src={facebook} alt="" /></li>
                <li className='border p-2 rounded'><img src={twitter} alt="" /></li>
                <li className='border p-2 rounded'><img src={ini} alt="" /></li>

              </div>

            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Footer