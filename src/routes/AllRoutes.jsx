import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "@/Pages/HomePage.jsx";

function AllRoutes({state,dispatch}) {

    // const [initialGroup] = state.allTasks.filter(group=>{
    //     return group.isActive
    // })

    return (

        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Navigate to={`/group`}></Navigate>}></Route>
                <Route path={'/group'} element={<HomePage state={state} dispatch={dispatch}/>}></Route>
                <Route path={'/group/:id'} element={<HomePage state={state} dispatch={dispatch}/>}></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default AllRoutes;