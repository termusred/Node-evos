import express from "express"
const app = express()
const router = express.Router()

const sergeliRestaurants = [
    { name: "Evos", location: "Sergeli", employees: 28, availableEmployment: ["Waiter", "Chef"], tablesInside: 36, tablesOutside: 14 },
    { name: "Evos", location: "Sergeli", employees: 25, availableEmployment: ["Sous Chef", "Host"], tablesInside: 34, tablesOutside: 12 },
    { name: "Evos", location: "Sergeli", employees: 31, availableEmployment: ["Bartender", "Waitstaff"], tablesInside: 40, tablesOutside: 16 },
    { name: "Evos", location: "Sergeli", employees: 27, availableEmployment: ["Pizza Chef", "Dishwasher"], tablesInside: 36, tablesOutside: 13 },
    { name: "Evos", location: "Sergeli", employees: 23, availableEmployment: ["Manager", "Line Cook"], tablesInside: 32, tablesOutside: 10 },
    { name: "Evos", location: "Sergeli", employees: 25, availableEmployment: ["Server", "Host"], tablesInside: 33, tablesOutside: 12 },
    { name: "Evos", location: "Sergeli", employees: 24, availableEmployment: ["Chef", "Waitstaff"], tablesInside: 30, tablesOutside: 11 },
    { name: "Evos", location: "Sergeli", employees: 22, availableEmployment: ["Prep Cook", "Bartender"], tablesInside: 32, tablesOutside: 11 },
    { name: "Evos", location: "Sergeli", employees: 30, availableEmployment: ["Chef", "Waiter"], tablesInside: 38, tablesOutside: 13 },
    { name: "Evos", location: "Sergeli", employees: 21, availableEmployment: ["Host", "Dishwasher"], tablesInside: 30, tablesOutside: 9 }
];
router.use((req , res) => {
      
    res.send(sergeliRestaurants)
})

export default router
export {sergeliRestaurants}