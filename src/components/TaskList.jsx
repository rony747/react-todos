import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Pencil, Trash2, PlusCircle, XCircle} from "lucide-react"
import {Badge} from "@/components/ui/badge"
import {Checkbox} from "@/components/ui/checkbox"
import {useState} from "react";
import AddTask from "@/components/AddTask.jsx";
import { useToast } from "@/components/ui/use-toast"


function TaskList({currentTasks, state, dispatch}) {
    let count = 1;
    const {id, group, tasks} = currentTasks

    const pendingTasks = tasks.filter(task => !task.isDone)
    const completeTasks = tasks.filter(task => task.isDone)

    const [showDialog, setShowDialog] = useState(false)
    const { toast } = useToast()
    return <>
        <div className={'flex justify-between'}>
            <h1 className={'text-2xl mb-4 font-bold'}>{group}</h1>
            {showDialog ===false && <PlusCircle onClick={()=>{setShowDialog(true);}}/>}
            {showDialog ===true && <XCircle onClick={()=>{setShowDialog(false);}}/>}

        </div>
        <div>
            {showDialog &&  <AddTask currentTasks={currentTasks} dispatch={dispatch} showDialog={showDialog} setShowDialog={setShowDialog}/>}

        </div>
        <Table className={'border-2 border-gray-100 rounded-lg'}>
            <TableHeader className={'bg-gray-100'}>
                <TableRow>
                    <TableHead className="w-[100px]">#</TableHead>
                    <TableHead>Task Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    pendingTasks.map(task => {

                            return (
                                <TableRow key={task.task_id}>
                                    <TableCell className="font-medium">
                                        {count++}
                                    </TableCell>
                                    <TableCell className={`${task.isDone ? 'text-gray-500 line-through' : ''}`}>
                                        <Checkbox className={`mr-2`} onClick={() => {
                                            dispatch(
                                                {
                                                    'type': 'done',
                                                    'payload': {group_id: id, task_id: task.task_id}
                                                }
                                            )
                                        }}/> {task.title}
                                    </TableCell>
                                    <TableCell>
                                        {task.isDone ? <Badge className={'text-green-700'} variant="outline">Done</Badge> :
                                            <Badge variant="outline" className={'text-red-700'}>Not Done</Badge>}
                                    </TableCell>
                                    <TableCell className="text-right flex justify-end">
                                        <Trash2 className="h-4 w-4 text-red-700 ml-3" onClick={() => {
                                            dispatch(
                                                {
                                                    'type': 'delete',
                                                    'payload': {group_id: id, task_id: task.task_id}
                                                }
                                            )
                                            toast({
                                                title: "Success",
                                                description: "Task Deleted Successfully",
                                            })
                                        }}/>
                                    </TableCell>
                                </TableRow>
                            )


                        }
                    )


                }
                {
                    completeTasks.map(task => {

                            return (
                                <TableRow key={task.task_id}>
                                    <TableCell className="font-medium">
                                        {count++}
                                    </TableCell>
                                    <TableCell className={`${task.isDone ? 'text-gray-300 line-through' : ''}`}>
                                        <Checkbox checked className={`mr-2`} onClick={() => {
                                            dispatch(
                                                {
                                                    'type': 'undone',
                                                    'payload': {group_id: id, task_id: task.task_id}
                                                }
                                            )
                                        }}/> {task.title}
                                    </TableCell>
                                    <TableCell>
                                        {task.isDone ? <Badge className={'text-green-700'} variant="outline">Done</Badge> :
                                            <Badge variant="outline" className={'text-red-700'}>Not Done</Badge>}
                                    </TableCell>
                                    <TableCell className="text-right flex justify-end">
                                        <Trash2 className="h-4 w-4 text-red-700 ml-3" onClick={() => {
                                            dispatch(
                                                {
                                                    'type': 'delete',
                                                    'payload': {group_id: id, task_id: task.task_id}
                                                }
                                            )
                                            toast({
                                                title: "Success",
                                                description: "Task Deleted Successfully",
                                            })
                                        }}/>
                                    </TableCell>
                                </TableRow>
                            )


                        }
                    )


                }

            </TableBody>
        </Table>
    </>


}

export default TaskList;