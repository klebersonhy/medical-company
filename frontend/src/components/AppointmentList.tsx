import AppointmentCard from "./AppointmentCard.js";
export default function AppointmentList(){
  const appointments=[
    {id:1,client:"Maria",date:"2025-10-20"},
    {id:2,client:"João",date:"2025-10-21"},
  ];
  return (<div>{appointments.map(a=>(<AppointmentCard key={a.id} appointment={a}/>))}</div>);
}