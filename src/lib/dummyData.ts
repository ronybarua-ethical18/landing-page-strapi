import WebIcon from '../../public/web.png'
import Web2Icon from '../../public/apps.png'
import SeoIcon from '../../public/seo.png'
import SeoAboutIcon from '../../public/seoAbout.png'
import VRIcon from '../../public/vr.png'
import ARVRIcon from '../../public/arvr.png'
import MobileIcon from '../../public/mobile.png'
import MobileAboutIcon from '../../public/mobileAbout.png'
import LogoOne from '../../public/caspio.png'
import LogoTwo from '../../public/beneoshop.png'
import LogoThree from '../../public/HyperGrid.png'
import LogoFour from '../../public/leotrippi.png'
import TeamOne from '../../public/team1.png'
import TeamTwo from '../../public/team2.png'
import TeamThree from '../../public/team3.png'
import TeamFive from '../../public/team5.png'
import ProjectOne from '../../public/project1.png'
import ProjectTwo from '../../public/project2.png'
import ProjectThree from '../../public/project3.png'
import ProjectFour from '../../public/project4.png'
import ProjectFive from '../../public/project5.png'
import BlogOne from '../../public/blog1.png'

export const mainMenuItems = [
  {
    id: 1,
    title: 'Solutions',
    sections: [
      {
        id: 1,
        title: 'Use Cases',
        links: [
          {
            id: 1,
            name: 'Ecommerce',
            url: 'https://dummy.com',
            description: 'Level up your eCommerce experiences.',
            icon: '',
          },
          {
            id: 2,
            name: 'Corporate Site',
            url: 'https://dummy.com',
            description: 'Manage your brand narrative.',
            icon: '',
          },
          {
            id: 3,
            name: 'Mobile Applications',
            url: 'https://dummy.com',
            description: 'One CMS, any devices',
            icon: '',
          },
        ],
      },
      {
        id: 2,
        title: 'Teams',
        links: [
          {
            id: 1,
            name: 'Developers',
            url: 'https://dummy.com',
            description: 'Integrate our system with your favorite tools.',
            icon: '',
          },
          {
            id: 2,
            name: 'Content Managers',
            url: 'https://dummy.com',
            description: 'Manage content autonomously',
            icon: '',
          },
          {
            id: 3,
            name: 'Business Teams',
            url: 'https://dummy.com',
            description: 'Unlock the benefits of structured content.',
            icon: '',
          },
        ],
      },
      {
        id: 2,
        title: 'Industries',
        links: [
          {
            id: 1,
            name: 'Financial Services',
            url: 'https://dummy.com',
            description: 'Build trustful relations with your customers.',
            icon: '',
          },
          {
            id: 2,
            name: 'Tech and Business Services',
            url: 'https://dummy.com',
            description: 'Deliver faster digital experiences for your clients',
            icon: '',
          },
          {
            id: 3,
            name: 'Telco, Media and Gaming',
            url: 'https://dummy.com',
            description: 'Create and manage content on any platform',
            icon: '',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Developers',
    sections: [
      {
        id: 1,
        title: 'Resources',
        links: [
          {
            id: 1,
            name: 'Blog',
            url: 'https://dummy.com',
            description: 'Level up your eCommerce experiences.',
            icon: '',
          },
          {
            id: 2,
            name: 'Events',
            url: 'https://dummy.com',
            description: 'Manage your brand narrative.',
            icon: '',
          },
          {
            id: 3,
            name: 'Showcase',
            url: 'https://dummy.com',
            description: 'One CMS, any devices',
            icon: '',
          },
          {
            id: 4,
            name: 'Partners',
            url: 'https://dummy.com',
            description: 'One CMS, any devices',
            icon: '',
          },
        ],
      },
      {
        id: 2,
        title: 'Support',
        links: [
          {
            id: 1,
            name: 'Open Source',
            url: 'https://dummy.com',
            description: 'Integrate our system with your favorite tools.',
            icon: '',
          },
          {
            id: 2,
            name: 'Forum',
            url: 'https://dummy.com',
            description: 'Manage content autonomously',
            icon: '',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Services',
    sections: [],
    link: '/services',
  },

  {
    id: 4,
    title: 'About Us',
    sections: [],
    link: '/about',
  },
  {
    id: 5,
    title: 'Blog',
    sections: [],
    link: '/blog',
  },
]

export const services = [
  {
    id: 1,
    title: 'Web Application',
    description: 'Lorem ipsum is simply',
    icon: WebIcon,
  },
  {
    id: 2,
    title: 'SEO',
    description: 'Lorem ipsum is simply',
    icon: SeoIcon,
  },
  {
    id: 3,
    title: 'AR/VR Solutions',
    description: 'Lorem ipsum is simply',
    icon: VRIcon,
  },
  {
    id: 4,
    title: 'Mobile Applications',
    description: 'Lorem ipsum is simply',
    icon: MobileIcon,
  },
]

export const aboutServices = [
  {
    id: 1,
    title: 'Web Application',
    description: 'Lorem ipsum is simply',
    icon: Web2Icon,
    serviceDesc:
      'Platform independant business solutions for maximum availability',
  },
  {
    id: 2,
    title: 'SEO',
    description: 'Lorem ipsum is simply',
    icon: SeoAboutIcon,
    serviceDesc: 'Let the world find you on top of others',
  },
  {
    id: 3,
    title: 'Mobile Applications ',
    description: 'Lorem ipsum is simply',
    icon: MobileAboutIcon,
    serviceDesc: 'The simplest but robust technology to accompany with you',
  },
  {
    id: 4,
    title: 'AR/VR Solutions',
    description: 'Lorem ipsum is simply',
    icon: ARVRIcon,
    serviceTitle: 'Advanced autonomous technologies to make life simple',
  },
]
export const servicesWithDesc = [
  {
    id: 1,
    title: 'Mobile Applications ',
    description: 'Lorem ipsum is simply',
    icon: MobileAboutIcon,
    serviceDesc: 'The simplest but robust technology to accompany with you',
  },
  {
    id: 2,
    title: 'Web Application',
    description: 'Lorem ipsum is simply',
    icon: Web2Icon,
    serviceDesc:
      'Platform independant business solutions for maximum availability',
  },
  {
    id: 3,
    title: 'SEO',
    description: 'Lorem ipsum is simply',
    icon: SeoAboutIcon,
    serviceDesc: 'Let the world find you on top of others',
  },

  {
    id: 4,
    title: 'AR/VR Solutions',
    description: 'Lorem ipsum is simply',
    icon: ARVRIcon,
    serviceDesc: 'Advanced autonomous technologies to make life simple',
  },
]

export const logos = [
  {
    id: 1,
    img: LogoOne,
  },
  {
    id: 2,
    img: LogoTwo,
  },
  {
    id: 3,
    img: LogoThree,
  },
  {
    id: 4,
    img: LogoFour,
  },
  {
    id: 5,
    img: LogoThree,
  },
]
export const teams = [
  {
    id: 1,
    designation: 'CEO',
    img: TeamOne,
    name: 'John kabras',
  },
  {
    id: 2,
    designation: 'COO',
    img: TeamTwo,
    name: 'Philips shene moris',
  },
  {
    id: 3,
    designation: 'Tech Lead',
    img: TeamThree,
    name: 'Equarn shamir mohomad',
  },
  {
    id: 4,
    designation: 'Head of UX',
    img: TeamOne,
    name: 'Janka indrajith',
  },
  {
    id: 5,
    designation: 'Head of UX',
    img: TeamFive,
    name: 'Lou Bartels',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Lorem Ipsum is simply dummy text of the printing.',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: ProjectOne,
  },
  {
    id: 2,
    title: 'Lorem Ipsum is simply dummy text of the printing.',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: ProjectTwo,
  },
  {
    id: 3,
    title: 'Lorem Ipsum is simply dummy text of the printing.',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: ProjectThree,
  },
  {
    id: 4,
    title: 'Lorem Ipsum is simply dummy text of the printing.',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: ProjectFour,
  },
  {
    id: 5,
    title: 'Lorem Ipsum is simply dummy text of the printing.',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: ProjectFive,
  },
]
export const blogs = [
  {
    id: 1,
    title: 'Lorem Ipsum is simply dummy text of the printing.',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: BlogOne,
  },
  {
    id: 2,
    title: 'Lorem Ipsum is simply dummy text of the printing.',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: ProjectFive,
  },
  {
    id: 3,
    title: 'Lorem Ipsum is simply dummy text of the printing.',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: ProjectFour,
  },
  {
    id: 4,
    title: 'Lorem Ipsum is simply dummy text of the printing.',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: ProjectFour,
  },
  {
    id: 5,
    title: 'Lorem Ipsum is simply dummy text of the printing.',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: ProjectFive,
  },
  {
    id: 6,
    title: 'Lorem Ipsum is simply dummy text of the printing.',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: ProjectFour,
  },
]
