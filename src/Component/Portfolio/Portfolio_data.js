import portfolio1 from "./image/portfolio01.jpeg";
import portfolio2 from "./image/portfolio02.jpeg";
import portfolio3 from "./image/portfolio03.jpeg";
import portfolio4 from "./image/portfolio04.jpeg";
import portfolio5 from "./image/portfolio05.jpeg";
import portfolio6 from "./image/portfolio06.jpeg";

const Portfolio_data = [
    {
        id: 1,
        category: "HAFELE",
        totalLike: "600",
        title: "Demand Planning and Analysis",
        subtitle: "Responsibility - Planning & Development",
        image: portfolio1,
        p1: "Forecasting and Demand planning of more than 10k SKUs of Hafele India. Provided tree table format for better visualization of product hierarchy. Using logic in javascript provided live changes like addition/substraction at higher hierarchy level. Reports created using charts for better analysis.",
        p2: "Features: Tree-Table, Sales Analysis Dashboard, Auto generated Numbers",
        p3: "Technology: .Net MVC Framework, SQL, MongoBD, Node, Angular",
    },
    {
        id: 2,
        category: "INDIAN RAILWAYS",
        totalLike: "750",
        title: "Bogie Manufacturing Data Automation and Tracking Tracing",
        subtitle: "Responsibility - Project Leading, Management & Development",
        image: portfolio2,
        p1: "Data collection at Bogie assembly line using QR code scanning on smartphone. Automated the manual process and created reports based on data gathered for better analysis. Software was deployed on local server on IIS.",
        p2: "Featues: Automation of manual work, QR code generation and scanning, IoT integration, IIS deployment",
        p3: "Technology: .Net MVC Framework, SQL, Node, Angular, PWA, Networking",
    },
    {
        id: 3,
        category: "FINOLEX",
        totalLike: 630,
        title: "Fiber Track and Trace using Barcode",
        subtitle: "Responsibility - Client Communication, Design and Development",
        image: portfolio3,
        p1: "Created a portal for mapping fiber generation lifecycle. Unique barcode generation using logic in SQL. Tracking and tracing of generated fiber using barcode scanning",
        p2: "Features: Barcode generation, Reports generation",
        p3: "Technology: .Net MVC Framework, ASP.Net, ADO.Net, MSSQL",
    },
    {
        id: 4,
        category: "E-FARMING",
        totalLike: "500",
        title: "Making Farmer's life easy with Technology",
        subtitle: "Academic Project: Application Engineering and Development",
        image: portfolio4,
        p1: "Created an e-farming application build using Java Swing library. This application provided the farmers an online system for better crop management and earn good profits. A user-friendly app build with advanced user interface.",
        p2: "Features: Farmer and Shops easy connectivity, Transport easy access, Big Market Organization, Digital Awareness about Farming",
        p3: "Technology: Java, Object-Oriented Principles, Java Swings",
    },
    {
        id: 5,
        category: "TECHZANE",
        totalLike: "280",
        title: "User Friendly E-Commerse Website - Shopping Tech",
        subtitle: "Academic Project: Web Design and User Experience Engineering",
        image: portfolio5,
        p1: "E-Commerce application for buying all kinds of electronic items. Admin portal for handling CRUD for the website. Microservices implementation by deploying Admin Portal, Back-end and Front-end on different servers. Designed the website with User-rich UI",
        p2: "Features: Browse Items with seach functionlity, Payment gateway, Role based authentication using JWT",
        p3: "Technology: MongoDB, Express, React, Node (MERN stack)",
    },
    {
        id: 6,
        category: "MENACE - REINFORCEMENT LEARNING",
        totalLike: 690,
        title: "Machbox Educated Noughts And Crosses Engine",
        subtitle: "Academic Project: Data Structures anf Algorithms",
        image: portfolio6,
        p1: "The MENACE was a mechanical computer made from 304 matchboxes designed and built by artificial intelligence researcher Donald Michie in 1961. It was designed to play human opponents in games of noughts and crosses (tic-tac-toe) by returning a move for any given state of play and to refine its strategy through reinforcement learning. ",
        p2: "Features: Reward ans Punish method for MENACE to learn playing, Dashboard for displaying learning progress",
        p3: "Technology: Java, Object-Oriented Principles, Java Swings",
    },
]

export default Portfolio_data;