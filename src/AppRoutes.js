import React from "react";
import { Routes,Route, NavLink, Switch} from "react-router-dom";
import Details from "./ClassDetails";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/FF/classes/:id" element={<Details/>}/>
        </Routes>
    )
}
export default AppRoutes