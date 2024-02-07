import { useState } from 'react';
import { Link } from 'react-router-dom';

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <div key={index}>
                    <div className='flex items-center'>
                        <p className='flex items-center justify-between  px-4 py-2 text-left border-b '>

                            <span className="font-semibold">{item.title}</span>
                        </p>
                        <button

                            onClick={() => toggleItem(index)}
                        >
                            <svg
                                className={`w-4 h-4 transition-transform transform ${openIndex === index ? 'rotate-90' : ''
                                    }`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 12a1 1 0 01-.7-.29l-3-3a1 1 0 011.4-1.42L10 9.58l2.3-2.3a1 1 0 111.4 1.42l-3 3a1 1 0 01-.7.3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    {openIndex === index && (
                        <div className="pl-4">
                            <ul className="space-y-2">
                                {item.submenu.map((subItem, subIndex) => (
                                    <li key={subIndex} className="py-2">
                                        <Link
                                            to={subItem.link}
                                            className="block px-2 py-1 text-sm text-gray-800 hover:bg-gray-100 rounded-md">
                                            {subItem.title}

                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

const items = [
    {
        title: 'Can I enroll in multiple courses at once?',
        submenu: [
            { title: 'Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.', },
            { title: 'Enrollment Process for Different Courses', link: '/course-open' },
        ],
    },
    {
        title: 'What kind of support can I expect from instructors?',
        submenu: [
            { title: 'Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.', },
            { title: 'Enrollment Process for Different Courses', link: '/course-open' },
        ],
    }, {
        title: 'Are the courses self-paced or do they have specific start and end dates?',
        submenu: [
            { title: 'Submenu 2.1', },
            { title: 'Submenu 2.2', link: '/course-open' },
        ],
    }, {
        title: 'Are there any prerequisites for the courses?',
        submenu: [
            { title: 'Submenu 2.1',  },
            { title: 'Submenu 2.2', link: '/course-open' },
        ],
    }, {
        title: 'Can I download the course materials for offline access?',
        submenu: [
            { title: 'Submenu 2.1',  },
            { title: 'Submenu 2.2', link: '/course-open' },
        ],
    }, {
        title: 'What kind of support can I expect from instructors?',
        submenu: [
            { title: 'Submenu 2.1',   },
            { title: 'Submenu 2.2', link: '/course-open' },
        ],
    },
];

const AccordionMenu = () => {
    return (
        <div className="container mx-auto py-8">
            <Accordion items={items} />
        </div>
    );
};

export default AccordionMenu;
