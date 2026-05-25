import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '500', label: 'Properties Sold', suffix: '+' },
  { value: '15', label: 'Years Experience', suffix: '+' },
  { value: '200', label: 'Luxury Listings', suffix: '+' },
  { value: '98', label: 'Client Satisfaction', suffix: '%' },
]

const realEstateServices = [
  {
    title: 'Property Sales',
    desc: 'Expert guidance through every step of the buying or selling process, from market analysis to closing. We connect you with premium properties across UAE and USA markets.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Luxury Rentals',
    desc: 'Curated selection of premium rental properties including luxury apartments, villas, and executive residences in the most sought-after locations.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Investment Advisory',
    desc: 'Strategic property investment consulting with in-depth market intelligence, ROI analysis, and portfolio diversification strategies for UAE and USA markets.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Property Management',
    desc: 'Comprehensive property management services including tenant sourcing, maintenance coordination, rent collection, and legal compliance for property owners.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Market Expertise',
    desc: 'Deep knowledge of UAE and USA real estate markets, regulatory frameworks, and emerging trends to help clients make informed investment decisions.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Private Client Services',
    desc: 'Bespoke real estate solutions for high-net-worth individuals, including off-market listings, privacy protection, and personalized property sourcing.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
]

const atlantisProperty = {
  title: '2-Bedroom Premium Apartment',
  location: 'The Royal Atlantis, Dubai',
  tower: 'Tower B',
  floor: '3rd Floor',
  area: '209 sq.m. (2,250 sq.ft.)',
  status: 'Upgraded, Fully Furnished, Ready to Move In',
  views: 'Panoramic Sea View & Lush Garden View',
  tagline: 'Where Sophistication Meets the Horizon',
}

const rooms = [
  {
    id: 'entrance',
    title: 'Entrance & Hallway',
    desc: 'A welcoming, sophisticated hallway that creates a grand sense of arrival with fluid transition into the core living and culinary areas.',
    image: '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215206.png',
    highlights: ['Grand sense of arrival', 'Sophisticated design', 'Fluid transition to living areas'],
  },
  {
    id: 'living',
    title: 'Living & Dining',
    desc: 'A massive open-plan layout designed for ultra-luxury entertainment and family comfort, with direct access to the main grand balcony overlooking the ocean.',
    image: '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215220.png',
    highlights: ['Open-plan luxury layout', 'Direct balcony access', 'Ocean views', 'Premium dining setup'],
  },
  {
    id: 'kitchen',
    title: 'Gourmet Kitchen',
    desc: 'A contemporary open-plan kitchen integrated seamlessly near the dining area, outfitted with bespoke wooden cabinetry, top-tier marble countertops, and integrated luxury appliances.',
    image: '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215232.png',
    highlights: ['Bespoke wooden cabinetry', 'Marble countertops', 'Integrated luxury appliances', 'Open-plan design'],
  },
  {
    id: 'master',
    title: 'Master Bedroom Suite',
    desc: 'An extremely spacious master layout featuring a dedicated lounge corner, private balcony with direct sea views, a massive en-suite luxury bathroom with freestanding bathtub, and generous walk-in wardrobe.',
    image: '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215337.png',
    highlights: ['Private sea-view balcony', 'Luxury en-suite bathroom', 'Walk-in wardrobe', 'Dedicated lounge corner'],
  },
  {
    id: 'second',
    title: 'Second Bedroom Suite',
    desc: 'A generously-sized bedroom offering maximum privacy on the opposite side of the apartment, with a dedicated workspace, private balcony access, and an attached high-end bathroom.',
    image: '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215352.png',
    highlights: ['Maximum privacy layout', 'Dedicated workspace', 'Private balcony', 'Attached bathroom'],
  },
]

const atlantisFeatures = [
  {
    title: 'Dual View Advantage',
    desc: 'Uninterrupted full sea-facing layouts combined with serene garden views.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Outdoor Living',
    desc: 'Multiple private balconies across the entire length of the apartment.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Premium Finishes',
    desc: 'Natural wood paneling, marble surfaces, and curated designer furniture.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Elite Community',
    desc: 'Private beaches, infinity pools, and 24/7 concierge services.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
]

const type3Img = '/Venturis%20Realtors/4%20bedroom%20apprtment%20type%203/'

const type3Property = {
  title: 'The Royal Atlantis \u2013 Residence 1002',
  tagline: 'Where Sophistication Meets the Sea',
  type: '4 Bedroom Signature Residence',
  layout: 'Type 3',
  livingArea: '378 SQM',
  balconyArea: '62 SQM',
  totalArea: '440 SQM',
  views: 'Full Palm & Sea View',
}

const type3Gallery = [
  type3Img + 'Kitchen%20and%20Cabinatery%20(1).png',
  type3Img + 'Kitchen%20and%20Cabinatery%20(2).png',
  type3Img + 'Kitchen%20and%20Cabinatery%20(3).png',
  type3Img + 'Kitchen%20and%20Cabinatery%20(4).png',
  type3Img + 'Kitchen%20and%20Cabinatery%20(5).png',
  type3Img + 'Kitchen%20and%20Cabinatery%20(6).png',
  type3Img + 'Kitchen%20and%20Cabinatery%20(7).png',
  type3Img + 'Kitchen%20and%20Cabinatery%20(8).png',
  type3Img + 'Living%20Room%20(1).png',
  type3Img + 'Living%20Room%20(2).png',
  type3Img + 'Living%20Room%20(3).png',
  type3Img + 'Bedroom%20%26%20Bathrooms%20(1).png',
  type3Img + 'Bedroom%20%26%20Bathrooms%20(2).png',
  type3Img + 'Bedroom%20%26%20Bathrooms%20(3).png',
  type3Img + 'Bedroom%20%26%20Bathrooms%20(4).png',
  type3Img + 'Bedroom%20%26%20Bathrooms%20(5).png',
  type3Img + 'Bedroom%20%26%20Bathrooms%20(6).png',
  type3Img + 'Bedroom%20%26%20Bathrooms%20(7).png',
  type3Img + 'Bedroom%20%26%20Bathrooms%20(8).png',
  type3Img + 'Bedroom%20%26%20Bathrooms%20(9).png',
  type3Img + 'Views%20And%20Balconys%20(1).png',
  type3Img + 'Views%20And%20Balconys%20(2).png',
  type3Img + 'Views%20And%20Balconys%20(3).png',
  type3Img + 'Views%20And%20Balconys%20(4).png',
  type3Img + 'Views%20And%20Balconys%20(5).png',
]

const type3Highlights = [
  {
    title: 'Full Palm & Sea View',
    desc: 'Breathtaking panoramic views of the Palm Jumeirah and the Arabian Gulf from every angle.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Premium Modern Interior',
    desc: 'Exceptional architectural elegance with premium modern interiors and designer finishes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Expansive Living Spaces',
    desc: 'Spacious living and dining areas designed for sophisticated entertainment and family comfort.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Large Private Balconies',
    desc: 'Spacious balconies seamlessly connecting indoor comfort with al fresco waterfront luxury.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Luxury Kitchen & Finishes',
    desc: 'State-of-the-art gourmet kitchen with bespoke cabinetry, marble surfaces, and premium appliances.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: 'Exclusive Waterfront Lifestyle',
    desc: 'World-class resort living with private beaches, infinity pools, and 24/7 concierge services.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
]

const type3Hero = type3Img + 'Living%20Room%20(1).png'
const type3Hero2 = type3Img + 'Views%20And%20Balconys%20(1).png'

const galleryCategories = [
  {
    id: 'kitchen',
    label: 'Kitchen & Cabinetry',
    images: type3Gallery.slice(0, 8),
  },
  {
    id: 'living',
    label: 'Living Room',
    images: type3Gallery.slice(8, 11),
  },
  {
    id: 'bedrooms',
    label: 'Bedroom & Bathrooms',
    images: type3Gallery.slice(11, 20),
  },
  {
    id: 'views',
    label: 'Views & Balcony',
    images: type3Gallery.slice(20, 25),
  },
  ]

const bwi = '/Venturis%20Realtors/Blue%20water%20island/'

const bwiHighlights = [
  {
    title: 'Double-Height Living Room',
    desc: 'Dramatic 6-meter high ceilings creating a bright and luxurious atmosphere.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Sea & Promenade Views',
    desc: 'Breathtaking waterfront and promenade views from every level.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Private Swimming Pool',
    desc: 'Large terrace with private pool for resort-style living at home.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Fully Furnished & Upgraded',
    desc: 'Premium designer furnishings and upgraded finishes throughout.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Inner Courtyard & BBQ',
    desc: 'Private courtyard with dedicated barbecue area for entertaining.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: '3 Private Parking Spaces',
    desc: 'Ample parking with three dedicated spaces for residents and guests.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
]

const bwiGalleryCategories = [
  {
    id: 'entrance',
    label: 'Entrance & Living Room',
    count: '7 Photos',
    images: [
      bwi + 'Entrance%20Area%20%26%20Living%20Room%20(1).png',
      bwi + 'Entrance%20Area%20%26%20Living%20Room%20(2).png',
      bwi + 'Entrance%20Area%20%26%20Living%20Room%20(3).png',
      bwi + 'Entrance%20Area%20%26%20Living%20Room%20(4).png',
      bwi + 'Entrance%20Area%20%26%20Living%20Room%20(5).png',
      bwi + 'Entrance%20Area%20%26%20Living%20Room%20(6).png',
      bwi + 'Entrance%20Area%20%26%20Living%20Room%20(7).png',
    ],
  },
  {
    id: 'dining',
    label: 'Dining & Kitchen',
    count: '5 Photos',
    images: [
      bwi + 'Dinning%20Area%20%26%20Kitchen%20(1).png',
      bwi + 'Dinning%20Area%20%26%20Kitchen%20(2).png',
      bwi + 'Dinning%20Area%20%26%20Kitchen%20(3).png',
      bwi + 'Dinning%20Area%20%26%20Kitchen%20(4).png',
      bwi + 'Dinning%20Area%20%26%20Kitchen%20(5).png',
    ],
  },
  {
    id: 'master',
    label: 'Master Bedroom & Bath',
    count: '8 Photos',
    images: [
      bwi + 'Master%20Bedroom%20%26%20Bath%20room%20(1).png',
      bwi + 'Master%20Bedroom%20%26%20Bath%20room%20(2).png',
      bwi + 'Master%20Bedroom%20%26%20Bath%20room%20(3).png',
      bwi + 'Master%20Bedroom%20%26%20Bath%20room%20(4).png',
      bwi + 'Master%20Bedroom%20%26%20Bath%20room%20(5).png',
      bwi + 'Master%20Bedroom%20%26%20Bath%20room%20(6).png',
      bwi + 'Master%20Bedroom%20%26%20Bath%20room%20(7).png',
      bwi + 'Master%20Bedroom%20%26%20Bath%20room%20(8).png',
    ],
  },
  {
    id: 'pool',
    label: 'Pool Terrace',
    count: '6 Photos',
    images: [
      bwi + 'Private%20Swimming%20Pool%20Terrace%20(1).png',
      bwi + 'Private%20Swimming%20Pool%20Terrace%20(2).png',
      bwi + 'Private%20Swimming%20Pool%20Terrace%20(3).png',
      bwi + 'Private%20Swimming%20Pool%20Terrace%20(4).png',
      bwi + 'Private%20Swimming%20Pool%20Terrace%20(5).png',
      bwi + 'Private%20Swimming%20Pool%20Terrace%20(6).png',
    ],
  },
  {
    id: 'views',
    label: 'Views',
    count: '8 Photos',
    images: [
      bwi + 'Views%20(1).png',
      bwi + 'Views%20(2).png',
      bwi + 'Views%20(3).png',
      bwi + 'Views%20(4).png',
      bwi + 'Views%20(5).png',
      bwi + 'Views%20(6).png',
      bwi + 'Views%20(7).png',
      bwi + 'Views%20(8).png',
    ],
  },
]

const bwiExtraFeatures = [
  "Maid's Room",
  'Warehouse / Storage',
  'Private Work Office',
  'Inner Courtyard',
  'Barbecue Area',
  '3 Private Parking Spaces',
]

function AnimatedSection({ children, className }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  )
}

function CountUp({ end, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const duration = 2000
          const step = Math.ceil(end / (duration / 16))
          const timer = setInterval(() => {
            start += step
            if (start >= end) { setCount(end); clearInterval(timer) }
            else setCount(start)
          }, 16)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-brand-dark mb-1 tracking-tight font-number">
        {count}{suffix}
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">{label}</div>
    </div>
  )
}

export default function VenturisRealtors() {
  const [activeTab, setActiveTab] = useState(rooms[0].id)
  const [galleryCat, setGalleryCat] = useState(galleryCategories[0].id)
  const [bwiGalleryCat, setBwiGalleryCat] = useState(bwiGalleryCategories[0].id)

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative h-screen min-h-[600px] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
            <source src="/Main%20hero%20section.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-white/30 hover:text-white text-xs uppercase tracking-widest mb-12 transition-all group">
            <svg className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-teal" />
              <span className="text-brand-teal uppercase tracking-[0.25em] text-xs font-medium">Venturis Holdings Division</span>
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white leading-none mb-5 tracking-tight">
              Venturis<br />
              <span className="text-brand-teal">Realtors</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-lg leading-relaxed mb-8">
              Premium real estate across UAE &amp; USA — connecting clients with exceptional properties in the world's most dynamic markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="px-7 py-3 bg-white text-brand-dark text-sm font-semibold rounded-full hover:bg-white/90 transition-all hover:-translate-y-0.5 cursor-pointer">
                Explore Services
              </a>
              <Link to="/contact" className="px-7 py-3 border border-white/20 text-white/70 text-sm font-semibold rounded-full hover:bg-white/10 hover:text-white hover:border-white/40 transition-all">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none">
          <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-4 h-7 rounded-full border border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-1.5 rounded-full bg-white/50 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="relative z-10 -mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl shadow-black/5 px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <CountUp key={s.label} end={parseInt(s.value)} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img src="/realtors.jpeg" alt="" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-teal/10 rounded-3xl -z-10 hidden lg:block" />
            </div>
            <div>
              <span className="text-brand-teal text-xs uppercase tracking-[0.25em] font-medium">About</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-4 mb-6 leading-tight">
                Premium Real Estate,<br />
                <span className="text-brand-teal">Unmatched Expertise</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Venturis Realtors is a premier real estate division of Venturis Holdings, dedicated to providing exceptional property solutions across the UAE and United States. With over 15 years of market expertise, we specialize in luxury residential properties, commercial real estate, and high-value investment opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['UAE Market Experts', 'USA Property Access', 'Luxury Portfolio', 'Client-First Approach'].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                    <div className="w-7 h-7 rounded-full bg-brand-teal/15 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-brand-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="py-28 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-brand-teal text-xs uppercase tracking-[0.25em] font-medium">Our Expertise</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-3">Real Estate Solutions</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">Six specialized services, one standard of excellence.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {realEstateServices.map((service, i) => (
              <AnimatedSection key={i}>
                <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/5 transition-all duration-500 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center group-hover:from-brand-teal group-hover:to-brand-navy transition-all duration-500">
                      <div className="text-brand-teal group-hover:text-white transition-colors duration-500">{service.icon}</div>
                    </div>
                    <span className="text-4xl font-bold text-gray-100 font-number">0{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROPERTY ============ */}
      <section id="properties" className="py-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-brand-teal text-xs uppercase tracking-[0.25em] font-medium">Featured</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-3">Featured Properties</h2>
            <p className="text-gray-400 mt-3">Explore our curated selection of exceptional properties.</p>
          </AnimatedSection>

          <div className="mb-10 border-b border-gray-100 pb-4">
            <span className="inline-block px-5 py-2.5 bg-brand-teal text-white text-sm font-semibold rounded-lg">The Royal Atlantis — Dubai</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img src="/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Masterfully%20Crafted%20Living%20Spaces.png" alt="" className="w-full h-[380px] object-cover transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                  {atlantisFeatures.slice(0, 2).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2.5 border border-white/10">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">{f.icon}</div>
                      <span className="text-white text-xs font-medium">{f.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <span className="text-brand-teal text-xs uppercase tracking-[0.25em] font-medium">Premium Listing</span>
              <p className="text-gray-400 text-xs uppercase tracking-wider mt-2">{atlantisProperty.location}</p>
              <h3 className="text-2xl font-bold text-brand-dark mt-1 mb-6">{atlantisProperty.title}</h3>
              <div className="space-y-3 mb-6">
                {[
                  { label: 'Status', value: atlantisProperty.status, color: 'text-brand-teal' },
                  { label: 'Location', value: `${atlantisProperty.location} — ${atlantisProperty.tower}, ${atlantisProperty.floor}` },
                  { label: 'Area', value: atlantisProperty.area },
                  { label: 'Views', value: atlantisProperty.views },
                ].map((d) => (
                  <div key={d.label} className="flex items-center gap-3 py-2.5 border-b border-gray-50">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider w-20 shrink-0">{d.label}</span>
                    <span className={`text-sm ${d.color || 'text-gray-600'}`}>{d.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['Fully Furnished', 'Panoramic Views', 'Private Balconies', 'Premium Finishes'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-brand-light text-brand-teal text-xs font-semibold rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Room tabs */}
          <AnimatedSection className="mt-20">
            <div className="text-center mb-10">
              <span className="text-brand-teal text-xs uppercase tracking-[0.25em] font-medium">Floor Plan</span>
              <h3 className="text-3xl font-bold text-brand-dark mt-2">Rooms &amp; Layout</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {rooms.map((room) => (
                <button key={room.id} onClick={() => setActiveTab(room.id)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${activeTab === room.id ? 'bg-brand-teal text-white shadow-lg shadow-brand-teal/20' : 'bg-white text-gray-500 border border-gray-200 hover:border-brand-teal/30 hover:text-brand-teal'}`}
                >
                  {room.title}
                </button>
              ))}
            </div>
            {rooms.map((room) => (
              <div key={room.id} className={`transition-all duration-500 ${activeTab === room.id ? 'block' : 'hidden'}`}>
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-brand-dark mb-4">{room.title}</h4>
                    <p className="text-gray-500 leading-relaxed mb-6">{room.desc}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {room.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                            <svg className="w-3 h-3 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ============ SIGNATURE RESIDENCE - TYPE 3 ============ */}
      <section className="py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center">
            <span className="text-brand-teal text-xs uppercase tracking-[0.25em] font-medium">Signature Collection</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-3">The Royal Atlantis</h2>
            <p className="text-xl text-brand-teal font-light mt-1">Residence 1002</p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="w-12 h-px bg-gray-200" />
              <span className="text-gray-400 text-xs uppercase tracking-[0.2em]">4 Bedroom Signature Residence &middot; Type 3</span>
              <span className="w-12 h-px bg-gray-200" />
            </div>
          </AnimatedSection>

          {/* Full-width image */}
          <AnimatedSection className="mt-12">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img src={type3Hero} alt="" className="w-full h-[400px] sm:h-[500px] object-cover transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-lg rounded-xl px-4 py-2.5 border border-white/10">
                  <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-white text-xs font-medium">Full Palm &amp; Sea View</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-lg rounded-xl px-4 py-2.5 border border-white/10">
                  <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-white text-xs font-medium">440 SQM Total Area</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Specs row */}
          <AnimatedSection className="mt-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Living Area', value: type3Property.livingArea },
                { label: 'Balcony Area', value: type3Property.balconyArea },
                { label: 'Total Area', value: type3Property.totalArea },
                { label: 'Layout', value: type3Property.layout },
              ].map((spec, i) => (
                <div key={i} className="bg-white rounded-xl px-5 py-5 border border-gray-100 text-center">
                  <div className="text-2xl font-bold text-brand-dark font-number">{spec.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">{spec.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Narrative + Highlights */}
          <AnimatedSection className="mt-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <span className="text-brand-teal text-xs uppercase tracking-[0.25em] font-medium">Luxury Living</span>
                <h3 className="text-3xl font-bold text-brand-dark mt-2 mb-6">
                  Experience Elevated<br />
                  <span className="text-brand-teal">Waterfront Living</span>
                </h3>
                <div className="space-y-4 text-gray-500 leading-relaxed text-sm">
                  <p>
                    Experience elevated waterfront living at The Royal Atlantis, one of Dubai's most iconic luxury destinations. This stunning 4-bedroom signature residence offers breathtaking full sea, Palm, and skyline views combined with exceptional architectural elegance and premium modern interiors.
                  </p>
                  <p>
                    Designed for sophisticated living, the apartment features expansive living spaces, stylish bedrooms, elegant bathrooms, and spacious balconies that seamlessly connect indoor comfort with outdoor luxury.
                  </p>
                  <p>
                    Located in the prestigious Royal Atlantis, this residence delivers world-class luxury, privacy, and resort-style living in the heart of Dubai. Perfect for families and investors seeking elegance, exclusivity, and unmatched views.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.2em]">Property Highlights</span>
                  <div className="mt-6 space-y-5">
                    {type3Highlights.slice(0, 6).map((h, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0">
                          <div className="text-brand-teal">{h.icon}</div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-brand-dark">{h.title}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{h.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ============ CATEGORIZED GALLERY ============ */}
          <AnimatedSection className="mt-20">
            <div className="flex items-center gap-3 justify-center mb-2">
              <span className="w-8 h-px bg-gray-200" />
              <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.2em]">Gallery</span>
              <span className="w-8 h-px bg-gray-200" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-brand-dark text-center mb-3">
              A Glimpse Inside
            </h3>

            {/* Category tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {galleryCategories.map((cat) => (
                <button key={cat.id} onClick={() => setGalleryCat(cat.id)}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${galleryCat === cat.id ? 'bg-brand-teal text-white shadow-md shadow-brand-teal/20' : 'bg-white text-gray-500 border border-gray-200 hover:border-brand-teal/30 hover:text-brand-teal'}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Category images */}
            {galleryCategories.map((cat) => (
              <div key={cat.id} className={`transition-all duration-500 ${galleryCat === cat.id ? 'block' : 'hidden'}`}>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.images.map((img, i) => (
                    <div key={i} className="relative rounded-xl overflow-hidden group/cat shadow-sm hover:shadow-lg transition-all duration-500">
                      <img src={img} alt={`${cat.label} ${i + 1}`} className="w-full h-64 object-cover transition-all duration-700 group-hover/cat:scale-110" />
                      <div className="absolute inset-0 bg-black/0 group-hover/cat:bg-black/10 transition-all duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </AnimatedSection>

          {/* Features */}
          <AnimatedSection className="mt-16">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm">
              <div className="text-center mb-10">
                <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.2em]">Why This Residence</span>
                <h3 className="text-2xl font-bold text-brand-dark mt-2">Key Features</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {type3Highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md hover:border-brand-teal/10 transition-all duration-300 border border-transparent">
                    <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0">
                      <div className="text-brand-teal w-5 h-5">{h.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-dark">{h.title}</h4>
                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection className="mt-16">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={type3Hero2} alt="" className="w-full h-[320px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-brand-dark/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <span className="text-brand-teal text-xs uppercase tracking-[0.3em] font-medium mb-2">Discover Your Dream Home</span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">Live at The <span className="text-brand-teal">Royal Atlantis</span></h3>
                <p className="text-white/50 text-sm max-w-md mb-6">
                  Contact Venturis Realtors today for more details and private viewing arrangements.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link to="/contact" className="px-7 py-3 bg-gradient-to-br from-brand-teal to-brand-navy text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-teal/20 hover:-translate-y-0.5 transition-all">
                    Schedule Private Viewing
                  </Link>
                  <a href="tel:+971585318860" className="px-7 py-3 border border-white/20 text-white/70 text-sm font-semibold rounded-xl hover:bg-white/10 hover:text-white transition-all">
                    Call +971 58 531 8860
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ BLUEWATERS ISLAND - LUXURY TOWNHOUSE ============ */}
      <section className="py-28 bg-gradient-to-b from-white via-brand-light/30 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="text-brand-teal text-xs uppercase tracking-[0.25em] font-medium">Exclusive Listing</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-3">Bluewaters Island</h2>
            <p className="text-xl text-brand-teal font-light mt-1">Luxury 2-Storey Townhouse</p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="w-12 h-px bg-gray-200" />
              <span className="text-gray-400 text-xs uppercase tracking-[0.2em]">4 Bedroom &middot; 620 SQ.M. &middot; Dubai</span>
              <span className="w-12 h-px bg-gray-200" />
            </div>
          </AnimatedSection>

          {/* Hero banner */}
          <AnimatedSection className="mt-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img src={bwi + 'Views%20(1).png'} alt="" className="w-full h-[420px] sm:h-[520px] object-cover transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2.5">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-xl px-4 py-2.5 border border-white/10">
                  <svg className="w-4 h-4 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-white text-xs font-medium">Sea &amp; Promenade Views</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-xl px-4 py-2.5 border border-white/10">
                  <svg className="w-4 h-4 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-white text-xs font-medium">Private Pool Terrace</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-xl px-4 py-2.5 border border-white/10">
                  <svg className="w-4 h-4 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <span className="text-white text-xs font-medium">6m Ceiling Height</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Specs */}
          <AnimatedSection className="mt-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Bedrooms', value: '4' },
                { label: 'Total Area', value: '620 SQ.M.' },
                { label: 'Price', value: '42.4M AED' },
                { label: 'Status', value: 'Vacant' },
              ].map((spec, i) => (
                <div key={i} className="bg-white rounded-xl px-5 py-5 border border-gray-100 text-center shadow-sm hover:shadow-md hover:border-brand-teal/20 transition-all duration-300">
                  <div className="text-2xl font-bold text-brand-dark font-number">{spec.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">{spec.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Narrative + Highlights */}
          <AnimatedSection className="mt-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <span className="text-brand-teal text-xs uppercase tracking-[0.25em] font-medium">Waterfront Living</span>
                <h3 className="text-3xl font-bold text-brand-dark mt-2 mb-6">
                  Exceptional Island<br />
                  <span className="text-brand-teal">Waterfront Residence</span>
                </h3>
                <div className="space-y-4 text-gray-500 leading-relaxed text-sm">
                  <p>
                    Experience exceptional waterfront living in this stunning 2-storey townhouse located on the prestigious Bluewaters Island, Dubai. Designed with elegance and modern sophistication, this fully furnished 4-bedroom residence offers expansive interiors, premium finishes, and breathtaking sea and promenade views.
                  </p>
                  <p>
                    Featuring a dramatic double-height living room with impressive 6-meter ceilings, the home creates a bright and luxurious atmosphere perfect for modern family living and entertaining.
                  </p>
                  <p>
                    This exclusive townhouse combines luxury, privacy, and resort-style living in one of Dubai's most sought-after waterfront communities. Perfect for homeowners and investors seeking premium architecture and world-class surroundings.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.2em]">Property Highlights</span>
                  <div className="mt-6 space-y-5">
                    {bwiHighlights.slice(0, 6).map((h, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0">
                          <div className="text-brand-teal">{h.icon}</div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-brand-dark">{h.title}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{h.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Gallery */}
          <AnimatedSection className="mt-20">
            <div className="flex items-center gap-3 justify-center mb-2">
              <span className="w-8 h-px bg-gray-200" />
              <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.2em]">Gallery</span>
              <span className="w-8 h-px bg-gray-200" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-brand-dark text-center mb-3">
              A Glimpse Inside
            </h3>

            {/* Category tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {bwiGalleryCategories.map((cat) => (
                <button key={cat.id} onClick={() => setBwiGalleryCat(cat.id)}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${bwiGalleryCat === cat.id ? 'bg-brand-teal text-white shadow-md shadow-brand-teal/20' : 'bg-white text-gray-500 border border-gray-200 hover:border-brand-teal/30 hover:text-brand-teal'}`}
                >
                  {cat.label}
                  <span className="ml-1.5 text-[10px] opacity-60">({cat.count})</span>
                </button>
              ))}
            </div>

            {/* Category images */}
            {bwiGalleryCategories.map((cat) => (
              <div key={cat.id} className={`transition-all duration-500 ${bwiGalleryCat === cat.id ? 'block' : 'hidden'}`}>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.images.map((img, i) => (
                    <div key={i} className={`relative rounded-xl overflow-hidden group/cat shadow-sm hover:shadow-lg transition-all duration-500 ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                      <img src={img} alt={`${cat.label} ${i + 1}`} className={`w-full object-cover transition-all duration-700 group-hover/cat:scale-110 ${i === 0 ? 'h-80 sm:h-96' : 'h-56 sm:h-64'}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/cat:opacity-100 transition-all duration-500" />
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1 text-[10px] font-semibold text-brand-dark opacity-0 group-hover/cat:opacity-100 transition-all duration-500">
                        {i + 1} / {cat.images.length}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </AnimatedSection>

          {/* Extra Features */}
          <AnimatedSection className="mt-16">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm">
              <div className="text-center mb-8">
                <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.2em]">Additional Features</span>
                <h3 className="text-2xl font-bold text-brand-dark mt-2">Everything You Need</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {bwiExtraFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-brand-light rounded-xl px-5 py-3 border border-brand-teal/10 hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all duration-300 cursor-default group">
                    <div className="w-6 h-6 rounded-full bg-brand-teal/10 group-hover:bg-white/20 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-brand-teal group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-brand-dark group-hover:text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection className="mt-16">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={bwi + 'Views%20(3).png'} alt="" className="w-full h-[340px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-brand-dark/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <span className="text-brand-teal text-xs uppercase tracking-[0.3em] font-medium mb-2">Premium Island Lifestyle</span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">42,400,000 <span className="text-brand-teal text-2xl">AED</span></h3>
                <p className="text-white/50 text-sm max-w-md mb-6">
                  4-Bedroom Luxury Townhouse on <span className="text-white/80">Bluewaters Island</span>
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link to="/contact" className="px-7 py-3 bg-gradient-to-br from-brand-teal to-brand-navy text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-teal/20 hover:-translate-y-0.5 transition-all">
                    Schedule Private Viewing
                  </Link>
                  <a href="tel:+971585318860" className="px-7 py-3 border border-white/20 text-white/70 text-sm font-semibold rounded-xl hover:bg-white/10 hover:text-white transition-all">
                    Call +971 58 531 8860
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ INVESTMENT ============ */}
      <section className="py-0">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px] flex items-center p-10 lg:p-16 overflow-hidden group bg-black">
            <div className="absolute inset-0 opacity-20">
              <img src="/Ain%20Dubai%20(Dubai,%20UAE).jpg" alt="" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-brand-dark/80" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-brand-teal text-xs uppercase tracking-[0.25em] font-medium">Market</span>
              <h3 className="text-3xl font-bold text-white mt-2 mb-4">UAE Market</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-md mb-5">
                The UAE offers a tax-free environment, world-class infrastructure, and a resilient property market. From Dubai's iconic skyline to Abu Dhabi's prestigious developments.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Freehold Areas', 'Tax-Free Returns', 'Residency Visa', 'Luxury Living'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white/5 text-white/50 text-xs rounded-full border border-white/10">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative min-h-[420px] flex items-center p-10 lg:p-16 overflow-hidden group bg-black">
            <div className="absolute inset-0 opacity-20">
              <img src="/Building.png" alt="" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-bl from-black via-black/95 to-brand-dark/80" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-navy to-brand-steel flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <span className="text-brand-teal text-xs uppercase tracking-[0.25em] font-medium">Market</span>
              <h3 className="text-3xl font-bold text-white mt-2 mb-4">USA Market</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-md mb-5">
                The United States remains one of the world's most stable and lucrative real estate markets. We connect investors with premium opportunities across major cities.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Stable Economy', 'Strong Appreciation', 'Diverse Portfolio', 'Global Hub'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white/5 text-white/50 text-xs rounded-full border border-white/10">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 bg-gradient-to-br from-brand-from via-brand-navy to-brand-to relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-teal rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-white/50 text-xs uppercase tracking-[0.3em] font-medium">Get in Touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
            Find Your <span className="text-brand-teal">Perfect Property</span>
          </h2>
          <p className="text-white/50 text-sm max-w-lg mx-auto mb-10">
            Whether you are looking for a luxury apartment in Dubai, a villa in the UAE, or an investment property in the USA, our team is ready to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-3.5 bg-white text-brand-dark font-semibold rounded-xl hover:bg-white/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-white/10">
              Schedule a Consultation
            </Link>
            <a href="tel:+971585318860" className="px-8 py-3.5 border-2 border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 hover:text-white hover:border-white/40 transition-all">
              Call +971 58 531 8860
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
