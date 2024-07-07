import {
    background,
    company_circle,
    company_square,
    menu,
    close,
    save_cost,
    manpower,
    nature,
    time
} from "../assets";

export const navLinks = [
    {
        id: "procedure",
        tittle: "How it works",
    },
    {
        id: "benefits",
        tittle: "Benefits",
    },
    {
        id: "aboutus",
        tittle: "About Us",
    },
    {
        id: "whyus",
        tittle: "Why Us?",
    },
    {
        id: "ordernow",
        tittle: "Order Now",
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

export { procedure, benefits };