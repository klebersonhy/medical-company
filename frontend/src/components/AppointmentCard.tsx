type Props={ appointment:{id:number;client:string;date:string}};
export default function AppointmentCard({appointment}:Props){
  return <div><strong>{appointment.client}</strong> — {appointment.date}</div>;
}