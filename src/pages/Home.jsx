import { NavLink } from "react-router-dom"
import { useHabits } from "../HabitContext"
import { useState } from "react";
import { Modal } from "../components/Modal";
import { Card } from "../components/Card";

export const Home = () => {
    const {habits,setModalOpen,modalOpen} = useHabits();

    const handleAdd = () => {
        setModalOpen(true);
    }
    return(
        <div className="text-center text-2xl ">
        <div className="bg-primary_bg text-lg flex justify-center p-2">
            <NavLink to ="/"><h3 className="mr-5">Home</h3></NavLink>
            <NavLink to ="/archive"><h3>Archive</h3></NavLink>
        </div>
        <h3>Habits</h3>
        <button className="bg-cta_color text-secondary_bg p-2 relative"
        onClick={() => handleAdd()}>
            Add Habits</button>
        <div className="flex p-5">
        {
            habits && habits.map((habit) => <Card {...habit} key = {habit.name}/>)
        }
        </div>
        <div className="flex justify-center p-5 absolute top-7  left-28 z-50 ">
        {
            modalOpen && <Modal />
        }
        </div>
        </div>
    )
}