import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import styles from './nearbyjobs.style'
import { useRouter } from 'expo-router'
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch'
const Nearbyjobs = () => {
  const router = useRouter();
  // const data = 
  // const data = [
  //   {
  //     "employer_name": "Turbofish",
  //     "employer_logo": null,
  //     "employer_website": null,
  //     "employer_company_type": null,
  //     "job_publisher": "Greenhouse",
  //     "job_id": "qj9ZCdmcwJWJLKO8AAAAAA==",
  //     "job_employment_type": "FULLTIME",
  //     "job_title": "Bitcoin Developer",
  //     "job_apply_link": "https://boards.greenhouse.io/turbofish/jobs/4047710007",
  //     "job_apply_is_direct": false,
  //     "job_apply_quality_score": 0.8699,
  //     "apply_options": [
  //       {
  //         "publisher": "Greenhouse",
  //         "apply_link": "https://boards.greenhouse.io/turbofish/jobs/4047710007",
  //         "is_direct": false
  //       },
  //       {
  //         "publisher": "LinkedIn",
  //         "apply_link": "https://www.linkedin.com/jobs/view/bitcoin-developer-at-turbofish-3684325856",
  //         "is_direct": false
  //       },
  //       {
  //         "publisher": "Glassdoor",
  //         "apply_link": "https://www.glassdoor.com/job-listing/bitcoin-developer-turbofish-JV_IC1139761_KO0,17_KE18,27.htm?jl=1008796082944",
  //         "is_direct": true
  //       }
  //     ],
  //     "job_description": "Turbofish is seeking a talented Bitcoin Developer to join our team. As a Bitcoin Developer, you will be responsible for helping us contribute to Nomic, a decentralized, non-custodial Bitcoin bridge.\n\nResponsibilities\n• Collaborate with team members to implement software solutions\n• Write clean, efficient, maintainable, and secure code in Rust\n• Participate in code reviews and provide constructive feedback to other developers\n• Stay up-to-date with the latest trends and technologies in Bitcoin development\n\nQualifications\n• Experience with Bitcoin development and blockchain applications\n• Familiarity with Tendermint consensus\n• Participate in Bitcoin community\n• Knowledge of computer science fundamentals such as data structures and algorithms\n• Excellent problem solving and debugging skills\n• Strong communication and collaboration skills\n\nNice-to-haves:\n• Experience with Rust, and eagerness to learn Rust.\n\nBenefits\n• Salary: $80,000 to $120,000 per year\n• Competitive base salary based on experience\n• Equity compensation\n• Paid time off/vacation\n• Relocation package\n• Flexible hybrid working schedule\n• Comprehensive benefit package including US medical, optical and dental health insurance coverage\n\nIf you’re passionate about Rust, Bitcoin, and blockchain technology, and you’re excited to work on cutting-edge projects with a talented team, we’d love to hear from you. Apply today to join the Turbofish team!",
  //     "job_is_remote": false,
  //     "job_posted_at_timestamp": 1691020800,
  //     "job_posted_at_datetime_utc": "2023-08-03T00:00:00.000Z",
  //     "job_city": "Austin",
  //     "job_state": "TX",
  //     "job_country": "US",
  //     "job_latitude": 30.267153,
  //     "job_longitude": -97.74306,
  //     "job_benefits": [
  //       "paid_time_off",
  //       "dental_coverage",
  //       "health_insurance"
  //     ],
  //     "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=bitcoin+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=bitcoin+developer&htidocid=qj9ZCdmcwJWJLKO8AAAAAA%3D%3D",
  //     "job_offer_expiration_datetime_utc": null,
  //     "job_offer_expiration_timestamp": null,
  //     "job_required_experience": {
  //       "no_experience_required": false,
  //       "required_experience_in_months": null,
  //       "experience_mentioned": true,
  //       "experience_preferred": false
  //     },
  //     "job_required_skills": null,
  //     "job_required_education": {
  //       "postgraduate_degree": false,
  //       "professional_certification": false,
  //       "high_school": false,
  //       "associates_degree": false,
  //       "bachelors_degree": false,
  //       "degree_mentioned": false,
  //       "degree_preferred": false,
  //       "professional_certification_mentioned": false
  //     },
  //     "job_experience_in_place_of_education": false,
  //     "job_min_salary": null,
  //     "job_max_salary": null,
  //     "job_salary_currency": null,
  //     "job_salary_period": null,
  //     "job_highlights": {
  //       "Qualifications": [
  //         "Experience with Bitcoin development and blockchain applications",
  //         "Familiarity with Tendermint consensus",
  //         "Participate in Bitcoin community",
  //         "Knowledge of computer science fundamentals such as data structures and algorithms",
  //         "Excellent problem solving and debugging skills",
  //         "Strong communication and collaboration skills",
  //         "Experience with Rust, and eagerness to learn Rust"
  //       ],
  //       "Responsibilities": [
  //         "Collaborate with team members to implement software solutions",
  //         "Write clean, efficient, maintainable, and secure code in Rust",
  //         "Participate in code reviews and provide constructive feedback to other developers",
  //         "Stay up-to-date with the latest trends and technologies in Bitcoin development"
  //       ],
  //       "Benefits": [
  //         "Salary: $80,000 to $120,000 per year",
  //         "Competitive base salary based on experience",
  //         "Equity compensation",
  //         "Paid time off/vacation",
  //         "Relocation package",
  //         "Flexible hybrid working schedule",
  //         "Comprehensive benefit package including US medical, optical and dental health insurance coverage"
  //       ]
  //     },
  //     "job_job_title": null,
  //     "job_posting_language": "en",
  //     "job_onet_soc": "15113200",
  //     "job_onet_job_zone": "4"
  //   },
  //   {
  //     "employer_name": "CryptoRecruit",
  //     "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdH6W2x3ue0ZjShIDswBvqlxttGArJlA5SL7OV&s=0",
  //     "employer_website": null,
  //     "employer_company_type": null,
  //     "job_publisher": "LinkedIn",
  //     "job_id": "qMNrQbj3L-74bD40AAAAAA==",
  //     "job_employment_type": "FULLTIME",
  //     "job_title": "Blockchain Developer (Senior to Principal Level)",
  //     "job_apply_link": "https://www.linkedin.com/jobs/view/blockchain-developer-senior-to-principal-level-at-cryptorecruit-3756821268",
  //     "job_apply_is_direct": false,
  //     "job_apply_quality_score": 0.6548,
  //     "apply_options": [
  //       {
  //         "publisher": "LinkedIn",
  //         "apply_link": "https://www.linkedin.com/jobs/view/blockchain-developer-senior-to-principal-level-at-cryptorecruit-3756821268",
  //         "is_direct": false
  //       },
  //       {
  //         "publisher": "Jobgether",
  //         "apply_link": "https://jobgether.com/offer/6482731847d7acbfe8a2a0bd-blockchain-developer-senior-to-principal-level",
  //         "is_direct": false
  //       }
  //     ],
  //     "job_description": "Company\n\nThis client is one of the largest blockchain development companies in the world building out household name applications across finance, DeFi, NFT’s and general Blockchain SaaS solutions. Most of their employees operate fully remotely and we are looking for staff across a number of disciplines with this top tier client.\n\nResponsibilities\n• Join the full life cycle of blockchain and related software development, including requirement gathering, design, coding, testing, deployment, documentation and support\n• Focus on core blockchain infrastructure, including relevant service, framework and libraries\n• Contribute creativity and insight to solve both technical and business challenges\n• Connect with the developer community and facilitate technical partners\n• Promote technology best practice within the team\n\nRequirements\n• Qualification in Computing/Mathematics/Electronic Engineering or other relevant fields preferred\n• An ability to learn quickly and hit the ground running on a complex software project\n• Proficiency in Golang, Rust, or other mainstream blockchain development languages\n• Solid knowledge in computing theory including networking, data structures, algorithms, database theory and networking\n• Existing track record of R&D and execution of open source projects on known blockchain platforms such as Ethereum, Hyperledger, Neo and Bitcoin a great plus\n• Expertise in one of the following three areas would be of a great advantage:\n• Key-value store (e.g. RocksDB)\n• P2P\n• Virtual machine (e.g. EVM, Java VM, etc)\n\nPotential Skills\n• Experience working with major established blockchains\n• Knowledge of Ethereum-like blockchains\n• Familiarity with Ethereum code and smart contract development is an added bonus\n\nRemuneration And Benefits\n• Do something meaningful - be a part of the future of finance technology and one of the top companies in the industry\n• Fast moving, challenging and unique business problems\n• International work environment and flat organisation\n• Great career development opportunities in a growing company\n• Possibility for relocation and international transfers mid-career\n• Competitive salary\n• Flexible working hours\n• Casual work attire\n\nMake sure to follow us here to get our most live jobs https://www.linkedin.com/company/cryptorecruit\n\nCryptorecruit is the world’s leading specialist recruiter for the blockchain/cryptocurrency industry. We recruit positions from CEO, CTO, Project Managers, Solidity Developers, Frontend and Backend Blockchain Developers to Marketing/Sales and Customer Service roles. Please browse our website and at www.cryptorecruit.com to search all our job vacancies.",
  //     "job_is_remote": true,
  //     "job_posted_at_timestamp": 1699172332,
  //     "job_posted_at_datetime_utc": "2023-11-05T08:18:52.000Z",
  //     "job_city": null,
  //     "job_state": null,
  //     "job_country": "US",
  //     "job_latitude": 37.09024,
  //     "job_longitude": -95.71289,
  //     "job_benefits": null,
  //     "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=bitcoin+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=bitcoin+developer&htidocid=qMNrQbj3L-74bD40AAAAAA%3D%3D",
  //     "job_offer_expiration_datetime_utc": "2023-12-03T08:18:00.000Z",
  //     "job_offer_expiration_timestamp": 1701591480,
  //     "job_required_experience": {
  //       "no_experience_required": false,
  //       "required_experience_in_months": null,
  //       "experience_mentioned": true,
  //       "experience_preferred": false
  //     },
  //     "job_required_skills": null,
  //     "job_required_education": {
  //       "postgraduate_degree": false,
  //       "professional_certification": false,
  //       "high_school": false,
  //       "associates_degree": false,
  //       "bachelors_degree": true,
  //       "degree_mentioned": false,
  //       "degree_preferred": false,
  //       "professional_certification_mentioned": false
  //     },
  //     "job_experience_in_place_of_education": false,
  //     "job_min_salary": null,
  //     "job_max_salary": null,
  //     "job_salary_currency": null,
  //     "job_salary_period": null,
  //     "job_highlights": {
  //       "Qualifications": [
  //         "An ability to learn quickly and hit the ground running on a complex software project",
  //         "Proficiency in Golang, Rust, or other mainstream blockchain development languages",
  //         "Solid knowledge in computing theory including networking, data structures, algorithms, database theory and networking",
  //         "Existing track record of R&D and execution of open source projects on known blockchain platforms such as Ethereum, Hyperledger, Neo and Bitcoin a great plus",
  //         "Expertise in one of the following three areas would be of a great advantage:",
  //         "Key-value store (e.g. RocksDB)",
  //         "P2P",
  //         "Virtual machine (e.g",
  //         "EVM, Java VM, etc)",
  //         "Experience working with major established blockchains",
  //         "Knowledge of Ethereum-like blockchains",
  //         "Familiarity with Ethereum code and smart contract development is an added bonus"
  //       ],
  //       "Responsibilities": [
  //         "Join the full life cycle of blockchain and related software development, including requirement gathering, design, coding, testing, deployment, documentation and support",
  //         "Focus on core blockchain infrastructure, including relevant service, framework and libraries",
  //         "Contribute creativity and insight to solve both technical and business challenges",
  //         "Connect with the developer community and facilitate technical partners",
  //         "Promote technology best practice within the team"
  //       ],
  //       "Benefits": [
  //         "Remuneration And Benefits",
  //         "Do something meaningful - be a part of the future of finance technology and one of the top companies in the industry",
  //         "International work environment and flat organisation",
  //         "Great career development opportunities in a growing company",
  //         "Possibility for relocation and international transfers mid-career",
  //         "Competitive salary",
  //         "Flexible working hours",
  //         "Casual work attire"
  //       ]
  //     },
  //     "job_job_title": null,
  //     "job_posting_language": "en",
  //     "job_onet_soc": "15113200",
  //     "job_onet_job_zone": "4"
  //   },
  //   {
  //     "employer_name": "Bitcoin Talent Co.",
  //     "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSbgk1AjZqY7JkrwGEVVVgEExDSaFLFmH0V9U&s=0",
  //     "employer_website": null,
  //     "employer_company_type": null,
  //     "job_publisher": "Jobs",
  //     "job_id": "BJTc0z63dNFZv6YpAAAAAA==",
  //     "job_employment_type": "FULLTIME",
  //     "job_title": "Bitcoin News - Front End Developer (FLEX)",
  //     "job_apply_link": "https://jobs.ashbyhq.com/bitcoin-talent-co/11725fc4-092f-494d-b8ab-8e68c66ba248",
  //     "job_apply_is_direct": false,
  //     "job_apply_quality_score": 0.574,
  //     "apply_options": [
  //       {
  //         "publisher": "Jobs",
  //         "apply_link": "https://jobs.ashbyhq.com/bitcoin-talent-co/11725fc4-092f-494d-b8ab-8e68c66ba248",
  //         "is_direct": false
  //       }
  //     ],
  //     "job_description": "Bitcoin Talent Co. is working with a leading Bitcoin-only media outlet to help them find a rockstar frontend developer who can create epic landing pages for a website redesign and new products/features.\n\nResponsibilities:\n• You'll be introduced to the project by the lead designer and carry his/her creative assets forward for your build. The designer will advise on the approach where needed.\n• You'll set up the Wordpress instance in Elemenetor, our WP theme builder and hosting service.\n• You'll set up various plugins manage and customize from a list of approved/preferred that we maintain\n\nQualifications:\n• You can take a design comp and turn it into a Wordpress responsive site, setting up the theme, the plugins, and the content.\n• You're a pro at writing HTML5, CSS3, scripting, and basic Javascript.\n• Experience working on Figma and turning prototypes into working pages on Wordpress.\n• Understanding of responsive design, knowing your way of building for all different screen sizes, utilizing grids system, and following style sheets and design guidelines.\n• Some knowledge or interest in Bitcoin and the Lightning Network is a huge plus\n\nThis is a short-term, project-based engagement likely lasting 3-4 weeks. Compensation will be discussed in a first phone call.\n\nReady to apply?\n\nPlease fill out the application to be considered for the position. If you're qualified, a member of the Bitcoin Talent Co. team will reach out via the email provided to set up an interview.",
  //     "job_is_remote": true,
  //     "job_posted_at_timestamp": 1698969600,
  //     "job_posted_at_datetime_utc": "2023-11-03T00:00:00.000Z",
  //     "job_city": null,
  //     "job_state": null,
  //     "job_country": "US",
  //     "job_latitude": 37.09024,
  //     "job_longitude": -95.71289,
  //     "job_benefits": null,
  //     "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=bitcoin+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=bitcoin+developer&htidocid=BJTc0z63dNFZv6YpAAAAAA%3D%3D",
  //     "job_offer_expiration_datetime_utc": null,
  //     "job_offer_expiration_timestamp": null,
  //     "job_required_experience": {
  //       "no_experience_required": false,
  //       "required_experience_in_months": null,
  //       "experience_mentioned": true,
  //       "experience_preferred": false
  //     },
  //     "job_required_skills": null,
  //     "job_required_education": {
  //       "postgraduate_degree": false,
  //       "professional_certification": false,
  //       "high_school": false,
  //       "associates_degree": false,
  //       "bachelors_degree": false,
  //       "degree_mentioned": false,
  //       "degree_preferred": false,
  //       "professional_certification_mentioned": false
  //     },
  //     "job_experience_in_place_of_education": false,
  //     "job_min_salary": null,
  //     "job_max_salary": null,
  //     "job_salary_currency": null,
  //     "job_salary_period": null,
  //     "job_highlights": {
  //       "Qualifications": [
  //         "You can take a design comp and turn it into a Wordpress responsive site, setting up the theme, the plugins, and the content",
  //         "You're a pro at writing HTML5, CSS3, scripting, and basic Javascript",
  //         "Experience working on Figma and turning prototypes into working pages on Wordpress",
  //         "Understanding of responsive design, knowing your way of building for all different screen sizes, utilizing grids system, and following style sheets and design guidelines",
  //         "Some knowledge or interest in Bitcoin and the Lightning Network is a huge plus"
  //       ],
  //       "Responsibilities": [
  //         "You'll be introduced to the project by the lead designer and carry his/her creative assets forward for your build",
  //         "The designer will advise on the approach where needed",
  //         "You'll set up the Wordpress instance in Elemenetor, our WP theme builder and hosting service",
  //         "You'll set up various plugins manage and customize from a list of approved/preferred that we maintain"
  //       ]
  //     },
  //     "job_job_title": null,
  //     "job_posting_language": "en",
  //     "job_onet_soc": "15113400",
  //     "job_onet_job_zone": "3"
  //   },
  //   {
  //     "employer_name": "Sun Panama Digital Ventures",
  //     "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVaMImUzrIU5U1qFhzsk0g2AvkkrgSP7rQBU4&s=0",
  //     "employer_website": null,
  //     "employer_company_type": null,
  //     "job_publisher": "Wellfound",
  //     "job_id": "vtIdsTehwX-iOVT_AAAAAA==",
  //     "job_employment_type": "FULLTIME",
  //     "job_title": "Blockchain/Cryptocurrency Developer",
  //     "job_apply_link": "https://wellfound.com/jobs/1345483-blockchain-cryptocurrency-developer",
  //     "job_apply_is_direct": true,
  //     "job_apply_quality_score": 0.6767,
  //     "apply_options": [
  //       {
  //         "publisher": "Wellfound",
  //         "apply_link": "https://wellfound.com/jobs/1345483-blockchain-cryptocurrency-developer",
  //         "is_direct": true
  //       }
  //     ],
  //     "job_description": "• Complete the development of a cryptocurrency/token on Binance Smart Chain and Etherum\n• Creation of a new blockchain based off open source code\n• Functionality programming\n• Technical knowledge of blockchains in general\n• Ability to work efficiently and meet aggressive milestones\n• Team player\n• Experience managing programming teams is preferred\n\nSun Panama Digital Ventures focuses on Cryptocurrency, Blockchains, and Blockchain / Cryptocurrency. Their company has offices in San Francisco, San Diego, and Cheyenne. They have a small team that's between 1-10 employees.\n\nYou can view their website at https://www.sunpanamadigital.com",
  //     "job_is_remote": true,
  //     "job_posted_at_timestamp": 1695316454,
  //     "job_posted_at_datetime_utc": "2023-09-21T17:14:14.000Z",
  //     "job_city": "San Diego",
  //     "job_state": "CA",
  //     "job_country": "US",
  //     "job_latitude": 32.715736,
  //     "job_longitude": -117.16109,
  //     "job_benefits": null,
  //     "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=bitcoin+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=bitcoin+developer&htidocid=vtIdsTehwX-iOVT_AAAAAA%3D%3D",
  //     "job_offer_expiration_datetime_utc": "2023-11-25T15:59:18.000Z",
  //     "job_offer_expiration_timestamp": 1700927958,
  //     "job_required_experience": {
  //       "no_experience_required": false,
  //       "required_experience_in_months": null,
  //       "experience_mentioned": true,
  //       "experience_preferred": true
  //     },
  //     "job_required_skills": null,
  //     "job_required_education": {
  //       "postgraduate_degree": false,
  //       "professional_certification": false,
  //       "high_school": false,
  //       "associates_degree": false,
  //       "bachelors_degree": false,
  //       "degree_mentioned": false,
  //       "degree_preferred": false,
  //       "professional_certification_mentioned": false
  //     },
  //     "job_experience_in_place_of_education": false,
  //     "job_min_salary": null,
  //     "job_max_salary": null,
  //     "job_salary_currency": null,
  //     "job_salary_period": null,
  //     "job_highlights": {
  //       "Qualifications": [
  //         "Technical knowledge of blockchains in general"
  //       ],
  //       "Responsibilities": [
  //         "Creation of a new blockchain based off open source code"
  //       ]
  //     },
  //     "job_job_title": null,
  //     "job_posting_language": "en",
  //     "job_onet_soc": "15113200",
  //     "job_onet_job_zone": "4"
  //   },
  //   {
  //     "employer_name": "Clear Point Consultants",
  //     "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNePIcbfID5ZLuDoXMj02ullb6AzsjXYkTvxTi&s=0",
  //     "employer_website": null,
  //     "employer_company_type": null,
  //     "job_publisher": "LinkedIn",
  //     "job_id": "0zXyEhXieztpCyB_AAAAAA==",
  //     "job_employment_type": "FULLTIME",
  //     "job_title": "Rust Software Developer (Bitcoin)",
  //     "job_apply_link": "https://www.linkedin.com/jobs/view/rust-software-developer-bitcoin-at-clear-point-consultants-3754909119",
  //     "job_apply_is_direct": false,
  //     "job_apply_quality_score": 0.6778,
  //     "apply_options": [
  //       {
  //         "publisher": "LinkedIn",
  //         "apply_link": "https://www.linkedin.com/jobs/view/rust-software-developer-bitcoin-at-clear-point-consultants-3754909119",
  //         "is_direct": false
  //       },
  //       {
  //         "publisher": "CareerBuilder",
  //         "apply_link": "https://www.careerbuilder.com/job/J3Q09J6336KL8K2NL2S",
  //         "is_direct": false
  //       },
  //       {
  //         "publisher": "Trabajo.org",
  //         "apply_link": "https://us.trabajo.org/job-1275-20231024-7db448990d23e139e20891119d00978b",
  //         "is_direct": false
  //       },
  //       {
  //         "publisher": "Jobrapido.com",
  //         "apply_link": "https://us.jobrapido.com/jobpreview/3068816247",
  //         "is_direct": false
  //       }
  //     ],
  //     "job_description": "Rust Software Engineer (Bitcoin) - Remote or Hyrbid (Austin, TX)\n\nOur Austin based client is searching for a backend Rust Developer that also has experience integrating with front React based apps.\n\nA background and interest in Web3/Crypto/Bitcoin is a huge plus!\n\nAs a key part of the software engineering team, you will be responsible for creating brand new software that helps leverage the power of blockchain technology to enable the adoption of cyrpto in our everyday lives.\n\nThis role will allow you to bring new ideas to the table and work with extremely bright teammates.\n\nMust haves:\n\nExpertise in the Rust programming language – Professional experience is ideal, but we are open to personal projects.\n\nAbility to interact with a global team, to understand the needs of where the product direction is going.\n\nExposure to integrating Rust with React.\n\nPluses:\n\nPersonal interest in Crypto/blockchain\n\nGitHub or open source contributions\n\nThis is a full time perm position with stock/equity – Salary range is 150-180k.\n\nThis role can be set up to be fully remote, hybrid or on-site in Austin, TX.\n\nIf you think that you are a match, please apply to the role; if you are a fit, a recruiter will reach back out to you ASAP!",
  //     "job_is_remote": true,
  //     "job_posted_at_timestamp": 1698758797,
  //     "job_posted_at_datetime_utc": "2023-10-31T13:26:37.000Z",
  //     "job_city": "Austin",
  //     "job_state": "TX",
  //     "job_country": "US",
  //     "job_latitude": 30.267153,
  //     "job_longitude": -97.74306,
  //     "job_benefits": null,
  //     "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=bitcoin+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=bitcoin+developer&htidocid=0zXyEhXieztpCyB_AAAAAA%3D%3D",
  //     "job_offer_expiration_datetime_utc": "2023-11-30T13:26:37.000Z",
  //     "job_offer_expiration_timestamp": 1701350797,
  //     "job_required_experience": {
  //       "no_experience_required": false,
  //       "required_experience_in_months": null,
  //       "experience_mentioned": true,
  //       "experience_preferred": false
  //     },
  //     "job_required_skills": null,
  //     "job_required_education": {
  //       "postgraduate_degree": false,
  //       "professional_certification": false,
  //       "high_school": false,
  //       "associates_degree": false,
  //       "bachelors_degree": true,
  //       "degree_mentioned": false,
  //       "degree_preferred": false,
  //       "professional_certification_mentioned": false
  //     },
  //     "job_experience_in_place_of_education": false,
  //     "job_min_salary": 150000,
  //     "job_max_salary": 180000,
  //     "job_salary_currency": "USD",
  //     "job_salary_period": "YEAR",
  //     "job_highlights": {
  //       "Qualifications": [
  //         "Our Austin based client is searching for a backend Rust Developer that also has experience integrating with front React based apps",
  //         "A background and interest in Web3/Crypto/Bitcoin is a huge plus!",
  //         "Expertise in the Rust programming language – Professional experience is ideal, but we are open to personal projects",
  //         "Ability to interact with a global team, to understand the needs of where the product direction is going",
  //         "Exposure to integrating Rust with React"
  //       ],
  //       "Responsibilities": [
  //         "As a key part of the software engineering team, you will be responsible for creating brand new software that helps leverage the power of blockchain technology to enable the adoption of cyrpto in our everyday lives",
  //         "This role will allow you to bring new ideas to the table and work with extremely bright teammates"
  //       ],
  //       "Benefits": [
  //         "This is a full time perm position with stock/equity – Salary range is 150-180k"
  //       ]
  //     },
  //     "job_job_title": null,
  //     "job_posting_language": "en",
  //     "job_onet_soc": "15113200",
  //     "job_onet_job_zone": "4"
  //   },
  //   {
  //     "employer_name": "HireTeq",
  //     "employer_logo": null,
  //     "employer_website": null,
  //     "employer_company_type": null,
  //     "job_publisher": "BeBee",
  //     "job_id": "gRW8cRFMnPdpvBp7AAAAAA==",
  //     "job_employment_type": "FULLTIME",
  //     "job_title": "Blockchain Developer",
  //     "job_apply_link": "https://us.bebee.com/job/20231105-95d3f269721c572327dae7e931c57f92",
  //     "job_apply_is_direct": false,
  //     "job_apply_quality_score": 0.4971,
  //     "apply_options": [
  //       {
  //         "publisher": "BeBee",
  //         "apply_link": "https://us.bebee.com/job/20231105-95d3f269721c572327dae7e931c57f92",
  //         "is_direct": false
  //       }
  //     ],
  //     "job_description": "Job Title - Sr. Blockchain Developer\nLocation - Remote -- Need to be in Washington, DC office once or twice in a month\nJob Type - Full-time\nEducation - Bachelor's Degree Job Description\nServes as primary data operations resource for the Blockchain Data Ingestion and Normalization project, including process development and improvement, data quality analysis, and regular data management operations under coordination and supervision of the Technical Lead Performs majority of data ingestion and normalization approach development and execution (monthly and ad-hoc) Serves as backup for the Technical Lead in their absenceJob Requirements\n• Bachelor's degree in computer science, Engineering, or a related field, or 10+ years professional Information Technology and data management systems experience in finance, securities, investment, business, insurance, or related field.\n• 8+ years' experience as hands-on data management DevOps engineer, with at least 5 years' experience focused on digital assets/cryptocurrency and market data\n• Thorough knowledge and experience with Blockchain technologies and environments such as Ethereum, Bitcoin, Hyperledger, Cryptocurrency asset market exchanges, and/or other major platforms\n• Work or research experience with Ethereum Virtual Machines (EVM) blockchain microstructure\n• Knowledge of multiple Crypto Exchanges across Ethereum (EVM) and other EVM chains\n• Solid knowledge of Crypto trading markets and technologies\n• Oversees the activities of the junior data scientists and provides advanced expertise on statistical and mathematical concepts for the broader data and analytics\n• Hands on programming experience with Python (pandas datagrams), Bash, or PowerShell for automation and scripting tasks and SQL/PLSQL languages and API calls\n• Hands on experience processing large data volumes (big data) in a performant manner using big data management tools and data analytics\n• Experience with modeling tools such as R. Scikit-learn, Spark MLLIB etc.\n• Experience with large scale distributed systems such as Hadoop, Spark, etc.\n• Experience with AWS cloud, EMR, Glue, and knowledge of containerization technologies (Docker, Kubernetes) and microservices architecture\n• Experience with continuous integration and continuous deployment (CI/CD) pipelines and tools like Jenkins, GitLab, Ci, or CircleCI\n• Strong knowledge of pre-deal analytics concepts across fundamental and market data for common commodities instruments (future, swap, option)\n• Strong grounding in data modeling and data management concepts including delta load patterns for efficient data processing\n• Ability to visualize data in the most effective way possible for a given project\n• Analytical and problem-solving skills and excellent attention to detail\n• Strong communication skills and high \"EQ\" with the ability to operate across complex business environments and stakeholders up to Executive level in a simple, actionable way\n• Excellent technical writing skills\n• Strong communication and collaboration abilities in a remote work environment\n• Self-motivated and proactive with a passion for staying ahead of the rapidly evolving technology landscape\n• Experience working in Agile-Scrum methodology\n• Relevant Cloud certifications are a plus\n• Experience with big data analytics using toolsets such as AWS QuickSight, Tableau, High chart, Splunk, Plotly, etc.\nBlockchain Developer - Block Chain Developer",
  //     "job_is_remote": false,
  //     "job_posted_at_timestamp": 1699193457,
  //     "job_posted_at_datetime_utc": "2023-11-05T14:10:57.000Z",
  //     "job_city": "Remote",
  //     "job_state": "OR",
  //     "job_country": "US",
  //     "job_latitude": 43.005947,
  //     "job_longitude": -123.89259,
  //     "job_benefits": null,
  //     "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=bitcoin+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=bitcoin+developer&htidocid=gRW8cRFMnPdpvBp7AAAAAA%3D%3D",
  //     "job_offer_expiration_datetime_utc": "2023-11-13T00:00:00.000Z",
  //     "job_offer_expiration_timestamp": 1699833600,
  //     "job_required_experience": {
  //       "no_experience_required": false,
  //       "required_experience_in_months": 120,
  //       "experience_mentioned": true,
  //       "experience_preferred": false
  //     },
  //     "job_required_skills": null,
  //     "job_required_education": {
  //       "postgraduate_degree": false,
  //       "professional_certification": false,
  //       "high_school": false,
  //       "associates_degree": false,
  //       "bachelors_degree": false,
  //       "degree_mentioned": true,
  //       "degree_preferred": true,
  //       "professional_certification_mentioned": true
  //     },
  //     "job_experience_in_place_of_education": false,
  //     "job_min_salary": null,
  //     "job_max_salary": null,
  //     "job_salary_currency": null,
  //     "job_salary_period": null,
  //     "job_highlights": {
  //       "Qualifications": [
  //         "Bachelor's degree in computer science, Engineering, or a related field, or 10+ years professional Information Technology and data management systems experience in finance, securities, investment, business, insurance, or related field",
  //         "8+ years' experience as hands-on data management DevOps engineer, with at least 5 years' experience focused on digital assets/cryptocurrency and market data",
  //         "Thorough knowledge and experience with Blockchain technologies and environments such as Ethereum, Bitcoin, Hyperledger, Cryptocurrency asset market exchanges, and/or other major platforms",
  //         "Work or research experience with Ethereum Virtual Machines (EVM) blockchain microstructure",
  //         "Knowledge of multiple Crypto Exchanges across Ethereum (EVM) and other EVM chains",
  //         "Solid knowledge of Crypto trading markets and technologies",
  //         "Oversees the activities of the junior data scientists and provides advanced expertise on statistical and mathematical concepts for the broader data and analytics",
  //         "Hands on programming experience with Python (pandas datagrams), Bash, or PowerShell for automation and scripting tasks and SQL/PLSQL languages and API calls",
  //         "Hands on experience processing large data volumes (big data) in a performant manner using big data management tools and data analytics",
  //         "Experience with modeling tools such as R",
  //         "Scikit-learn, Spark MLLIB etc",
  //         "Experience with large scale distributed systems such as Hadoop, Spark, etc",
  //         "Experience with AWS cloud, EMR, Glue, and knowledge of containerization technologies (Docker, Kubernetes) and microservices architecture",
  //         "Experience with continuous integration and continuous deployment (CI/CD) pipelines and tools like Jenkins, GitLab, Ci, or CircleCI",
  //         "Strong knowledge of pre-deal analytics concepts across fundamental and market data for common commodities instruments (future, swap, option)",
  //         "Strong grounding in data modeling and data management concepts including delta load patterns for efficient data processing",
  //         "Ability to visualize data in the most effective way possible for a given project",
  //         "Analytical and problem-solving skills and excellent attention to detail",
  //         "Strong communication skills and high \"EQ\" with the ability to operate across complex business environments and stakeholders up to Executive level in a simple, actionable way",
  //         "Excellent technical writing skills",
  //         "Strong communication and collaboration abilities in a remote work environment",
  //         "Self-motivated and proactive with a passion for staying ahead of the rapidly evolving technology landscape",
  //         "Experience working in Agile-Scrum methodology",
  //         "Experience with big data analytics using toolsets such as AWS QuickSight, Tableau, High chart, Splunk, Plotly, etc"
  //       ],
  //       "Responsibilities": [
  //         "Serves as primary data operations resource for the Blockchain Data Ingestion and Normalization project, including process development and improvement, data quality analysis, and regular data management operations under coordination and supervision of the Technical Lead Performs majority of data ingestion and normalization approach development and execution (monthly and ad-hoc) Serves as backup for the Technical Lead in their absence"
  //       ]
  //     },
  //     "job_job_title": null,
  //     "job_posting_language": "en",
  //     "job_onet_soc": "15113200",
  //     "job_onet_job_zone": "4"
  //   },
  //   {
  //     "employer_name": "Upwork",
  //     "employer_logo": "https://image.status.io/z6aeO6kAGsAG.png",
  //     "employer_website": "http://www.elance.com",
  //     "employer_company_type": "Computer Services",
  //     "job_publisher": "Upwork",
  //     "job_id": "KIkUDhSGv70tKyPFAAAAAA==",
  //     "job_employment_type": "CONTRACTOR",
  //     "job_title": "Senior Full Stack Blockchain Developer - Contract to Hire",
  //     "job_apply_link": "https://www.upwork.com/freelance-jobs/apply/Senior-Full-Stack-Blockchain-Developer_~01516cde6feff182a7/",
  //     "job_apply_is_direct": true,
  //     "job_apply_quality_score": 0.6869,
  //     "apply_options": [
  //       {
  //         "publisher": "Upwork",
  //         "apply_link": "https://www.upwork.com/freelance-jobs/apply/Senior-Full-Stack-Blockchain-Developer_~01516cde6feff182a7/",
  //         "is_direct": true
  //       }
  //     ],
  //     "job_description": "We are looking for a senior full-stack blockchain developer to develop an NFT-based platform using various ERC standards (ERC721, ERC721A, ERC1155, and ERC20). This platform is to be developed on a layer 2 blockchain for fast and secure transactions.\n\nThis platform will help users buy and sell their products using NFT and ERC20 tokens. Basically, when users want to buy any product using the platform token Buy function, it will mint NFT for the particular owner. And users can buy products from our platform as well as from our store.\n\n- Candidates should have experience in developing smart contracts, deploying them, and layer 2 blockchain solutions.\n\n- Candidates should have experience in React, Python, and JavaScript.\n\n-Having a successful blockchain project in the past is a bonus.",
  //     "job_is_remote": true,
  //     "job_posted_at_timestamp": 1699246181,
  //     "job_posted_at_datetime_utc": "2023-11-06T04:49:41.000Z",
  //     "job_city": null,
  //     "job_state": null,
  //     "job_country": "US",
  //     "job_latitude": 37.09024,
  //     "job_longitude": -95.71289,
  //     "job_benefits": null,
  //     "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=bitcoin+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=bitcoin+developer&htidocid=KIkUDhSGv70tKyPFAAAAAA%3D%3D",
  //     "job_offer_expiration_datetime_utc": null,
  //     "job_offer_expiration_timestamp": null,
  //     "job_required_experience": {
  //       "no_experience_required": false,
  //       "required_experience_in_months": null,
  //       "experience_mentioned": true,
  //       "experience_preferred": false
  //     },
  //     "job_required_skills": [
  //       "Smart Contract",
  //       "JavaScript",
  //       "React",
  //       "Web Development",
  //       "Blockchain",
  //       "NFT Marketplace",
  //       "Solidity",
  //       "Web Application"
  //     ],
  //     "job_required_education": {
  //       "postgraduate_degree": false,
  //       "professional_certification": false,
  //       "high_school": false,
  //       "associates_degree": false,
  //       "bachelors_degree": false,
  //       "degree_mentioned": false,
  //       "degree_preferred": false,
  //       "professional_certification_mentioned": false
  //     },
  //     "job_experience_in_place_of_education": false,
  //     "job_min_salary": 20,
  //     "job_max_salary": 40,
  //     "job_salary_currency": "USD",
  //     "job_salary_period": "HOUR",
  //     "job_highlights": {
  //       "Qualifications": [
  //         "Candidates should have experience in developing smart contracts, deploying them, and layer 2 blockchain solutions",
  //         "Candidates should have experience in React, Python, and JavaScript",
  //         "Having a successful blockchain project in the past is a bonus"
  //       ],
  //       "Responsibilities": [
  //         "This platform will help users buy and sell their products using NFT and ERC20 tokens",
  //         "Basically, when users want to buy any product using the platform token Buy function, it will mint NFT for the particular owner",
  //         "And users can buy products from our platform as well as from our store"
  //       ]
  //     },
  //     "job_job_title": "Senior",
  //     "job_posting_language": "en",
  //     "job_onet_soc": "15113300",
  //     "job_onet_job_zone": "4",
  //     "job_naics_code": "541511",
  //     "job_naics_name": "Custom Computer Programming Services"
  //   },
  //   {
  //     "employer_name": "MiningStore",
  //     "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnqImT9YM8O-dilDAEjizn5Yx2NgD0_HpM9mcI&s=0",
  //     "employer_website": null,
  //     "employer_company_type": null,
  //     "job_publisher": "Wellfound",
  //     "job_id": "ylIU9xEM2w3B2eOrAAAAAA==",
  //     "job_employment_type": "FULLTIME",
  //     "job_title": "Full Stack Developer",
  //     "job_apply_link": "https://wellfound.com/jobs/1700576-full-stack-developer",
  //     "job_apply_is_direct": true,
  //     "job_apply_quality_score": 0.6769,
  //     "apply_options": [
  //       {
  //         "publisher": "Wellfound",
  //         "apply_link": "https://wellfound.com/jobs/1700576-full-stack-developer",
  //         "is_direct": true
  //       }
  //     ],
  //     "job_description": "MiningStore is an American Bitcoin Mining company with a distributed network of 30 team members and growing. Mining cryptocurrencies for over six years, MiningStore has established a robust and connected network of industry leaders to support our active bitcoin mining operations, MiningStore partners and clients, and future development. We continually push the boundaries of bitcoin mining technology, and we are hiring individuals to contribute to our efforts.\n\nMiningStore is seeking an individual with strong leadership, communication, and technical development traits to operate as a subject-matter expert and products manager for scalable, maintainable, and supportable applications which align with our TED initiatives (Technology, Engineering, Development).\n\nThis includes, but not limited to:\n• Working with other technical experts to discuss and analyze the current state of MiningStore operations and software, recommending and leading technical products to introduce into the MiningStore ecosystem.\n• Managing MiningStore’s collaborative development environment, determining how MiningStore will effectively organize, collaborate on, deploy, and maintain products in a professional manner.\n• Maintaining the technical products deployed under their leadership, whether themselves or through leading the efforts of more junior developers.\n\nSome initial tasks for this person could include:\n• Analyze, organize, and redeploy MiningStore’s current technical debt.\n• Develop MiningStore’s data strategy for capturing, organizing, analyzing and distributing information to stakeholders including clients, technicians, and management.\n• Analyze MiningStore’s operational processes to produce a maintainable internal software stack to support field technicians and operational directors.\n\nQualifications:\n• Experience leading the modernization, technical innovation, and/or development of organizations.\n• Experience building and integrating professional APIs (RESTful, GraphQL).\n• Experience designing and implementing databases and creating actionable insights from data collection (SQL or NoSQL).\n• Experience quantifying, measuring, and improving operations through technical development, and efficiently maintaining developed products.\n• Full Stack Developer expertise fluent in Python\n• Experience working with HTML, CSS, and JavaScript.\n• DevOps experience.\n• Infrastructure automation experience.\n\nPreferred:\n• Experience working with Google Cloud Platform.\n• Experience working with Jira, Atlassian products and APIs.\n• Experience working with Kubernetes or other container orchestration tools.\n• Familiarity with lightning network, smart contracts, decentralized file storage.\n\nPortfolio:\n\nPlease provide a synopsis of your work, creative process, and collaborative/documentation process.\n\nPlease provide your full-stack portfolio and additional items you deem relevant for our review.\n\nPlease email your responses to hiring@miningstore.com.\n\nMiningStore focuses on Cryptocurrency, Blockchains, Bitcoin Mining, and Blockchain / Cryptocurrency. Their company has offices in Austin. They have a small team that's between 11-50 employees.\n\nYou can view their website at http://www.miningstore.com",
  //     "job_is_remote": true,
  //     "job_posted_at_timestamp": 1694466596,
  //     "job_posted_at_datetime_utc": "2023-09-11T21:09:56.000Z",
  //     "job_city": null,
  //     "job_state": null,
  //     "job_country": "US",
  //     "job_latitude": 37.09024,
  //     "job_longitude": -95.71289,
  //     "job_benefits": null,
  //     "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=bitcoin+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=bitcoin+developer&htidocid=ylIU9xEM2w3B2eOrAAAAAA%3D%3D",
  //     "job_offer_expiration_datetime_utc": "2023-11-09T04:48:51.000Z",
  //     "job_offer_expiration_timestamp": 1699505331,
  //     "job_required_experience": {
  //       "no_experience_required": false,
  //       "required_experience_in_months": null,
  //       "experience_mentioned": true,
  //       "experience_preferred": false
  //     },
  //     "job_required_skills": null,
  //     "job_required_education": {
  //       "postgraduate_degree": false,
  //       "professional_certification": false,
  //       "high_school": false,
  //       "associates_degree": false,
  //       "bachelors_degree": false,
  //       "degree_mentioned": false,
  //       "degree_preferred": false,
  //       "professional_certification_mentioned": false
  //     },
  //     "job_experience_in_place_of_education": false,
  //     "job_min_salary": 100000,
  //     "job_max_salary": 120000,
  //     "job_salary_currency": "USD",
  //     "job_salary_period": "YEAR",
  //     "job_highlights": {
  //       "Qualifications": [
  //         "Experience leading the modernization, technical innovation, and/or development of organizations",
  //         "Experience building and integrating professional APIs (RESTful, GraphQL)",
  //         "Experience designing and implementing databases and creating actionable insights from data collection (SQL or NoSQL)",
  //         "Experience quantifying, measuring, and improving operations through technical development, and efficiently maintaining developed products",
  //         "Full Stack Developer expertise fluent in Python",
  //         "Experience working with HTML, CSS, and JavaScript",
  //         "DevOps experience",
  //         "Infrastructure automation experience"
  //       ],
  //       "Responsibilities": [
  //         "Working with other technical experts to discuss and analyze the current state of MiningStore operations and software, recommending and leading technical products to introduce into the MiningStore ecosystem",
  //         "Managing MiningStore’s collaborative development environment, determining how MiningStore will effectively organize, collaborate on, deploy, and maintain products in a professional manner",
  //         "Maintaining the technical products deployed under their leadership, whether themselves or through leading the efforts of more junior developers",
  //         "Some initial tasks for this person could include:",
  //         "Analyze, organize, and redeploy MiningStore’s current technical debt",
  //         "Develop MiningStore’s data strategy for capturing, organizing, analyzing and distributing information to stakeholders including clients, technicians, and management",
  //         "Analyze MiningStore’s operational processes to produce a maintainable internal software stack to support field technicians and operational directors"
  //       ]
  //     },
  //     "job_job_title": null,
  //     "job_posting_language": "en",
  //     "job_onet_soc": "15113300",
  //     "job_onet_job_zone": "4"
  //   },
  //   {
  //     "employer_name": "ChainRecorder",
  //     "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzmG4VR3BI-N_YYrlFtXjaArSiJfdMkhXSrpP&s=0",
  //     "employer_website": null,
  //     "employer_company_type": null,
  //     "job_publisher": "Bitcoiner Jobs",
  //     "job_id": "IAR3AzO_PXomdsrVAAAAAA==",
  //     "job_employment_type": "PARTTIME",
  //     "job_title": "Part-Time Senior Bitcoin Developer with Lightning Network Experience",
  //     "job_apply_link": "https://bitcoinerjobs.com/job/1272380-part-time-senior-bitcoin-developer-with-lightning-network-experience-chainrecorder",
  //     "job_apply_is_direct": true,
  //     "job_apply_quality_score": 0.574,
  //     "apply_options": [
  //       {
  //         "publisher": "Bitcoiner Jobs",
  //         "apply_link": "https://bitcoinerjobs.com/job/1272380-part-time-senior-bitcoin-developer-with-lightning-network-experience-chainrecorder",
  //         "is_direct": true
  //       },
  //       {
  //         "publisher": "Crypto Jobs",
  //         "apply_link": "https://cryptojobs.gg/job/senior-bitcoinlightning-network-developer-chainrecorder/2621",
  //         "is_direct": false
  //       }
  //     ],
  //     "job_description": "We are searching for a Part-Time Senior Bitcoin Developer with experience in Lightning Networks to join our team. The candidate will be responsible for guiding and executing both short and long-term projects related to Bitcoin and the Lightning Network. Working as part of our remote team, this hourly paid role offers flexibility, with the hourly rate being negotiable and dependent on experience.\n\nKey Responsibilities\n• Develop, test, and deploy Bitcoin and Lightning Network-related projects, with emphasis on security, performance, and scalability.\n• Provide technical leadership with respect to Bitcoin and Lightning Network technologies.\n• Work closely with internal and external partners to integrate Bitcoin solutions.\n• Keep current with industry trends and developments in Bitcoin and Lightning Network technologies.\n\nRequirements\n• Extensive experience as a Bitcoin Developer.\n• Deep understanding and practical experience in Lightning Network.\n• Familiarity with latest Bitcoin and blockchain protocols and developments.\n• Proficiency in Python\n• Excellent problem-solving skills and a love for technical challenges.\n• Experience with payment channels, offline transactions, child-pays-for-parent (CPFP), replace-by-fee (RBF), Bitcoin script and Bitcoin TestNet.\n• Strong fundamentals in distributed systems design and development.\n• The ability to work independently and collaboratively in a remote setting.\n• Excellent communication skills in English.\n\nPerks and Benefits\n• Flexible Working Hours: This is a part-time position, you can plan your schedule as long as key objectives and timelines are met.\n• Remote Position: This role is fully remote, offering you the flexibility to work from any location.\n• Competitive Pay: We offer an hourly rate that is negotiable and commensurate with your experience. We will pay you in Bitcoin if you so choose.\n\nInterested candidates are encouraged to apply with their resume and a brief cover letter outlining their specific experience with Bitcoin and Lightning Network development.\n\nThank you for your interest in our company. We look forward to hearing from you.",
  //     "job_is_remote": true,
  //     "job_posted_at_timestamp": 1697414400,
  //     "job_posted_at_datetime_utc": "2023-10-16T00:00:00.000Z",
  //     "job_city": null,
  //     "job_state": null,
  //     "job_country": "US",
  //     "job_latitude": 37.09024,
  //     "job_longitude": -95.71289,
  //     "job_benefits": null,
  //     "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=bitcoin+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=bitcoin+developer&htidocid=IAR3AzO_PXomdsrVAAAAAA%3D%3D",
  //     "job_offer_expiration_datetime_utc": "2023-12-01T00:00:00.000Z",
  //     "job_offer_expiration_timestamp": 1701388800,
  //     "job_required_experience": {
  //       "no_experience_required": false,
  //       "required_experience_in_months": null,
  //       "experience_mentioned": true,
  //       "experience_preferred": false
  //     },
  //     "job_required_skills": null,
  //     "job_required_education": {
  //       "postgraduate_degree": false,
  //       "professional_certification": false,
  //       "high_school": false,
  //       "associates_degree": false,
  //       "bachelors_degree": false,
  //       "degree_mentioned": false,
  //       "degree_preferred": false,
  //       "professional_certification_mentioned": false
  //     },
  //     "job_experience_in_place_of_education": false,
  //     "job_min_salary": null,
  //     "job_max_salary": null,
  //     "job_salary_currency": null,
  //     "job_salary_period": null,
  //     "job_highlights": {
  //       "Qualifications": [
  //         "Extensive experience as a Bitcoin Developer",
  //         "Deep understanding and practical experience in Lightning Network",
  //         "Familiarity with latest Bitcoin and blockchain protocols and developments",
  //         "Proficiency in Python",
  //         "Excellent problem-solving skills and a love for technical challenges",
  //         "Experience with payment channels, offline transactions, child-pays-for-parent (CPFP), replace-by-fee (RBF), Bitcoin script and Bitcoin TestNet",
  //         "Strong fundamentals in distributed systems design and development",
  //         "The ability to work independently and collaboratively in a remote setting",
  //         "Excellent communication skills in English"
  //       ],
  //       "Responsibilities": [
  //         "The candidate will be responsible for guiding and executing both short and long-term projects related to Bitcoin and the Lightning Network",
  //         "Develop, test, and deploy Bitcoin and Lightning Network-related projects, with emphasis on security, performance, and scalability",
  //         "Provide technical leadership with respect to Bitcoin and Lightning Network technologies",
  //         "Work closely with internal and external partners to integrate Bitcoin solutions",
  //         "Keep current with industry trends and developments in Bitcoin and Lightning Network technologies"
  //       ],
  //       "Benefits": [
  //         "Flexible Working Hours: This is a part-time position, you can plan your schedule as long as key objectives and timelines are met",
  //         "Remote Position: This role is fully remote, offering you the flexibility to work from any location",
  //         "Competitive Pay: We offer an hourly rate that is negotiable and commensurate with your experience"
  //       ]
  //     },
  //     "job_job_title": "Experience",
  //     "job_posting_language": "en",
  //     "job_onet_soc": "15113200",
  //     "job_onet_job_zone": "4"
  //   },
  //   {
  //     "employer_name": "Upwork",
  //     "employer_logo": "https://image.status.io/z6aeO6kAGsAG.png",
  //     "employer_website": "http://www.elance.com",
  //     "employer_company_type": "Computer Services",
  //     "job_publisher": "Upwork",
  //     "job_id": "6qNypr5A93h0OiKgAAAAAA==",
  //     "job_employment_type": "CONTRACTOR",
  //     "job_title": "Need bot developer for crypto related project",
  //     "job_apply_link": "https://www.upwork.com/freelance-jobs/apply/Need-bot-developer-for-crypto-related-project_~0139d623c073e4a794/",
  //     "job_apply_is_direct": true,
  //     "job_apply_quality_score": 0.6869,
  //     "apply_options": [
  //       {
  //         "publisher": "Upwork",
  //         "apply_link": "https://www.upwork.com/freelance-jobs/apply/Need-bot-developer-for-crypto-related-project_~0139d623c073e4a794/",
  //         "is_direct": true
  //       }
  //     ],
  //     "job_description": "looking for bot developer for crypto project\n\nneed someone who is highly skilled and works fast as well\n\nmessage me for further job details, lets work together :D",
  //     "job_is_remote": true,
  //     "job_posted_at_timestamp": 1699057486,
  //     "job_posted_at_datetime_utc": "2023-11-04T00:24:46.000Z",
  //     "job_city": null,
  //     "job_state": null,
  //     "job_country": "US",
  //     "job_latitude": 37.09024,
  //     "job_longitude": -95.71289,
  //     "job_benefits": null,
  //     "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=bitcoin+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=bitcoin+developer&htidocid=6qNypr5A93h0OiKgAAAAAA%3D%3D",
  //     "job_offer_expiration_datetime_utc": null,
  //     "job_offer_expiration_timestamp": null,
  //     "job_required_experience": {
  //       "no_experience_required": false,
  //       "required_experience_in_months": null,
  //       "experience_mentioned": false,
  //       "experience_preferred": false
  //     },
  //     "job_required_skills": [
  //       "Python",
  //       "API",
  //       "JavaScript",
  //       "Bot Development",
  //       "Java",
  //       "Cryptocurrency",
  //       "PHP",
  //       "Bitcoin",
  //       "Node.js",
  //       "C++"
  //     ],
  //     "job_required_education": {
  //       "postgraduate_degree": false,
  //       "professional_certification": false,
  //       "high_school": false,
  //       "associates_degree": false,
  //       "bachelors_degree": false,
  //       "degree_mentioned": false,
  //       "degree_preferred": false,
  //       "professional_certification_mentioned": false
  //     },
  //     "job_experience_in_place_of_education": false,
  //     "job_min_salary": null,
  //     "job_max_salary": null,
  //     "job_salary_currency": null,
  //     "job_salary_period": null,
  //     "job_highlights": {},
  //     "job_job_title": null,
  //     "job_posting_language": "en",
  //     "job_onet_soc": "15113200",
  //     "job_onet_job_zone": "4",
  //     "job_naics_code": "541511",
  //     "job_naics_name": "Custom Computer Programming Services"
  //   }
  // ]
  // const isLoading = false;
  // const error = null
  const { data, isLoading, error } = useFetch('search', {
    query: 'Bitcoin Developer',
    num_pages: 1
  })
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity><Text style={styles.headerBtn}>Show all</Text></TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard job={job} key={`nearby-job-${job?.job_id}`} handleNavigate={() => router.push(`/job-details/${job.job_id}`)} />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs