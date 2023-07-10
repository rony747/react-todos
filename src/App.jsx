import './App.css'
import AllRoutes from "@/routes/AllRoutes.jsx";
import {useReducer} from "react";
import {act} from "react-dom/test-utils";
import {Toaster} from "@/components/ui/toaster.jsx";

function reducer(state, action) {

    switch (action.type) {
        case 'done':
            const updatedTask = state.allTasks.map((group) => {
                if (group.id === action.payload.group_id) {
                    const doneTask = group.tasks.map(task => {
                        if (task.task_id === action.payload.task_id && task.isDone === false) {
                            return {...task, isDone: true}
                        }
                        return {...task}
                    })
                    return {...group, tasks: doneTask}
                }
                return {...group}
            })
            return {...state, allTasks: updatedTask, status: 'done'}
        case 'undone':
            const doneTask = state.allTasks.map((group) => {
                if (group.id === action.payload.group_id) {
                    const nTask = group.tasks.map(task => {
                        if (task.task_id === action.payload.task_id && task.isDone === true) {
                            return {...task, isDone: false}
                        }
                        return {...task}
                    })
                    return {...group, tasks: nTask}
                }
                return {...group}
            })
            return {...state, allTasks: doneTask, status: 'undone'}
        case 'delete':
            const deletedTask = state.allTasks.map((group) => {
                if (group.id === action.payload.group_id) {
                    const doneTask = group.tasks.filter(task => {
                        return task.task_id !== action.payload.task_id
                    })
                    return {...group, tasks: doneTask}
                }
                return {...group}
            })
            return {...state, allTasks: deletedTask, status: 'done'}
        case 'add':
            const newTasks = state.allTasks.map((group) => {
                    if (group.id === action.payload.group_id) {
                        const addedTask = [...group.tasks, {
                            task_id: crypto.randomUUID(),
                            title: action.payload.taskTitle,
                            isDone: false
                        }]
                        return {...group, tasks: addedTask}
                    }
                    return {...group}
                }
            )

            return {...state, allTasks: newTasks, status: 'add'}
    }

}

const initialState =
    {
        "allTasks": [
            {
                "id": "64aaa93aefaa4a4043159a6b",
                "group": "exercitation nulla",
                "tasks": [
                    {
                        "task_id": "64aaa93a8c032215fa5af098",
                        "title": "exercitation dolore nulla do quis",
                        "isDone": false
                    },
                    {
                        "task_id": "64aaa93aafcc5c8f42e79007",
                        "title": "eu aute commodo esse in",
                        "isDone": false
                    },
                    {
                        "task_id": "64aaa93aea4924083045b295",
                        "title": "consequat duis nulla nulla aliqua",
                        "isDone": true
                    },
                    {
                        "task_id": "64aaa93ad0c441d7b990fd32",
                        "title": "qui cillum sint pariatur esse",
                        "isDone": false
                    },
                    {
                        "task_id": "64aaa93aee4d3436cbf89c6a",
                        "title": "qui quis aliquip irure elit",
                        "isDone": true
                    },
                    {
                        "task_id": "64aaa9sd3ad0c441d7b990fd32",
                        "title": "qui cillum sint pariatur esse",
                        "isDone": false
                    },
                    {
                        "task_id": "64aaa93asdaaee4d3436cbf89c6a",
                        "title": "qui quis aliquip irure elit",
                        "isDone": true
                    }
                ]
            },
            {
                "id": "64aaa93af0f22eee5d477774",
                "group": "dolore anim",
                "tasks": [
                    {
                        "task_id": "64aaa93a9aba534109f58771",
                        "title": "ex velit sint duis sint",
                        "isDone": false
                    },
                    {
                        "task_id": "64aaa93a2174c59c75f52c20",
                        "title": "enim laborum veniam mollit dolor",
                        "isDone": false
                    },
                    {
                        "task_id": "64aaa93a34f2946227c139d5",
                        "title": "in ea consectetur incididunt enim",
                        "isDone": true
                    },
                    {
                        "task_id": "64aaa93ad5b209f15492c77f",
                        "title": "non incididunt dolore nisi excepteur",
                        "isDone": false
                    },
                    {
                        "task_id": "64aaa93add13c5cdfe55404d",
                        "title": "commodo eu aute in mollit",
                        "isDone": false
                    }
                ]
            },
            {
                "id": "64aaa93a6233c4b19aba3d90",
                "group": "irure magna",
                "tasks": [
                    {
                        "task_id": "64aaa93ae330019c48d0553c",
                        "title": "nulla cupidatat Lorem culpa fugiat",
                        "isDone": false
                    },
                    {
                        "task_id": "64aaa93add49b275ad93528c",
                        "title": "aliqua dolore fugiat duis officia",
                        "isDone": false
                    },
                    {
                        "task_id": "64aaa93a12582adbc439ae85",
                        "title": "laboris sunt veniam aliqua aute",
                        "isDone": false
                    },
                    {
                        "task_id": "64aaa93a33d7f8ada59b50f5",
                        "title": "exercitation ipsum consequat sint exercitation",
                        "isDone": false
                    },
                    {
                        "task_id": "64aaa93abae81d2bb7357f7f",
                        "title": "quis elit qui dolor minim",
                        "isDone": false
                    }
                ]
            },
            {
                "id": "64aaa93abea0911f1e457acb",
                "group": "do irure",
                "tasks": [
                    {
                        "task_id": "64aaa93a01da98924e978b6b",
                        "title": "nostrud ut ipsum amet ullamco",
                        "isDone": false
                    },
                    {
                        "task_id": "64aaa93ae9dd45c303643928",
                        "title": "irure irure officia amet consectetur",
                        "isDone": false
                    },
                    {
                        "task_id": "64aaa93af7beffa0c8a3c9f9",
                        "title": "elit ea laborum enim ea",
                        "isDone": false
                    },
                    {
                        "task_id": "64aaa93aff3fe2a8e4beed69",
                        "title": "aliquip aliquip irure laboris labore",
                        "isDone": true
                    },
                    {
                        "task_id": "64aaa93a385704706e5c0c22",
                        "title": "quis do laborum culpa commodo",
                        "isDone": true
                    }
                ]
            },
            {
                "id": "64aaa93a8f8a774f191a15e5",
                "group": "id adipisicing",
                "tasks": [
                    {
                        "task_id": "64aaa93ad00c37aa996149f7",
                        "title": "pariatur Lorem id laboris elit",
                        "isDone": true
                    },
                    {
                        "task_id": "64aaa93a0a52babdddae0d88",
                        "title": "cillum occaecat velit ad nostrud",
                        "isDone": false
                    },
                    {
                        "task_id": "64aaa93a00e2db4ef92adaa9",
                        "title": "culpa fugiat enim sunt pariatur",
                        "isDone": false
                    },
                    {
                        "task_id": "64aaa93a76847f3ff64cd1ee",
                        "title": "magna non dolor commodo ex",
                        "isDone": true
                    },
                    {
                        "task_id": "64aaa93a15e06f8d060e02d5",
                        "title": "dolor exercitation anim eu laborum",
                        "isDone": false
                    }
                ],
                'isActive': true
            }

        ],
        status: '',


    }


function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <AllRoutes state={state} dispatch={dispatch}/>
            <Toaster />
        </>
    )
}

export default App
