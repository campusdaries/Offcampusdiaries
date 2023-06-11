const jobsData = [
    // Don't remove this object, only copy and paste below it
    // {
    //     role: "Job title",
    //     company: "Company name",
    //     apply_link: "https://apply.link",
    //     tags: ["Skill1", "skill2", "Skill3"]
    // },
    {
        role: 'Full Stack Developer',
        company: 'Advenio',
        tags: [ "Nodejs", "React", "Redux", "AWS"],
        apply_link: 'https://wellfound.com/company/advenio-2/jobs/654662-full-stack-developer-mern-stack',
        posted_date: "11/06/2023",
    },
    {
        role: 'Node.js Developer',
        company: 'Vonage',
        tags: [ "Nodejs", "Mongodb", "SQL", "AWS"],
        apply_link: 'https://www.hirist.com/j/affle-india-node-js-developer-awsmongodb-1198161.html',
        posted_date: "11/06/2023",
    },
    {
        role: 'Backend Developer (VCP Apps)',
        company: 'Vonage',
        tags: [ "Java", "Nodejs", "Mongodb", "Redis", "AWS"],
        apply_link: 'https://boards.greenhouse.io/vonage/jobs/6644308002?adobe_mc=MCMID%3D02408406485458979789220680779370557994%7CMCORGID%3DA8833BC75245AF9E0A490D4D%2540AdobeOrg%7CTS%3D1685923200',
        posted_date: "11/06/2023",
    },
    {
        role: 'Backend Node.js Engineer',
        company: 'Appfire Technologies',
        tags: [ "Microservices", "C#", "ASP.NET Core", "Nodejs", "MSSQL", "Azure"],
        apply_link: 'https://boards.greenhouse.io/embed/job_app?for=appfiretechnologiesllc&token=4195157005',
        posted_date: "11/06/2023",
    },
    {
        role: 'Backend Engineer',
        company: 'Pay2 (PayPay)',
        tags: ["Java", "Kotlin", "Spring Boot"],
        apply_link: 'https://boards.greenhouse.io/pay2dc/jobs/4024283006',
        posted_date: "11/06/2023",
    },
    {
        role: 'Software Engineer (L5), Node.js Platform',
        company: 'Netflix',
        tags: ["NodeJs"],
        apply_link: 'https://jobs.netflix.com/jobs/279060739',
        posted_date: "07/06/2023",
    },
    {
        role: 'Associate Software Engineer',
        company: 'Volvo',
        tags: [],
        apply_link: 'https://xjobs.brassring.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25079&siteid=5171&PageType=JobDetails&jobid=762375',
        posted_date: "03/06/2023",
    },
    {
        role: 'Associate Engineer - Software Development',
        company: 'Sutherland',
        tags: ['C++', '.Net', 'SQL', 'Angular', 'Javascript'],
        apply_link: 'https://jobs.smartrecruiters.com/Sutherland/743999908028953-associate-engineer-software-development',
        posted_date: "01/06/2023",
    },
    {
        role: 'Graduate Software Engineer',
        company: 'Couchbase',
        tags: ['Go', 'C', 'C++'],
        apply_link: 'https://boards.greenhouse.io/couchbaseinc/jobs/4123130006',
        posted_date: "01/06/2023",
    },
    {
        role: 'Software Development Engineer-1 (SDE-1)',
        company: 'SmartReach.io',
        tags: ['DSA'],
        apply_link: 'https://smartreach.freshteam.com/jobs/w1_Ja1fgAQES/copy-of-software-development-engineer-1-sde-1-j3',
        posted_date: "01/06/2023",
    },
    {
        role: 'Big Data Engineer',
        company: 'IBM',
        tags: ['Python', 'Apache spark'],
        apply_link: 'https://bnymellon.eightfold.ai/careers/job?pid=14036930&location=India&recommended=1',
        posted_date: "31/05/2023",
    },
    {
        role: 'Software Developer India',
        company: 'BNY Mellon',
        tags: [],
        apply_link: 'https://bnymellon.eightfold.ai/careers/job?pid=14036930&location=India&recommended=1',
        posted_date: "31/05/2023",
    },
    {
        role: 'Software Developer',
        company: 'Zoho',
        tags: [],
        apply_link: 'https://www.zoho.com/careers/jobdetails/?job_id=2803000614929615',
        posted_date: "31/05/2023",
    },
    {
        role: 'Software Engineer',
        company: 'Clearfeed',
        tags: ['Javascript', 'Nodejs', 'Typescript', 'SQL/NoSQL', 'NestJs', 'ExpressJs', 'DSA', 'Cloud'],
        apply_link: 'https://clearfeed.freshteam.com/jobs/krp7Czs9Hfdm/software-engineer',
        posted_date: "29/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Aditadv Tech Pvt Ltd',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
        apply_link: 'https://www.simplyhired.co.in/job/ItMoh9XXKDV3pZETXcAhRJK4oLxPxyI0_3cmMkF4tv32SEPvohJ_ow?utm_source=jobseeker_emails&utm_medium=email&utm_campaign=job_alerts&jatk=1h08c9qact8bn800',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Cambium Learning Group',
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'Git',
            'Angular',
            'APIs'
        ],
        apply_link: 'https://www.linkedin.com/jobs/view/3601421908',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Career Servant',
        tags: ['HTML', 'CSS', 'JavaScript'],
        apply_link: 'https://www.linkedin.com/jobs/view/3602071759',
        posted_date: "28/05/2023",
    },
    {
        role: 'ReactJS Developer',
        company: 'Murmuration Solutions',
        tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'API', 'React'],
        apply_link: 'https://wellfound.com/l/2yD1ik',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Alectio',
        tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Angular'],
        apply_link: 'https://wellfound.com/l/2yBKmY',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Hybr1d',
        tags: ['Javascript', 'React.js'],
        apply_link: 'https://wellfound.com/l/2yoQrF',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'ZoAi',
        tags: ['HTML5 & CSS3', 'React.js'],
        apply_link: 'https://wellfound.com/l/2yyEVt',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Gradoo by Abihome',
        tags: [
            'Git',
            'Unit Tests',
            'Frontend Development',
            'React.js',
            'Es6',
            'GraphQL',
            'Redux',
            'RESTful API'
        ],
        apply_link: 'https://wellfound.com/l/2ywm8F',
        posted_date: "28/05/2023",
    },
    {
        role: 'Full Stack Engineer',
        company: 'Paladin Cyber',
        tags: ['TypeScript', 'React'],
        apply_link: 'https://wellfound.com/l/2yri9W',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Zelthy',
        tags: ['Javascript', 'CSS', 'Git', 'HTML5', 'React.js'],
        apply_link: 'https://wellfound.com/l/2yBF6T',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Hyresnap',
        tags: ['REST APIs', 'Firebase', 'React.js', 'GraphQL'],
        apply_link: 'https://wellfound.com/l/2yFfcM',
        posted_date: "28/05/2023",
    },
    {
        role: 'Software Developer',
        company: 'Enalo',
        tags: [
            'Reactjs',
            'Redux',
            'HTML',
            'CSS',
            'Javascript',
            'Express',
            'Nodejs'
        ],
        apply_link: 'https://wellfound.com/l/2yBKpZ',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Guarented.com',
        tags: ['HTML/CSS/Javascript', 'Product Development', 'MERN Stack'],
        apply_link: 'https://wellfound.com/l/2yBXr8',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'MindPeers',
        tags: [
            'JavaScript',
            'CSS',
            'HTML',
            'and front-end languages (imp ReactJS)'
        ],
        apply_link: 'https://wellfound.com/l/2yrTQf',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'KarmaCircles',
        tags: ['HTML 5', 'CSS 3', 'Javascript', 'Bootstrap', 'ReactJS'],
        apply_link: 'https://wellfound.com/l/2yytVp',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Kisan Network',
        tags: ['Javascript', 'HTML', 'Node.js', 'HTML5 & CSS3', 'ReactJS'],
        apply_link: 'https://wellfound.com/l/2yvpna',
        posted_date: "28/05/2023",
    },
    {
        role: 'Software Developer',
        company: 'Travel Pick',
        tags: [],
        apply_link: 'https://wellfound.com/l/2yzYnJ',
        posted_date: "28/05/2023",
    },
    {
        role: 'Software Developer',
        company: 'I-Stem',
        tags: ['Python', 'Node.js', 'React.js'],
        apply_link: 'https://wellfound.com/l/2yEuGa',
        posted_date: "28/05/2023",
    },
    {
        role: 'Software Developer',
        company: 'Klaar',
        tags: ['HTML', 'CSS', 'AngularJS', 'JavaScript'],
        apply_link: 'https://wellfound.com/l/2yppjD',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'MetaWork Labs',
        tags: ['React', 'Redux', 'JavaScript'],
        apply_link: 'https://wellfound.com/l/2ys9y1',
        posted_date: "28/05/2023",
    },
    {
        role: 'Full Stack Engineer',
        company: 'Vespucci',
        tags: ['MERN stack'],
        apply_link: 'https://wellfound.com/l/2yBYcL',
        posted_date: "28/05/2023",
    },
    {
        role: 'Full Stack Engineer',
        company: 'Velvet Capital',
        tags: ['MERN Stack'],
        apply_link: 'https://wellfound.com/l/2yBjX5',
        posted_date: "28/05/2023",
    },
    {
        role: 'ReactJS Developer',
        company: 'xAlt Fit',
        tags: ['React.js', 'React Native'],
        apply_link: 'https://wellfound.com/l/2yxE8s',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Kleros',
        tags: [
            'Javascript',
            'TypeScript',
            'React.js',
            'GraphQL',
            'Styled Components',
            'Ethersjs'
        ],
        apply_link: 'https://wellfound.com/l/2ys9M1',
        posted_date: "28/05/2023",
    },
    {
        role: 'Full Stack Engineer',
        company: 'DeFrag',
        tags: ['HTML', 'CSS', 'TypeScript', 'JavaScript', 'Solidity'],
        apply_link: 'https://wellfound.com/l/2yx4fi',
        posted_date: "28/05/2023",
    },
    {
        role: 'Software Developer',
        company: 'Artemis',
        tags: ['React & Next JS', 'AWS and Github'],
        apply_link: 'https://wellfound.com/l/2yuNx3',
        posted_date: "28/05/2023",
    },
    {
        role: 'Software Developer',
        company: 'Gamezop',
        tags: ['Node.js', 'TypeScript', 'React.js', 'Next.Js', 'ReactJS', 'PWA'],
        apply_link: 'https://wellfound.com/l/2yyr4B',
        posted_date: "28/05/2023",
    },
    {
        role: 'Software Developer',
        company: 'Leap Wallet',
        tags: ['Javascript', 'TypeScript', 'React.js', 'React Native'],
        apply_link: 'https://wellfound.com/l/2ypmpj',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'InFeedo',
        tags: ['Reactjs and JavaScript'],
        apply_link: 'https://jobs.infeedo.com/o/frontend-engineer',
        posted_date: "28/05/2023",
    },
    {
        role: 'Software Developer',
        company: 'Toddle',
        tags: ['React ', 'Redux/Apollo ', 'GraphQL'],
        apply_link: 'https://careers.toddleapp.com/jobs/software-engineer-frontend/',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Typedream (USA)',
        tags: ['Javascript', 'HTML', 'CSS'],
        apply_link: 'https://cuvette.tech/app/other-jobs/64526ad4f39e432611af9f76',
        posted_date: "28/05/2023",
    },
    {
        role: 'ReactJS Developer',
        company: 'RailsCarma',
        tags: ['HTML5', 'CSS', 'ReactJS'],
        apply_link: 'https://www.linkedin.com/jobs/view/3598176947',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'ArganoKeste',
        tags: [
            'Html5',
            'CSS3',
            'Javascript',
            'AngularJS',
            'Bootstrap Restful API'
        ],
        apply_link: 'https://www.linkedin.com/jobs/view/3600161305',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Filecoin Foundation',
        tags: [''],
        apply_link: 'https://www.linkedin.com/jobs/view/3598863518',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'OnPoint Search Consultants',
        tags: ['HTML', 'CSS', 'React', 'jQuery', 'CMS'],
        apply_link: 'https://www.linkedin.com/jobs/view/3599979099',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Marktine Technology Solutions',
        tags: ['HTML', 'CSS', 'JavaScript', 'Read JD for more at link'],
        apply_link: 'https://marktine.zohorecruit.in/jobs/Careers/64180000008468166/Front-End-Engineer?source=CareerSite',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Unifize',
        tags: ['Javascript', 'ReactJS', 'Redux'],
        apply_link: 'https://wellfound.com/l/2ypirJ',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'DELV  ',
        tags: ['TypeScript', 'React', 'TailwindCSS'],
        apply_link: 'https://wellfound.com/l/2yQbxi',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Appsmith',
        tags: ['Javascript', 'HTML', 'CSS', 'AngularJS', 'React.js', 'Redux'],
        apply_link: 'https://wellfound.com/l/2yKpXo',
        posted_date: "28/05/2023",
    },
    {
        role: 'ReactJS Developer',
        company: 'SourceTable',
        tags: ['Javascript', 'React.js'],
        apply_link: 'https://wellfound.com/l/2yzV9B',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'vdx.tv',
        tags: ['Javascript', 'HTML/CSS', 'NodeJS', 'Typescript', 'React'],
        apply_link: 'https://wellfound.com/l/2yBxX5',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'PradeepIT Consulting Service',
        tags: ['CSS', 'JavaScript', 'Angular', 'TypeScript'],
        apply_link: 'https://www.linkedin.com/jobs/view/3607533009',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Glocomms',
        tags: ['Tailwind CSS', 'JavaScript', 'TypeScript', 'Next.js'],
        apply_link: 'https://www.linkedin.com/jobs/view/3605858233',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Sage Recruiting',
        tags: [
            'Tailwind CSS',
            'JavaScript',
            'TypeScript',
            'Next.js',
            'ReactJS',
            'Svelte'
        ],
        apply_link: 'https://www.linkedin.com/jobs/view/3569202347',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'STFX.io',
        tags: ['React', 'Next.js', 'TailwindCSS', 'JavaScript/TypeScript'],
        apply_link: 'https://wellfound.com/company/stfx-io-1/jobs/2676447-frontend-engineer-web3-crypto',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'EGfin',
        tags: ['React Native', 'Frontend Development'],
        apply_link: 'https://wellfound.com/l/2yMxwC',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'WriteSonic',
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
            'React.JS',
            'TypeScript',
            'Next.JS',
            'Tailwind CSS'
        ],
        apply_link: 'https://wellfound.com/l/2yssYx',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Coinrule',
        tags: ['JavaScript', 'React.JS'],
        apply_link: 'https://wellfound.com/l/2yRV8s',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Evoltech',
        tags: [
            'JavaScript',
            'TypeScript',
            'React.JS',
            'Redux',
            'ES6',
            'Restful APIs'
        ],
        apply_link: 'https://wellfound.com/l/2yMpeF',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'PushOwl',
        tags: ['HTML', 'CSS', 'JavaScript', 'React.JS', 'TypeScript'],
        apply_link: 'https://wellfound.com/l/2yRDtu',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'CyberDesk',
        tags: ['JavaScript', 'ES6/5', 'TypeScript'],
        apply_link: 'https://wellfound.com/l/2yShfL',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Extend Cloud',
        tags: ['JavaScript', 'React.JS', 'Next.JS', 'Tailwindcss', 'TypeScript'],
        apply_link: 'https://wellfound.com/l/2ySh9Y',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Mobi Systems',
        tags: ['React.JS', 'Frontend Development'],
        apply_link: 'https://wellfound.com/l/2yosxH',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Shyp',
        tags: ['Flutter', 'Dart'],
        apply_link: 'https://wellfound.com/l/2yS2ox',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Aphid',
        tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'React.JS'],
        apply_link: 'https://wellfound.com/l/2yoBS2',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'madewithlove',
        tags: ['Vue.JS', 'Git', 'Rest APIs'],
        apply_link: 'https://wellfound.com/l/2yPtB8',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Mercle',
        tags: ['HTML', 'CSS', 'React.JS'],
        apply_link: 'https://wellfound.com/l/2yQCGs',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'AltitudeDP',
        tags: ['TypeScript', 'React Native'],
        apply_link: 'https://wellfound.com/l/2yRnDy',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Ripen',
        tags: ['Javascript (React', 'TypeScript)'],
        apply_link: 'https://wellfound.com/l/2yPC5A',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Decentro',
        tags: ['HTML', 'CSS', 'React.js', 'Bootstrap'],
        apply_link: 'https://wellfound.com/l/2yNJ2D',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Diffusionlabs',
        tags: ['Javascript', 'TypeScript', 'React.js'],
        apply_link: 'https://wellfound.com/l/2yEWCA',
        posted_date: "28/05/2023",
    },
    {
        role: 'ReactJS Developer',
        company: 'SuperTokens',
        tags: ['JavaScript', 'React.JS'],
        apply_link: 'https://wellfound.com/l/2yRQQf',
        posted_date: "28/05/2023",

    },
    {
        role: 'Frontend Developer',
        company: 'HootBoard',
        tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Tailwind CSS'],
        apply_link: 'https://wellfound.com/l/2yscZx',
        posted_date: "28/05/2023",

    },
    {
        role: 'ReactJS Developer',
        company: 'TheInternetFolks',
        tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'],
        apply_link: 'https://wellfound.com/l/2ySpq9',
        posted_date: "28/05/2023",

    },
    {
        role: 'Frontend Developer',
        company: 'Invana',
        tags: ['React.js'],
        apply_link: 'https://wellfound.com/l/2yQn2K',
        posted_date: "28/05/2023",

    },
    {
        role: 'Frontend Developer',
        company: 'Studio137',
        tags: ['React.js'],
        apply_link: 'https://wellfound.com/l/2yQF8C',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Kleros',
        tags: ['Javascript', 'TypeScript', 'React.js', 'GraphQL'],
        apply_link: 'https://wellfound.com/l/2ys9LX',
        posted_date: "28/05/2023",
    },
    {
        role: 'ReactJS Developer',
        company: 'RockMetric',
        tags: ['HTML5', 'CSS3', 'REST APIs', 'React.js', 'React Native', 'Redux'],
        apply_link: 'https://wellfound.com/l/2ypp8f',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'HivePath',
        tags: ['HTML', 'CSS', 'React.js', 'Vue.Js'],
        apply_link: 'https://wellfound.com/l/2yzeBR',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'PetMojo',
        tags: ['Javascript', 'HTML', 'CSS', 'React.js'],
        apply_link: 'https://wellfound.com/l/2yprmy',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'SN Silos',
        tags: ['Javascript', 'Node.js', 'Next.Js', 'ReactJS'],
        apply_link: 'https://wellfound.com/l/2yCqXH',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'War Room',
        tags: ['Javascript', 'HTML', 'CSS', 'AngularJS', 'React.js'],
        apply_link: 'https://wellfound.com/l/2yH6ja',
        posted_date: "28/05/2023",
    },
    {
        role: 'Frontend Developer',
        company: 'Trackier',
        tags: ['Python', 'Node.js', 'React.js'],
        apply_link: 'https://wellfound.com/l/2yqiDq',
        posted_date: "28/05/2023",
    },
    {
        role: "SDE I - Frontend",
        company: "Netomi",
        apply_link: "https://jobs.lever.co/netomi/193837bd-9cb4-4518-83f8-d59c02e7b960",
        tags: ["Javascript", "Typescript", "HTML5", "CSS3", "VueJs/ReactJs/AngularJs"],
        posted_date: "28/05/2023",
    },
    {
        role: "DevOps Engineer",
        company: "Delhivery",
        apply_link: "https://delhivery.darwinbox.in/ms/candidate/careers/a645a06100b757",
        tags: ["Python", "Shell", "Go lang", "CI/CD", "AWS"],
        posted_date: "28/05/2023",
    },
    {
        role: "SDE-2 (Full Stack/Backend)",
        company: "InsuranceDekho",
        apply_link: "https://docs.google.com/forms/d/e/1FAIpQLSdTqkg-02UWWylKn6vdyZTyMH4Mdzj6o_kBnVjT501LetjXbA/viewform",
        tags: [],
        posted_date: "27/05/2023",
    },
    {
        role: "SDE-1 (Full Stack/Backend)",
        company: "InsuranceDekho",
        apply_link: "https://docs.google.com/forms/d/e/1FAIpQLSdTqkg-02UWWylKn6vdyZTyMH4Mdzj6o_kBnVjT501LetjXbA/viewform",
        tags: [],
        posted_date: "27/05/2023",
    },
    {
        role: "Frontend Engineer",
        company: "Virtualitics",
        apply_link: "https://remote.co/job/frontend-engineer-23-2/",
        tags: ["Javascript", "TypeScript", "CSS", "HTML", "React", "Redux"],
        posted_date: "27/05/2023",
    },
    {
        role: "Software Engineer",
        company: "Getty Images",
        apply_link: "https://jobs.lever.co/gettyimages/c18bb54b-b7fc-4952-a875-423f8fade22c/",
        tags: ["APS.NET", "Javascript", "AWS", "Tableau"],
        posted_date: "27/05/2023",
    },
    {
        role: "Software Developer Job",
        company: "QuickMove Technologies Pvt. Ltd ",
        apply_link: "https://cuvette.tech/app/public/job/646f34af6ae5944699a24bc4?referralCode=JT26WF",
        tags: ["APS.NET", "C#", "Angular"],
        posted_date: "27/05/2023",
    },
    {
        role: "Software Developer",
        company: "RadiXplore",
        apply_link: "https://wellfound.com/jobs?job_listing_id=2448164",
        tags: ["Javascript", "HTML", "CSS", "MongoDB", "ExpressJS", "Nodejs", "VueJs", "AWS", "REST APIs"],
        posted_date: "27/05/2023",
    },
    {
        role: "Backend Developer Job",
        company: "AgileAxis Privale Limited ",
        apply_link: "https://cuvette.tech/app/public/job/64704d9782a8d73d22309b50?referralCode=JT26WF",
        tags: ["Java", "Spring Boot", "SQL"],
        posted_date: "27/05/2023",
    },
    {
        role: "Front-End Engineer",
        company: "Kisan Network",
        apply_link: "https://wellfound.com/jobs?job_listing_id=210086",
        tags: ["Javascript", "HTML", "CSS", "jQuery", "AngularJs", "Nodejs", "Reactjs"],
        posted_date: "27/05/2023",
    },
    {
        role: "Front End Developer",
        company: "Marquee Equity",
        apply_link: "https://wellfound.com/jobs?job_listing_id=2659539",
        tags: ["ReactJS", "RESTful API"],
        posted_date: "27/05/2023",
    },
    {
        role: "Backend Developer (Go Lang)",
        company: "Afford Medical Technologies",
        apply_link: "https://wellfound.com/jobs?job_listing_id=2675121",
        tags: ["Go lang", "Nodejs", "PostgreSQL", "Docker", "Microsoft Azure", "SQL", "Kubernetes", "Nest.Js"],
        posted_date: "27/05/2023",
    },
    {
        role: "Full Stack Developer",
        company: "FreeStand Sampling",
        apply_link: "https://wellfound.com/jobs?job_listing_id=1028207",
        tags: ["Javascript", "HTML", "CSS", "noSQL", "SQL", "Nodejs", "TypeScript", "Firebase", "Reactjs", "TailwindCSS", "tRPC"],
        posted_date: "27/05/2023",
    },
    {
        role: "MERN Stack Developer ( Remote )",
        company: "AppAvengers",
        apply_link: "https://wellfound.com/jobs?job_listing_id=1271490",
        tags: ["Nodejs", "Reactjs", "MERN Stack", "Devops", "Python", "C++", "Java"],
        posted_date: "27/05/2023",
    },
]
