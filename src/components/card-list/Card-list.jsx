import React from "react";
import { Card } from "../Card/Card";

export const CardList=({monsters})=>{
    
    return <div className="w-[85vw] overflow-y-scroll px-4 py-2 mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
    {
        monsters.map((monster)=>(
          <Card key={monster.id} monster={monster}/>
        ))
      }
    </div>
}