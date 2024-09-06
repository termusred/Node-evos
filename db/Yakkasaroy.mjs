import express from "express"
const app = express()
const router = express.Router()

const yakkasarayRestaurants = [
    { name: "Evos", location: "Yakkasaray", employees: 25, availableEmployment: ["Waiter", "Chef"], tablesInside: 30, tablesOutside: 12 },
    { name: "Evos", location: "Yakkasaray", employees: 22, availableEmployment: ["Sous Chef", "Host"], tablesInside: 28, tablesOutside: 10 },
    { name: "Evos", location: "Yakkasaray", employees: 28, availableEmployment: ["Bartender", "Waitstaff"], tablesInside: 34, tablesOutside: 14 },
    { name: "Evos", location: "Yakkasaray", employees: 24, availableEmployment: ["Pizza Chef", "Dishwasher"], tablesInside: 30, tablesOutside: 11 },
    { name: "Evos", location: "Yakkasaray", employees: 20, availableEmployment: ["Manager", "Line Cook"], tablesInside: 26, tablesOutside: 8 },
    { name: "Evos", location: "Yakkasaray", employees: 22, availableEmployment: ["Server", "Host"], tablesInside: 27, tablesOutside: 10 },
    { name: "Evos", location: "Yakkasaray", employees: 21, availableEmployment: ["Chef", "Waitstaff"], tablesInside: 24, tablesOutside: 9 },
    { name: "Evos", location: "Yakkasaray", employees: 19, availableEmployment: ["Prep Cook", "Bartender"], tablesInside: 26, tablesOutside: 9 },
    { name: "Evos", location: "Yakkasaray", employees: 27, availableEmployment: ["Chef", "Waiter"], tablesInside: 32, tablesOutside: 11 },
    { name: "Evos", location: "Yakkasaray", employees: 18, availableEmployment: ["Host", "Dishwasher"], tablesInside: 24, tablesOutside: 7 }
];
router.use((req , res) => {
      
    res.send(yakkasarayRestaurants)
})

export default router
export {yakkasarayRestaurants}