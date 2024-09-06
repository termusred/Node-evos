import express from "express"
import ServerlessHttp from "serverless-http"
import first , {yakkasarayRestaurants} from "../db/Yakkasaroy.mjs"
import second , {almazarRestaurants} from "../db/Almazar.mjs"
import third , {bektemirRestaurants} from "../db/Bektemir.mjs"
import fourth , {chilanzarRestaurants} from "../db/Chilonzor.mjs"
import fifth , {mirabadRestaurants} from "../db/Mirabad.mjs"
import sixth , {mirzoUlugbekRestaurants} from "../db/MirzoUlugbek.mjs"
import seventh , {sergeliRestaurants} from "../db/Sergeli.mjs"
import eighth , {shaykhontohurRestaurants} from "../db/ShayxanTohur.mjs"
import ninth , {yashnobodRestaurants} from "../db/Yashnabod.mjs"
import tenth , {yunusabadRestaurants} from "../db/Yunusobod.mjs"

const app = express();
const port = 3000;

app.use("/yakkasaroy",first)
app.use("/almazar",second)
app.use("/bektemir",third)
app.use("/chilonzor",fourth)
app.use("/mirabad",fifth)
app.use("/mirzo-ulugbek",sixth)
app.use("/sergeli",seventh)
app.use("/shayxantohur",eighth)
app.use("/yashnabod",ninth)
app.use("/yunusobod",tenth)

app.get("/all", (req, res) => {
    const allData = [
        ...yakkasarayRestaurants,
        ...almazarRestaurants,
        ...chilanzarRestaurants,
        ...bektemirRestaurants,
        ...mirabadRestaurants,
        ...mirzoUlugbekRestaurants,
        ...sergeliRestaurants,
        ...shaykhontohurRestaurants,
        ...yashnobodRestaurants,
        ...yunusabadRestaurants,
    ];
    res.json(allData);
});
app.get("/" , (req , res)=> {
  res.send("please write valid url")
})
export const handler2 = ServerlessHttp(app);

export const handler = async (event, context) => {
  const result = await handler2(event, context);
  return result;
};