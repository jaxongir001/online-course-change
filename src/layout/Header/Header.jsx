import { Link, } from 'react-router-dom'
import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Course', to: '/course', },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" >
      {({ open }) => (
        <>
          <div className="hader_top bg-orange-400 text-center text-white py-3">
            Free Courses 🌟 Sale Ends Soon, Get It Now
          </div>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-end  sm:items-center sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="44" height="44" rx="8" fill="#FF9500" />
                    <path d="M9.09961 36.0802L17.9268 27.2531H26.7539V18.4259L35.5811 27.2531L26.7539 36.0802H9.09961Z" fill="white" />
                    <path d="M9.09961 18.4259L17.9268 27.2531V18.4259H26.7539L35.5811 9.59877H17.9268L9.09961 18.4259Z" fill="white" />
                  </svg>

                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <ul className='flex items-center gap-10'>
                      <Link to="/"><li>Home</li></Link>
                      <Link to="course"><li>Courses</li></Link>
                      <Link to="about"><li>About Us</li></Link>
                      <Link to="pricing"><li>Pricing</li></Link>
                      <Link to="contact"><li>Contact</li></Link>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div>

                </div>

                <div className='flex items-center gap-6'>
                  <Link to="signup"><li className='list-none'>Sign up</li></Link>
                  <Link className='bg-orange-400 text-white py-3 px-7 rounded-xl' to="login">
                    <li className='list-none'>
                      Login
                    </li></Link>
                </div>


                <div className=" flex items-center sm:hidden">
                  <Disclosure.Button className=" inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
