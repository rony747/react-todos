import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {NavLink} from "react-router-dom";
import TaskList from "@/components/TaskList.jsx";

function TaskArea({currentTasks,state,dispatch}) {
    return (
        <>
            <div className="flex-auto basis-5/6 p-5 border-2 border-gray-200 rounded-lg ml-4">
                {currentTasks && <TaskList currentTasks={currentTasks} state={state} dispatch={dispatch}/>}
                {!currentTasks && <h1>Please select a group</h1>}
            </div>
        </>
    );
}

export default TaskArea;