import { createContext,useContext,useState } from "react";
type AuthContextType={user:string|null;login:(n:string)=>void;logout:()=>void};
const AuthContext=createContext<AuthContextType|null>(null);
export function AuthProvider({children}:{children:React.ReactNode}){
  const [user,setUser]=useState<string|null>(null);
  return (<AuthContext.Provider value={{
    user, login:(n)=>setUser(n), logout:()=>setUser(null)
  }}>{children}</AuthContext.Provider>);
}
export function useAuth(){
  const ctx = useContext(AuthContext);
  if(!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
}