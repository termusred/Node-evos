import express from "express"
const app = express()
const router = express.Router()

const mirabadRestaurants = [
    { name: "Evos", location: "Mirabad", employees: 26, availableEmployment: ["Waiter", "Chef"], tablesInside: 32, tablesOutside: 12 },
    { name: "Evos", location: "Mirabad", employees: 23, availableEmployment: ["Sous Chef", "Host"], tablesInside: 30, tablesOutside: 10 },
    { name: "Evos", location: "Mirabad", employees: 29, availableEmployment: ["Bartender", "Waitstaff"], tablesInside: 36, tablesOutside: 14 },
    { name: "Evos", location: "Mirabad", employees: 25, availableEmployment: ["Pizza Chef", "Dishwasher"], tablesInside: 32, tablesOutside: 11 },
    { name: "Evos", location: "Mirabad", employees: 21, availableEmployment: ["Manager", "Line Cook"], tablesInside: 28, tablesOutside: 8 },
    { name: "Evos", location: "Mirabad", employees: 23, availableEmployment: ["Server", "Host"], tablesInside: 29, tablesOutside: 10 },
    { name: "Evos", location: "Mirabad", employees: 22, availableEmployment: ["Chef", "Waitstaff"], tablesInside: 26, tablesOutside: 9 },
    { name: "Evos", location: "Mirabad", employees: 20, availableEmployment: ["Prep Cook", "Bartender"], tablesInside: 28, tablesOutside: 9 },
    { name: "Evos", location: "Mirabad", employees: 28, availableEmployment: ["Chef", "Waiter"], tablesInside: 34, tablesOutside: 11 },
    { name: "Evos", location: "Mirabad", employees: 19, availableEmployment: ["Host", "Dishwasher"], tablesInside: 26, tablesOutside: 7 }
];
router.use((req , res) => {
      
    res.send(mirabadRestaurants)
})

export default router
export {mirabadRestaurants}