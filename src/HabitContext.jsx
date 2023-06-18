import { createContext ,useContext ,useState} from "react";
import { data } from "./data";

export const HabitContext = createContext(null);

export const HabitProvider = ({children}) => {
    const [habits,setHabits] = useState(data);
    const [modalOpen , setModalOpen] = useState(false);
    const [open,setOpen] = useState(false);
    const [openDetails,setDetails] = useState(false);
  
    return(
        <HabitContext.Provider value = {{habits,setHabits,modalOpen,setModalOpen,open,setOpen
        ,openDetails,setDetails}}>
            {children}
        </HabitContext.Provider>
    )
}

export const useHabits = () => useContext(HabitContext)