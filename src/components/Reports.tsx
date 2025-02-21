import { parents } from "../data/masterData";


export default function Reports (){
    return(
        <main className="py-10 h-screen">
            <h1 className="font-semibold text-3xl text-center">Our Parents</h1>

<div className="max-w-lg mx-auto">
<div className="space-y-2">
    {parents.map(parent =>(
        
        <p key={parent.id} className="text-lg">{parent.id} - {parent.name}</p>

    ))}
</div>
</div>

        </main>
      
        
    )
}