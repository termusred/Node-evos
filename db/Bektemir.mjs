import express from "express"
const app = express()
const router = express.Router()

const bektemirRestaurants = [
    { name: "Evos", location: "Bektemir", employees: 29, availableEmployment: ["Waiter", "Chef"], tablesInside: 38, tablesOutside: 14 },
    { name: "Evos", location: "Bektemir", employees: 26, availableEmployment: ["Sous Chef", "Host"], tablesInside: 36, tablesOutside: 12 },
    { name: "Evos", location: "Bektemir", employees: 32, availableEmployment: ["Bartender", "Waitstaff"], tablesInside: 42, tablesOutside: 16 },
    { name: "Evos", location: "Bektemir", employees: 28, availableEmployment: ["Pizza Chef", "Dishwasher"], tablesInside: 38, tablesOutside: 13 },
    { name: "Evos", location: "Bektemir", employees: 24, availableEmployment: ["Manager", "Line Cook"], tablesInside: 34, tablesOutside: 10 },
    { name: "Evos", location: "Bektemir", employees: 26, availableEmployment: ["Server", "Host"], tablesInside: 35, tablesOutside: 12 },
    { name: "Evos", location: "Bektemir", employees: 25, availableEmployment: ["Chef", "Waitstaff"], tablesInside: 32, tablesOutside: 11 },
    { name: "Evos", location: "Bektemir", employees: 23, availableEmployment: ["Prep Cook", "Bartender"], tablesInside: 34, tablesOutside: 11 },
    { name: "Evos", location: "Bektemir", employees: 31, availableEmployment: ["Chef", "Waiter"], tablesInside: 40, tablesOutside: 13 },
    { name: "Evos", location: "Bektemir", employees: 22, availableEmployment: ["Host", "Dishwasher"], tablesInside: 32, tablesOutside: 9 }
];
router.use((req , res) => {
      
    res.send(bektemirRestaurants)
})

export default router
export {bektemirRestaurants}