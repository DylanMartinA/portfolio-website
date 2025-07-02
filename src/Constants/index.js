const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Innovation", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Innovation", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 3, suffix: "+", label: "Years of Experience" },
    { value: 6, suffix: "", label: "Development Teams Led" },
    { value: 3000, suffix: "+", label: "Hours Spent" },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "C++ Developer",
        modelPath: "/models/cpp-transformed.glb",
        scale: 0.09,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.9,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Dylan’s vision and leadership at Elaris have been inspiring. His drive to build something impactful and innovative is outstanding to say the least.",
        imgPath: "",
        logoPath: "/images/logo1Elaris.png",
        title: "Founder and CEO",
        date: "December 2024 - Present",
        responsibilities: [
            "Leading a team to develop a gamified mobile app that tracks and incentivizes recycling.",
            "Designed and launched a business model to address contamination in recycling processes.",
            "Oversee full product lifecycle, from UI/UX to backend systems, ensuring the development of a scalable, user-focused, platform.",
        ],
    },
    {
        review:
            "Dylan’s leadership of front-end and platform development at Exactics has been invaluable, helping us deliver a smoother, more user-friendly experience.",
        imgPath: "/images/exp2Exactics.png",
        logoPath: "/images/logo2Exactics.png",
        title: "Full Stack Developer",
        date: "June 2020 - December 2023",
        responsibilities: [
            "Updated and maintained Exactics' website, and lead the development of the Exactics companion app.",
            "Collaborating with biotech professionals to design user-friendly features for test diagnostic information.",
            "Manage Git workflows and DNS/CND configurations to support a secure, performant user experience.",
        ],
    },
    {
        review:
            "Dylan brought patience, expertise, and a collaborative spirit to Tulane Law’s IT Department, handling complex programming, SQL, and server tasks with professionalism and a genuine eagerness to learn.",
        imgPath: "/images/exp3Tulane.png",
        logoPath: "/images/logo3Tulane.png",
        title: "IT Technician",
        date: "September 2024 - May 2025",
        responsibilities: [
            "Provided IT support and system troubleshooting for faculty and staff with professionalism and patience.",
            "Contributed to WordPress and front-end web updates using HTML, CSS, and JavaScript.",
            "Assisted with server migrations, DNS setup, and SSL certificate management for department systems.",
        ],
    },
    {
        review:
            "Dylan was instrumental in building Loyola’s esports program. His initiative and technical leadership consistently elevated our operations.",
        imgPath: "/images/exp4Loyola.png",
        logoPath: "/images/logo4Loyola.png",
        title: "IT and Development Lead",
        date: "November 2021 - April 2025",
        responsibilities: [
            "Designed and maintained IT infrastructure, including secure networking and hardware management.",
            "Mentored students in real-time rendering and programming (C++, Javascript, etc).",
        ],
    },
];

const socialImgs = [
    // {
    //     name: "insta",
    //     url: "https://www.instagram.com/",
    //     imgPath: "/images/insta.png",
    // },
    // {
    //     name: "fb",
    //     url: "https://www.facebook.com/",
    //     imgPath: "/images/fb.png",
    // },
    // {
    //     name: "x",
    //     url: "https://www.x.com/",
    //     imgPath: "/images/x.png",
    // },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/dylanmartincs/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    counterItems,
    expCards,
    socialImgs,
    techStackIcons,
    navLinks,
};