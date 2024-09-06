import express from "express"
const app = express()
const router = express.Router()

const mirzoUlugbekRestaurants = [
    { name: "Evos", location: "Mirzo-Ulugbek", employees: 23, availableEmployment: ["Waiter", "Chef"], tablesInside: 27, tablesOutside: 10 },
    { name: "Evos", location: "Mirzo-Ulugbek", employees: 20, availableEmployment: ["Sous Chef", "Host"], tablesInside: 22, tablesOutside: 9 },
    { name: "Evos", location: "Mirzo-Ulugbek", employees: 26, availableEmployment: ["Bartender", "Waitstaff"], tablesInside: 30, tablesOutside: 12 },
    { name: "Evos", location: "Mirzo-Ulugbek", employees: 22, availableEmployment: ["Pizza Chef", "Dishwasher"], tablesInside: 27, tablesOutside: 10 },
    { name: "Evos", location: "Mirzo-Ulugbek", employees: 18, availableEmployment: ["Manager", "Line Cook"], tablesInside: 24, tablesOutside: 7 },
    { name: "Evos", location: "Mirzo-Ulugbek", employees: 20, availableEmployment: ["Server", "Host"], tablesInside: 25, tablesOutside: 10 },
    { name: "Evos", location: "Mirzo-Ulugbek", employees: 19, availableEmployment: ["Chef", "Waitstaff"], tablesInside: 22, tablesOutside: 9 },
    { name: "Evos", location: "Mirzo-Ulugbek", employees: 17, availableEmployment: ["Prep Cook", "Bartender"], tablesInside: 23, tablesOutside: 8 },
    { name: "Evos", location: "Mirzo-Ulugbek", employees: 25, availableEmployment: ["Chef", "Waiter"], tablesInside: 28, tablesOutside: 10 },
    { name: "Evos", location: "Mirzo-Ulugbek", employees: 16, availableEmployment: ["Host", "Dishwasher"], tablesInside: 20, tablesOutside: 6 }
];
router.use((req , res) => {
      
    res.send(mirzoUlugbekRestaurants)
})

export default router
export {mirzoUlugbekRestaurants}