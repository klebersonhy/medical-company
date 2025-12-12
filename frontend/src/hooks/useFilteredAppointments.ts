import { useMemo } from "react";
export function useFilteredAppointments(list:any[],query:string){
  return useMemo(()=>list.filter(i=>i.client.toLowerCase().includes(query.toLowerCase())),[list,query]);
}