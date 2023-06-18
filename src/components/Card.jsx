import { useHabits } from "../HabitContext"
import { EditModal } from "./EditModal";
import { NavLink } from "react-router-dom";
import { Details } from "./Details";

export const Card = (data) => {
    const {open,setOpen,habits,setHabits,openDetails,setDetails}= useHabits();

    const handleEdit = (e) => {
       setOpen(true);
       e.stopPropagation();
    }

    const handleDelete = (e) => {
        const update= habits.filter((habit) => habit.name !== data.name);
        setHabits(update);
        e.stopPropagation();
    }

    const handleArchive = (e) => {
        const update = habits.map((habit) => habit.name === data.name ? {...habit,
        Isarchive:true} : habit);
        setHabits(update);
        e.stopPropagation();
    }

    const handleDetails = (e) => {
        console.log("inside");
        e.stopPropagation();
        e.preventDefault();
        setDetails(true);
    }
    
    return(
        <>
        {!data.Isarchive ?
        <div className="bg-secondary_bg text-primary_bg flex justify-center gap-5 p-5 mr-5
        w-72 h-72 relative items-center"onClick = {(e) => handleDetails(e)}>
            <h3>{data.name}</h3>
            <button className="absolute top-3 right-2 p-3 bg-cta_color text-secondary_bg"
            onClick={(e) => handleEdit(e)}>Edit</button>
            {open ? <EditModal {...data}/> : <></>}
            <button className="absolute top-3 left-2 p-3 bg-cta_color text-secondary_bg"
            onClick={(e) => handleDelete(e)}>Delete</button>
            <button className="absolute bottom-3 left-2 p-3 bg-cta_color text-secondary_bg"
            onClick={(e) => handleArchive(e)}>Archive</button>
            
        </div>
        :<></>}
        {
                openDetails && <Details {...data}/>
            }
        </>
    )
}