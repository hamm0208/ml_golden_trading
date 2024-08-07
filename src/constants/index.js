import {
    background,
    company_circle,
    company_square,
    menu,
    close,
    save_cost,
    manpower,
    nature,
    time,
    flooring_1,
    flooring_2,
    flooring_3,
    flooring_4,
    install,
    malaysia,
    singapore,
    about1,
    about2
} from "../assets";

export const navLinks = [
    {
        id: "procedure",
        title: "How it works",
    },
    {
        id: "benefits",
        title: "Benefits",
    },
    {
        id: "work",
        title: "Our Work",
    },
    {
        id: "about",
        title: "About us",
    },
    {
        id: "ordernow",
        title: "Order Now",
    }
]

const procedure = [
    {
        processNo: 1,
        instruction: "Levelling Channel Installation"
    },
    {
        processNo: 2,
        instruction: "Adjustment of the Levelling Channel"
    },
    {
        processNo: 3,
        instruction: "Alteration of Levelling Channel"
    },
    {
        processNo: 4,
        instruction: "Vibration of flattened concrete using Magic Screed"
    },
    {
        processNo: 5,
        instruction: "Spreading Floor Hardener"
    },
    {
        processNo: 6,
        instruction: "Flattened and consolidate the floor with a floor pan v (pizza pan)"
    },
    {
        processNo: 7,
        instruction: "Further consolidating and flattening using combination plate"
    },
    {
        processNo: 8,
        instruction: "Polishing plate to be used to give floor shinning effect"
    },
    {
        processNo: 9,
        instruction: "The floor is ready"
    },
]

const benefits = [
    {
        benefits: "Cost Saving",
        explaination: "Conventional levelling methods use large quantitites of expensive materials such as sand and lime. Our technology can effectively save millions in construction costs.",
        icon: save_cost,
    },
    {
        benefits: "Reduction in manpower cost",
        explaination: "Our easy-to-install, patented screeding systems cut manpower costs by eliminating the need for senior craftsmen, making projects faster to complete.",
        icon: manpower,
    },
    {
        benefits: "Time Saving",
        explaination: "Our advanced screeding technology completes leveling projects up to five times faster than traditional methods, significantly accelerating construction timelines and boosting efficiency.",
        icon: time,
    },
    {
        benefits: "Eco-friendly",
        explaination: "Our technology reduces the need for materials like sand and lime, minimizing pollution on construction sites. It promotes a cleaner, more sustainable approach to ground leveling, benefiting both the environment and your projects.",
        icon: nature,
    },
] 

const work = [
    {
        image: flooring_1,
        aspect: "16:9"
    },
    {
        image: flooring_2,
        aspect: "16:9"
    },
    {
        image: flooring_3,
        aspect: "16:9"
    },
    {
        image: flooring_4,
        aspect: "16:9"
    },
    {
        image: install,
        aspect: "9:16"
    },
]

const patent = [
    {
        country: malaysia,
        type: "Malaysia Patent No: ",
        no: "MY-191564-A"
    },
    {
        country: singapore,
        type: "Singapore Patent Application No:",
        no: "10202251382M"
    },
    
]
const about = [
    {
        comment: `
ML Golden Trading (M) Sdn. Bhd. (202201016344 (1462041-X)) is a company that has successfully developed the Flat Floor System in Malaysia. This development represents an advancement in construction technology and will bring significant excellence to the construction industry. \n
The Flat Floor System will replace the conventional ways of achieving ground levelling. Using this technology, the ground no longer needs to be levelled, bringing unprecedented technological breakthroughs to construction projects and making it faster and easier for craftsmen to complete the ground levelling task. \n
It represents a great evolution in construction technology to bring many benefits and advantages to builders, including reducing construction costs, reducing labor costs, expediting project progress, and diminishing construction pollution.`,
        image: about1
    }
]
export { procedure, benefits, work, about, patent };