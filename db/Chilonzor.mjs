import express from "express"
const app = express()
const router = express.Router()

const chilanzarRestaurants = [
    { name: "Evos", location: "Chilanzar", employees: 22, availableEmployment: ["Waiter", "Chef"], tablesInside: 24, tablesOutside: 10 },
    { name: "Evos", location: "Chilanzar", employees: 19, availableEmployment: ["Sous Chef", "Host"], tablesInside: 20, tablesOutside: 9 },
    { name: "Evos", location: "Chilanzar", employees: 25, availableEmployment: ["Bartender", "Waitstaff"], tablesInside: 28, tablesOutside: 12 },
    { name: "Evos", location: "Chilanzar", employees: 21, availableEmployment: ["Pizza Chef", "Dishwasher"], tablesInside: 26, tablesOutside: 8 },
    { name: "Evos", location: "Chilanzar", employees: 17, availableEmployment: ["Manager", "Line Cook"], tablesInside: 22, tablesOutside: 7 },
    { name: "Evos", location: "Chilanzar", employees: 20, availableEmployment: ["Server", "Host"], tablesInside: 23, tablesOutside: 10 },
    { name: "Evos", location: "Chilanzar", employees: 18, availableEmployment: ["Chef", "Waitstaff"], tablesInside: 21, tablesOutside: 8 },
    { name: "Evos", location: "Chilanzar", employees: 16, availableEmployment: ["Prep Cook", "Bartender"], tablesInside: 20, tablesOutside: 9 },
    { name: "Evos", location: "Chilanzar", employees: 23, availableEmployment: ["Chef", "Waiter"], tablesInside: 28, tablesOutside: 10 },
    { name: "Evos", location: "Chilanzar", employees: 15, availableEmployment: ["Host", "Dishwasher"], tablesInside: 18, tablesOutside: 6 }
  ];
router.use((req , res) => {
      
    res.send(chilanzarRestaurants)
})

export default router
export {chilanzarRestaurants}