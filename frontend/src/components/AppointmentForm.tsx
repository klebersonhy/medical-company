import { useState } from "react";
export default function AppointmentForm(){
  const [name,setName]=useState("");
  return (<form>
    <input type="text" placeholder="Nome do cliente" value={name}
      onChange={(e)=>setName(e.target.value)} />
    <button type="submit">Criar</button>
  </form>);
}