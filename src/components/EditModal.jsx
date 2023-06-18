import {useState} from "react";
import { useHabits } from "../HabitContext";

export const EditModal = ({name,repeat,goal,time,start_date}) => {
    const {habits,setHabits,setOpen} = useHabits();
    const [data,setData] = useState({
        name : name,
        repeat : repeat,
        goal : goal,
        time : time,
        start_date : start_date,
    })
   console.log(name);
     const handleChange = (e) => {
        const {name,value} = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSave = () => {
        setHabits(habits.map((habit) => habit.name === name ? data : habit));
        setOpen(false);
    }

    return(
        <div className="flex flex-col p-4 items-center w-fit z-9999 absolute top-5 bg-secondary_bg ml-10 -z-100 left-48">
            <h2>Edit Habits</h2>
            <div className="p-3 text-secondary_bg">
                <label>Name</label>
                <input type="text"
                name="name"
                value={data.name}
                onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="p-3 text-secondary_bg">
                <label>Repeat</label>
                <input type="text"
                name="repeat"
                value={data.repeat}
                onChange={(e) => handleChange(e)}/>
            </div>
            <div className="p-3 text-secondary_bg">
                <label>Goal</label>
                <input type="text"
                name="goal"
                value={data.goal}
                onChange={(e) => handleChange(e)}/>
            </div>
            <div className="p-3 text-secondary_bg">
                <label>Time of Day</label>
                <input type="text"
                name="time"
                value={data.time}
                onChange={(e) => handleChange(e)}/>
            </div>
            <div className="p-3 text-secondary_bg">
                <label>Start Day</label>
                <input type="text"
                name="start_date"
                value={data.start_date}
                onChange={(e) => handleChange(e)}/>
            </div>
            <button onClick = {() => handleSave()}>Save</button>
        </div>
    )
}