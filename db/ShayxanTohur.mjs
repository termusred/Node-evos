import express from "express"
const app = express()
const router = express.Router()

const shaykhontohurRestaurants = [
    { name: "Evos", location: "Shaykhontohur", employees: 24, availableEmployment: ["Waiter", "Chef"], tablesInside: 28, tablesOutside: 12 },
    { name: "Evos", location: "Shaykhontohur", employees: 21, availableEmployment: ["Sous Chef", "Host"], tablesInside: 26, tablesOutside: 10 },
    { name: "Evos", location: "Shaykhontohur", employees: 27, availableEmployment: ["Bartender", "Waitstaff"], tablesInside: 32, tablesOutside: 14 },
    { name: "Evos", location: "Shaykhontohur", employees: 23, availableEmployment: ["Pizza Chef", "Dishwasher"], tablesInside: 28, tablesOutside: 11 },
    { name: "Evos", location: "Shaykhontohur", employees: 19, availableEmployment: ["Manager", "Line Cook"], tablesInside: 24, tablesOutside: 8 },
    { name: "Evos", location: "Shaykhontohur", employees: 21, availableEmployment: ["Server", "Host"], tablesInside: 25, tablesOutside: 10 },
    { name: "Evos", location: "Shaykhontohur", employees: 20, availableEmployment: ["Chef", "Waitstaff"], tablesInside: 22, tablesOutside: 9 },
    { name: "Evos", location: "Shaykhontohur", employees: 18, availableEmployment: ["Prep Cook", "Bartender"], tablesInside: 24, tablesOutside: 9 },
    { name: "Evos", location: "Shaykhontohur", employees: 26, availableEmployment: ["Chef", "Waiter"], tablesInside: 30, tablesOutside: 11 },
    { name: "Evos", location: "Shaykhontohur", employees: 17, availableEmployment: ["Host", "Dishwasher"], tablesInside: 22, tablesOutside: 7 }
];
  
router.use((req , res) => {
    res.send(shaykhontohurRestaurants)
})

export default router
export {shaykhontohurRestaurants}