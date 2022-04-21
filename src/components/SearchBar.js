import React from "react";

function SearchBar({planeteers,setPlaneteers,allPlaneteers}) {
  return (
    <div className="search">
            <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          if (!e.target.value) return setPlaneteers(allPlaneteers)
          let search=planeteers.filter((element)=>{
            return element.name.toLowerCase()?.includes(e.target.value)
          })
            if(search.length>0) return  setPlaneteers(search)

        }}
      />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
