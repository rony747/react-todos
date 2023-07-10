import {NavLink, useParams} from "react-router-dom";
import {Button} from "@/components/ui/button"
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import TaskList from "@/components/TaskList.jsx";
import Sidebar from "@/components/Sidebar.jsx";
import TaskArea from "@/components/TaskArea.jsx";

function HomePage({state, dispatch}) {
    const {allTasks, status} = state
    const {id} = useParams()
    const [currentTasks] = allTasks.filter(group => {
        return group.id === id
    })

    return (
        <>
            <div className={'container mx-auto mt-5'}>
                <div className="flex ...">
                    <Sidebar allTasks={allTasks}/>
                    <TaskArea state={state} dispatch={dispatch} currentTasks={currentTasks}/>
                </div>

            </div>
        </>

    );
}

export default HomePage;