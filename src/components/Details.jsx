import { useHabits } from "../HabitContext";
export const Details = ({name,repeat,goal,time,start_date}) => {
    const {setDetails}= useHabits();
    return(
        <div className="z-auto border-2 w-72 h-72">
            <h3>Name :{name}</h3>
            <h3> Repeat :{repeat}</h3>
            <h3>Goal :{goal}</h3>
            <h3>Time :{time}</h3>
            <h3>Start :{start_date}</h3>
            <button onClick = {() => setDetails(false)} className="bg-cta_color text-secondary_bg"
            >Close</button>
        </div>
    )
}