import { NavLink } from "react-router-dom"
import { useHabits } from "../HabitContext";
import { ArchiveCard } from "../components/ArchiveCard";
export const Archive = () => {
    const {habits,setModalOpen,modalOpen} = useHabits();

    return(
        <div className="text-center text-2xl ">
        <div className="bg-primary_bg text-lg flex justify-center p-2">
            <NavLink to ="/"><h3 className="mr-5">Home</h3></NavLink>
            <NavLink to ="/archive"><h3>Archive</h3></NavLink>
        </div>
        <h3>Archive</h3>
        <div className="flex p-5">
        {
            habits && habits.map((habit) => <ArchiveCard {...habit} key = {habit.name}/>)
        }
        </div>
        </div>
    )
}