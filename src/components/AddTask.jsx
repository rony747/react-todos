import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
function AddTask({dispatch,currentTasks, setShowDialog,showDialog}) {
    const {id, group, tasks} = currentTasks
    const [taskTitle, setTasktitle] = useState('')
    const { toast } = useToast()
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Task Group</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        dispatch({
                            'type': 'add',
                            'payload': {group_id: id, taskTitle: taskTitle}
                        })
                        setTasktitle('')
                        setShowDialog(false)
                        toast({
                            title: "Success",
                            description: "Task added Successfully",
                        })

                    }}>
                        <Input type={'text'} className={'mb-5 '} placeholder={'my new task'} onChange={(e) => {
                            setTasktitle(e.target.value)
                        }} value={taskTitle}/>
                        <Button type={'submit'}>Save task</Button>
                    </form>

                </CardContent>
            </Card>

        </>
    );
}

export default AddTask;