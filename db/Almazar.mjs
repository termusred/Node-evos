import express from "express"
const app = express()
const router = express.Router()

const almazarRestaurants = [
    { name: "Evos", location: "Almazar", employees: 27, availableEmployment: ["Waiter", "Chef"], tablesInside: 34, tablesOutside: 14 },
    { name: "Evos", location: "Almazar", employees: 24, availableEmployment: ["Sous Chef", "Host"], tablesInside: 32, tablesOutside: 12 },
    { name: "Evos", location: "Almazar", employees: 30, availableEmployment: ["Bartender", "Waitstaff"], tablesInside: 38, tablesOutside: 16 },
    { name: "Evos", location: "Almazar", employees: 26, availableEmployment: ["Pizza Chef", "Dishwasher"], tablesInside: 34, tablesOutside: 13 },
    { name: "Evos", location: "Almazar", employees: 22, availableEmployment: ["Manager", "Line Cook"], tablesInside: 30, tablesOutside: 10 },
    { name: "Evos", location: "Almazar", employees: 24, availableEmployment: ["Server", "Host"], tablesInside: 31, tablesOutside: 12 },
    { name: "Evos", location: "Almazar", employees: 23, availableEmployment: ["Chef", "Waitstaff"], tablesInside: 28, tablesOutside: 11 },
    { name: "Evos", location: "Almazar", employees: 21, availableEmployment: ["Prep Cook", "Bartender"], tablesInside: 30, tablesOutside: 11 },
    { name: "Evos", location: "Almazar", employees: 29, availableEmployment: ["Chef", "Waiter"], tablesInside: 36, tablesOutside: 13 },
    { name: "Evos", location: "Almazar", employees: 20, availableEmployment: ["Host", "Dishwasher"], tablesInside: 28, tablesOutside: 9 }
];
router.use((req , res) => {
      
    res.send(almazarRestaurants)
})

export default router
export {almazarRestaurants}