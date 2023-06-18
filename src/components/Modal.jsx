import { useState } from "react";
import { useHabits } from "../HabitContext";

export const Modal = () => {
    const {habits,setHabits,setModalOpen,setId,id} = useHabits();
    const [data,setData] = useState({
        name : "",
    repeat : "",
    goal : "",
    time : "",
    start_date : "",
    archive : "false",
    })

     const handleChange = (e) => {
        const {name,value} = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSave = () => {
        setHabits([...habits,data]);
        setModalOpen(false);
    }
    return(
        <div className=" bg-primary_bg text-secondary_bg flex flex-col p-4 items-center w-fit">
            <h2>Add Habits</h2>
            <div className="p-3">
                <label>Name</label>
                <input type="text"
                name="name"
                value={data.name}
                onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="p-3">
                <label>Repeat</label>
                <input type="text"
                name="repeat"
                value={data.repeat}
                onChange={(e) => handleChange(e)}/>
            </div>
            <div className="p-3">
                <label>Goal</label>
                <input type="text"
                name="goal"
                value={data.goal}
                onChange={(e) => handleChange(e)}/>
            </div>
            <div className="p-3">
                <label>Time of Day</label>
                <input type="text"
                name="time"
                value={data.time}
                onChange={(e) => handleChange(e)}/>
            </div>
            <div className="p-3">
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