import { ChangeEvent, useState } from "react";
import { TaskProps } from "../Tasks/TaskProps";
import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
import { v4 as uuidv4 } from 'uuid';

export interface TaskFormProps {
    onAddTask: (taskData: TaskProps) => void;
};

export function TaskForm({ onAddTask }: TaskFormProps) {
    const [userInput, setUserInput] = useState({
        title: '',
        description: '',
        key: uuidv4()
    });
    const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        let targetId = event.target.id;
        setUserInput(prevState => {
            if (targetId === 'title') {
                return {
                    ...prevState,
                    title: event.target.value
                };
            } else {
                return {
                    ...prevState,
                    description: event.target.value
                };
            };
        });
    };
    const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAddTask(userInput);
        setUserInput({
            title: '',
            description: '',
            key: uuidv4()
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <Input
                        type="text"
                        name='title'
                        label={'Title'}
                        value={userInput.title}
                        onValueChange={changeHandler}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        name='description'
                        label={'Description'}
                        value={userInput.description}
                        onValueChange={changeHandler}
                    />
                </div>
            </div>
            <Button
                kind="raised"
                type='submit'
                onClick={() => { }}
            >
                Submit
            </Button>
        </form>
    );
};