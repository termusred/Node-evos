import express from "express"
const app = express()
const router = express.Router()

const yunusabadRestaurants = [
    { name: "Evos", location: "Yunusabad", employees: 20, availableEmployment: ["Waiter", "Chef"], tablesInside: 25, tablesOutside: 10 },
    { name: "Evos", location: "Yunusabad", employees: 18, availableEmployment: ["Sous Chef", "Host"], tablesInside: 20, tablesOutside: 8 },
    { name: "Evos", location: "Yunusabad", employees: 22, availableEmployment: ["Bartender", "Waitstaff"], tablesInside: 30, tablesOutside: 12 },
    { name: "Evos", location: "Yunusabad", employees: 25, availableEmployment: ["Pizza Chef", "Dishwasher"], tablesInside: 28, tablesOutside: 10 },
    { name: "Evos", location: "Yunusabad", employees: 17, availableEmployment: ["Manager", "Line Cook"], tablesInside: 22, tablesOutside: 5 },
    { name: "Evos", location: "Yunusabad", employees: 19, availableEmployment: ["Server", "Host"], tablesInside: 24, tablesOutside: 8 },
    { name: "Evos", location: "Yunusabad", employees: 21, availableEmployment: ["Chef", "Waitstaff"], tablesInside: 27, tablesOutside: 7 },
    { name: "Evos", location: "Yunusabad", employees: 16, availableEmployment: ["Prep Cook", "Bartender"], tablesInside: 20, tablesOutside: 9 },
    { name: "Evos", location: "Yunusabad", employees: 24, availableEmployment: ["Chef", "Waiter"], tablesInside: 30, tablesOutside: 11 },
    { name: "Evos", location: "Yunusabad", employees: 15, availableEmployment: ["Host", "Dishwasher"], tablesInside: 18, tablesOutside: 6 }
  ];
router.use((req , res) => {
      
    res.send(yunusabadRestaurants)
})

export default router
export {yunusabadRestaurants}