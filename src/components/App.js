import React ,{useEffect,useState} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [planeteers,setPlaneteers] = useState([])
  const[allPlaneteers,setAllPlaneteers]=useState([])
  const request = async()=>{
    let req = await fetch('http://localhost:8003/planeteers')
    let res = await req.json()
    console.log(res)
    setPlaneteers(res)
    setAllPlaneteers(res)
    console.log(planeteers)

    
  }
  useEffect(request,[])
  return (
    <div>
      <Header />
      <SearchBar planeteers={planeteers} setPlaneteers={setPlaneteers} allPlaneteers={allPlaneteers} />
      <RandomButton />
      <PlaneteersContainer planeteers={planeteers} />
    </div>
  );
}

export default App;
