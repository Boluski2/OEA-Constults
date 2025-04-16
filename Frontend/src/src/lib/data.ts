
export const services = [
  {
    id: 1,
    title: "Drone Mapping",
    description: "High-precision aerial mapping using advanced drone technology to capture detailed topographic data for various applications.",
    icon: "MapIcon"
  },
  {
    id: 2,
    title: "Surveying",
    description: "Comprehensive land surveying services including boundary surveys, topographic surveys, and construction staking with exceptional accuracy.",
    icon: "GlobeIcon"
  },
  {
    id: 3,
    title: "GIS Analysis",
    description: "In-depth Geographic Information System analysis to transform spatial data into actionable insights for informed decision-making.",
    icon: "BarChartIcon"
  },
  {
    id: 4,
    title: "Urban Planning",
    description: "Data-driven urban planning solutions that integrate spatial analysis to create sustainable, efficient, and livable communities.",
    icon: "BuildingIcon"
  },
];

export const projects = [
  {
    id: 1,
    title: "Lagos Urban Development Mapping",
    description: "Comprehensive drone mapping of Lagos Metropolitan Area to support urban planning and infrastructure development initiatives.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    client: "Lagos State Government",
    location: "Lagos, Nigeria",
    year: "2023",
    serviceId: 1 // Drone Mapping
  },
  {
    id: 2,
    title: "Abuja Infrastructure Assessment",
    description: "Detailed survey and GIS analysis for critical infrastructure assessment in Nigeria's capital city.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    client: "Federal Capital Territory Administration",
    location: "Abuja, Nigeria",
    year: "2022",
    serviceId: 2 // Surveying
  },
  {
    id: 3,
    title: "Ghana Agricultural Mapping Project",
    description: "Large-scale drone mapping of agricultural lands to optimize farming practices and improve crop yields.",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    client: "Ghana Ministry of Agriculture",
    location: "Accra, Ghana",
    year: "2022",
    serviceId: 1 // Drone Mapping
  },
  {
    id: 4,
    title: "Nairobi Smart City Initiative",
    description: "Comprehensive GIS analysis and mapping for Nairobi's smart city transformation project.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    client: "City of Nairobi",
    location: "Nairobi, Kenya",
    year: "2021",
    serviceId: 4 // Urban Planning
  },
  {
    id: 5,
    title: "Nairobi Smart City Initiative",
    description: "Comprehensive GIS analysis and mapping for Nairobi's smart city transformation project.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    client: "City of Nairobi",
    location: "Nairobi, Kenya",
    year: "2021",
    serviceId: 3 // GIS Analysis
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Adekunle Osude",
    role: "MD/CEO, OEA Consults LTD",
    bio: "The principal of OEA CONSULTS, is a registered Town Planner and a fellow of the Nigerian Institute of Town Planners with over 30 years in the digitization of planning processes in Lagos State as well as the introduction of new technologies such as the use of drones in mapping and development control in the Lagos state.",
    image: "./images/Adekunle Osude.jpg",
    expertise: ["Urban Planning", "Geospatial Engineering", "Business Strategy", "Policy Development", "Data Analytics"],
    socialLinks: {
      email: "oluwaseyi.adeyemi@oeaconsult.com",
      linkedin: "https://linkedin.com/in/oluwasey-adeyemi",
      twitter: "https://twitter.com/oeaconsult"
    },
    achievements: [
      "Led mapping projects for 3 major African cities",
      "Published 15+ research papers in top-tier journals",
      "Awarded the Nigerian Geospatial Excellence Award (2021)"
    ],
    education: "Ph.D. in Geomatics Engineering, University College London",
  },
  {
    id: 2,
    name: "Joseph Aro",
    role: "Director of Operations",
    bio: "A creative GIS Analyst, UAV Pilot, and Data Analyst with over a decade of experience in deploying end-to-end GIS and Data Solutions, Remote Sensing analysis, Drone Mapping and Surveys, Database Design, and Administration, as well as Spatial Analysis. He holds a Bachelor’s and a Masters’s degree in Geography with a focus on GIS, Climate Change Impacts, and Disaster Risk Reductions. He is the director of GISCleric International and the Co-founder of OEA Consults Limited.",
    image: "./images/Joseph Aro.jpg",
    expertise: ["GIS Analysis", "Remote Sensing", "Data Modeling", "Drone Piloting", "Aerial Photogrammetry"],
    socialLinks: {
      email: "oluwaseyi.adeyemi@oeaconsult.com",
      linkedin: "https://linkedin.com/in/oluwasey-adeyemi",
      twitter: "https://twitter.com/oeaconsult"
    },
    achievements: [
      "Led mapping projects for 3 major African cities",
      "Published 15+ research papers in top-tier journals",
      "Awarded the Nigerian Geospatial Excellence Award (2021)"
    ],
    education: "Ph.D. in Geomatics Engineering, University College London",
  },
  {
    id: 3,
    name: "Oluwatobi Aiyelokun",
    role: "Technical Manager - Operations",
    bio: "Oluwatobi is a highly motivated and experienced Water Resources and Environmental Engineer with a passion for the integration of Geospatial Artificial Intelligence (GeoAI), Computational Fluid Dynamics (CFD), and fluvial hydraulics technologies in the urban planning processes. With more than thirteen years of experience in the Geospatial Intelligence Industry, he has developed a strong skill set and a deep understanding of the application of Geospatial Information Technology (GIT). He is responsible for overseeing general GEOINT processes and ensuring that hydro-environmental risks are catered for in urban planning processes as the lead of the Geospatial Intelligence unit.",
    image: "./images/Oluwatobi Aiyelokun.jpg",
    // expertise: ["Drone Piloting", "Aerial Photogrammetry", "Equipment Maintenance"]
    expertise: ["Machine Learning", "GIS Analysis", "Equipment Maintenance"],
    socialLinks: {
      email: "oluwaseyi.adeyemi@oeaconsult.com",
      linkedin: "https://linkedin.com/in/oluwasey-adeyemi",
      twitter: "https://twitter.com/oeaconsult"
    },
    achievements: [
      "Led mapping projects for 3 major African cities",
      "Published 15+ research papers in top-tier journals",
      "Awarded the Nigerian Geospatial Excellence Award (2021)"
    ],
    education: "Ph.D. in Geomatics Engineering, University College London",
  },
  {
    id: 4,
    name: "Kehinde Adigun",
    role: "Lead, Planning/ Project Coordinator",
    bio: "Kehinde Adigun is a certified and experienced Town Planner who possesses a solid educational background in utilizing knowledge pertaining to environmental initiatives regarding urban and regional planning. He is knowledgeable of standards and theories concerning regional planning and environmental management. He is skilled in 2D urban designs, end-to-end data collection processes, Spatial Analysis, field engagements, and drone mapping. He is a visionary professional who achieves unprecedented results through innovation, initiative, and resourcefulness. He holds a bachelor’s degree in urban and Regional Planning (FUTA), and he currently pursues a master’s in Geospatial Data Science. He is a member of several professional organizations, including the Nigerian Institute of Town Planners (NITP) and the Town Planners Registration Council of Nigeria (TOPREC), where he continues to contribute to the development of his field. He is also a member of the American Association of Geographers and holds TOP Level 1 certification as a drone pilot, demonstrating his commitment to staying up to date with the latest technology and industry practices.",
    image: "./images/Kehinde Adigun.jpg",
    expertise: ["Land Surveying", "Topographic Mapping", "Boundary Determination", "Drone Piloting", "Aerial Photogrammetry"],
    socialLinks: {
      email: "oluwaseyi.adeyemi@oeaconsult.com",
      linkedin: "https://linkedin.com/in/oluwasey-adeyemi",
      twitter: "https://twitter.com/oeaconsult"
    },
    achievements: [
      "Led mapping projects for 3 major African cities",
      "Published 15+ research papers in top-tier journals",
      "Awarded the Nigerian Geospatial Excellence Award (2021)"
    ],
    education: "Ph.D. in Geomatics Engineering, University College London",
  },
  {
    id: 5,
    name: "Damilare Adetunji",
    role: "Lead, Geospatial Intelligence",
    bio: "Damilare is a skilled Geospatial Intelligence Analyst with a degree in Urban and Regional Planning from Obafemi Awolowo University. He has proficiency in data science, machine learning, software development, and geospatial analysis using Python, JavaScript, QGIS, and ArcGIS. As a registered member of the Town Planning Registration Council of Nigeria. He is committed to urban planning and passionate about using innovative technology to solve spatial problems. He is a collaborative team player, with a results-driven approach and attention to detail, making him a valuable asset to the team. His expertise and passion for geospatial analysis continue to contribute to the success of various projects.",
    image: "./images/Damilare Adetunji.jpg",
    expertise: ["data science", "machine learning", "software development", "geospatial analysis"],
    socialLinks: {
      email: "oluwaseyi.adeyemi@oeaconsult.com",
      linkedin: "https://linkedin.com/in/oluwasey-adeyemi",
      twitter: "https://twitter.com/oeaconsult"
    },
    achievements: [
      "Led mapping projects for 3 major African cities",
      "Published 15+ research papers in top-tier journals",
      "Awarded the Nigerian Geospatial Excellence Award (2021)"
    ],
    education: "Ph.D. in Geomatics Engineering, University College London",
  },
  {
    id: 6,
    name: "FALILAT OLALEKAN",
    role: "Deputy Operations Manager",
    bio: "A Geospatial Developer, Urban Planner and data Science enthusiast with special interest in machine learning, motivated to solve environmental challenges using his knowledge of GIS, Programming and Web Development.",
    image: "./images/Falilat Olalekan.png",
    expertise: ["Spatial Analysis", "Database Management", "Programming"],
    socialLinks: {
      email: "oluwaseyi.adeyemi@oeaconsult.com",
      linkedin: "https://linkedin.com/in/oluwasey-adeyemi",
      twitter: "https://twitter.com/oeaconsult"
    },
    achievements: [
      "Led mapping projects for 3 major African cities",
      "Published 15+ research papers in top-tier journals",
      "Awarded the Nigerian Geospatial Excellence Award (2021)"
    ],
    education: "Ph.D. in Geomatics Engineering, University College London",
  },
  {
    id: 7,
    name: "ADERINOLA ELEGBEDE",
    role: "Business Development Manager",
    bio: "A Geospatial Developer, Urban Planner and data Science enthusiast with special interest in machine learning, motivated to solve environmental challenges using his knowledge of GIS, Programming and Web Development.",
    image: "./images/Aderinola Elegbede.png",
    expertise: ["Spatial Analysis", "Database Management", "Programming"],
    socialLinks: {
      email: "oluwaseyi.adeyemi@oeaconsult.com",
      linkedin: "https://linkedin.com/in/oluwasey-adeyemi",
      twitter: "https://twitter.com/oeaconsult"
    },
    achievements: [
      "Led mapping projects for 3 major African cities",
      "Published 15+ research papers in top-tier journals",
      "Awarded the Nigerian Geospatial Excellence Award (2021)"
    ],
    education: "Ph.D. in Geomatics Engineering, University College London",
  },
    {
    id: 8,
    name: "Fehintola Akinsete",
    role: "Associate Planning Information Officer",
    bio: "A registered town planner with a degree in Urban and Regional Planning. She is a member of the Nigerian Institute of Town Planners with a passion for sustainable urban planning, and risk and disaster management.",
    image: "./images/Fehintola Akinsete.jpg",
    expertise: ["Urban Design", "Master Planning", "Sustainable Development"]
  },
  {
    expertise: ["Urban Planning", "Geospatial Engineering", "Business Strategy", "Policy Development", "Data Analytics"],
    socialLinks: {
      email: "oluwaseyi.adeyemi@oeaconsult.com",
      linkedin: "https://linkedin.com/in/oluwasey-adeyemi",
      twitter: "https://twitter.com/oeaconsult"
    },
    achievements: [
      "Led mapping projects for 3 major African cities",
      "Published 15+ research papers in top-tier journals",
      "Awarded the Nigerian Geospatial Excellence Award (2021)"
    ],
    education: "Ph.D. in Geomatics Engineering, University College London"
  },
  {
    id: 9,
    name: "Shedrach Adegene",
    role: "Geospatial Cloud Solutions Architect",
    bio: "Shedrach is a versatile professional with expertise in software development, cloud engineering, and geospatial analysis. With a Bachelor’s degree in civil engineering, he has over 5 years of experience in developing and deploying various software solutions. He currently specializes as an AWS Cloud Solutions Architect with OEA, combining his Geospatial knowledge along with his cloud computing expertise to create innovative solutions to help the Organization improve its efficiency and competitiveness.",
    image: "./images/Shedrach Adegene.jpg",
    expertise: ["Spatial Analysis", "Database Management", "Programming"],
    socialLinks: {
      email: "oluwaseyi.adeyemi@oeaconsult.com",
      linkedin: "https://linkedin.com/in/oluwasey-adeyemi",
      twitter: "https://twitter.com/oeaconsult"
    },
    achievements: [
      "Led mapping projects for 3 major African cities",
      "Published 15+ research papers in top-tier journals",
      "Awarded the Nigerian Geospatial Excellence Award (2021)"
    ],
    education: "Ph.D. in Geomatics Engineering, University College London",
  },
  {
    id: 10,
    name: "Augustus Inyang",
    role: "Geospatial Analyst",
    bio: "An expert in data science and machine learning, with a wealth of knowledge and experience in the field. As a Geospatial Analyst here at OEA Consults, he leverages this expertise to develop innovative solutions for clients.",
    image: "./images/Augustus Inyang.jpg",
    expertise: ["Spatial Analysis", "Database Management", "Programming"],
    socialLinks: {
      email: "oluwaseyi.adeyemi@oeaconsult.com",
      linkedin: "https://linkedin.com/in/oluwasey-adeyemi",
      twitter: "https://twitter.com/oeaconsult"
    },
    achievements: [
      "Led mapping projects for 3 major African cities",
      "Published 15+ research papers in top-tier journals",
      "Awarded the Nigerian Geospatial Excellence Award (2021)"
    ],
    education: "Ph.D. in Geomatics Engineering, University College London",
  },
  {
    id: 11,
    name: "Olajumoke Koko",
    role: "Junior Environmental Analyst",
    bio: "An Environmental Toxicologist with a passion for Environmental Impact Assessment, Sustainable waste management, pollution prevention and control, Soil and water safety monitoring and analysis, and Toxicity assessment",
    image: "./images/Koko Olajumoke.jpg",
    expertise: ["Spatial Analysis", "Database Management", "Programming"]
  }, 

   {
    id: 12,
    name: "Ibrahim Hudu",
    role: "Office Administrator",
    bio: "is an experienced Planning Officer and GIS Analyst who possesses solid educational background in utilizing knowledge pertaining to urban and regional planning activities.",
    image: "./images/Ibrahim Hudu.jpg",
    expertise: ["Spatial Analysis", "Database Management", "Programming"],
    socialLinks: {
      email: "oluwaseyi.adeyemi@oeaconsult.com",
      linkedin: "https://linkedin.com/in/oluwasey-adeyemi",
      twitter: "https://twitter.com/oeaconsult"
    },
    achievements: [
      "Led mapping projects for 3 major African cities",
      "Published 15+ research papers in top-tier journals",
      "Awarded the Nigerian Geospatial Excellence Award (2021)"
    ],
    education: "Ph.D. in Geomatics Engineering, University College London"
  },
  {
    id: 13,
    name: "TAIWO ALLI",
    role: "Data and Information Analyst",
    bio: "is an experienced Planning Officer and GIS Analyst who possesses solid educational background in utilizing knowledge pertaining to urban and regional planning activities.",
    image: "./images/Tiawo.jpg",
    expertise: ["Spatial Analysis", "Database Management", "Programming"],
    socialLinks: {
      email: "oluwaseyi.adeyemi@oeaconsult.com",
      linkedin: "https://linkedin.com/in/oluwasey-adeyemi",
      twitter: "https://twitter.com/oeaconsult"
    },
    achievements: [
      "Led mapping projects for 3 major African cities",
      "Published 15+ research papers in top-tier journals",
      "Awarded the Nigerian Geospatial Excellence Award (2021)"
    ],
    education: "Ph.D. in Geomatics Engineering, University College London"
  },
  {
    id: 14,
    name: "EFEJUKU PRECIOUS",
    role: "Junior Business Development / Media Officer",
    bio: "is an experienced Planning Officer and GIS Analyst who possesses solid educational background in utilizing knowledge pertaining to urban and regional planning activities.",
    image: "./images/preciouse.jpg",
    expertise: ["Spatial Analysis", "Database Management", "Programming"],
    socialLinks: {
      email: "oluwaseyi.adeyemi@oeaconsult.com",
      linkedin: "https://linkedin.com/in/oluwasey-adeyemi",
      twitter: "https://twitter.com/oeaconsult"
    },
    achievements: [
      "Led mapping projects for 3 major African cities",
      "Published 15+ research papers in top-tier journals",
      "Awarded the Nigerian Geospatial Excellence Award (2021)"
    ],
    education: "Ph.D. in Geomatics Engineering, University College London"
  },
  {
    id: 15,
    name: "SONDE OLUWATIMILEYIN",
    role: "Junior Planning Officer",
    bio: "is an experienced Planning Officer and GIS Analyst who possesses solid educational background in utilizing knowledge pertaining to urban and regional planning activities.",
    image: "./images/Timileyin.jpg",
    expertise: ["Spatial Analysis", "Database Management", "Programming"],
    socialLinks: {
      email: "oluwaseyi.adeyemi@oeaconsult.com",
      linkedin: "https://linkedin.com/in/oluwasey-adeyemi",
      twitter: "https://twitter.com/oeaconsult"
    },
    achievements: [
      "Led mapping projects for 3 major African cities",
      "Published 15+ research papers in top-tier journals",
      "Awarded the Nigerian Geospatial Excellence Award (2021)"
    ],
    education: "Ph.D. in Geomatics Engineering, University College London",
  },
   
];

export const companyInfo = {
  name: "OEA Consult",
  founding: 2018,
  mission: "To provide novel and innovative solutions using drones, GIS, and artificial intelligence in data collection, analysis, and visualization.",
  vision: "To enable effective and efficient decision-making in planning, design, and urban development, by providing access to real-time data solutions.",
  values: [
    "Excellence in all we do",
    "Innovation at our core",
    "Integrity and transparency",
    "Sustainability and positive impact",
    "Collaboration and knowledge sharing"
  ],
  locations: [
    {
      city: "Lagos",
      country: "Nigeria",
      address: "1a Raji Oladimeji Crescent, off CMD Road, Magodo II, Lagos state, Nigeria",
      isHeadquarters: true
    },
  ],
  contact: {
    email: "info@oeaconsults.com",
    phone: "+2347069681949",
    social: {
      twitter: "https://x.com/consultsoea",
      linkedin: "https://www.linkedin.com/company/oeaconsults/?originalSubdomain=ng",
      instagram: "https://www.instagram.com/oeaconsults/"
    }
  }
};
