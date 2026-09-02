import { create } from "zustand"
import { createJSONStorage, persist, devtools} from "zustand/middleware"  

const store = (set, get)=>{
    return {
        count: 1,
        name: "esmeralda",
        increment: ()=>{
            set((state) => ({
                count: state.count+1
            }))
        },
        capitalizeName: ()=>{

            const {name} = get();
            set({
                name: name.charAt(0).toUpperCase() + name.slice(1)
            })
        }
        
    }
}

const useMyStore = create(devtools(persist(store, {
    name: "mystore",
    storage: createJSONStorage(()=>sessionStorage)
    })))

export default useMyStore


