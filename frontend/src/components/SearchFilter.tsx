import { useState } from "react";
export default function SearchFilter(){
  const [query,setQuery]=useState("");
  return (<input type="text" placeholder="Filtrar..." value={query}
    onChange={(e)=>setQuery(e.target.value)} />);
}