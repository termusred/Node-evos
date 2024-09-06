import express from "express"
const app = express()
const router = express.Router()

const yashnobodRestaurants = [
    { name: "Evos", location: "Yashnobod", employees: 30, availableEmployment: ["Waiter", "Chef"], tablesInside: 40, tablesOutside: 14 },
    { name: "Evos", location: "Yashnobod", employees: 27, availableEmployment: ["Sous Chef", "Host"], tablesInside: 38, tablesOutside: 12 },
    { name: "Evos", location: "Yashnobod", employees: 33, availableEmployment: ["Bartender", "Waitstaff"], tablesInside: 44, tablesOutside: 16 },
    { name: "Evos", location: "Yashnobod", employees: 29, availableEmployment: ["Pizza Chef", "Dishwasher"], tablesInside: 40, tablesOutside: 13 },
    { name: "Evos", location: "Yashnobod", employees: 25, availableEmployment: ["Manager", "Line Cook"], tablesInside: 36, tablesOutside: 10 },
    { name: "Evos", location: "Yashnobod", employees: 27, availableEmployment: ["Server", "Host"], tablesInside: 37, tablesOutside: 12 },
    { name: "Evos", location: "Yashnobod", employees: 26, availableEmployment: ["Chef", "Waitstaff"], tablesInside: 34, tablesOutside: 11 },
    { name: "Evos", location: "Yashnobod", employees: 24, availableEmployment: ["Prep Cook", "Bartender"], tablesInside: 36, tablesOutside: 11 },
    { name: "Evos", location: "Yashnobod", employees: 32, availableEmployment: ["Chef", "Waiter"], tablesInside: 42, tablesOutside: 13 },
    { name: "Evos", location: "Yashnobod", employees: 23, availableEmployment: ["Host", "Dishwasher"], tablesInside: 34, tablesOutside: 9 }
];
router.use((req , res) => {

    res.send(yashnobodRestaurants)
})

export default router
export {yashnobodRestaurants}