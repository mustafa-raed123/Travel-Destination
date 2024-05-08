import dataTravle from "../../data/db.json";
import "./Tours.css";
import Tour from "./tour/Tour";

function Tours () {
const tour = dataTravle;
    return (
       <>
       <Tour tour={tour}/>
       </>
    )
}

export default Tours;