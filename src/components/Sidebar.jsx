import TaskList from "@/components/TaskList.jsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {NavLink, useParams} from "react-router-dom";
import styles from './sidebar.module.css';
function Sidebar({allTasks}) {
    const {id} = useParams()
    return (
        <>
            <div  className={`flex-auto basis-1/6 ${styles.sidebar}`}>
                <Card>
                    <CardHeader>
                        <CardTitle>Task Group</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <nav>
                            {allTasks.map(taskGroup => {
                                return <NavLink
                                    className={`w-[100%] block py-2 border-b-2 border-gray-100 font-bold last:border-0 ${taskGroup.id===id ? 'text-green-700':'' }`}
                                    key={taskGroup.id}
                                    to={`/group/${taskGroup.id}`}>{taskGroup.group}</NavLink>
                            })}
                        </nav>

                    </CardContent>
                </Card>
            </div>
        </>
    );
}

export default Sidebar;