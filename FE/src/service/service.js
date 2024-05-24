export async function getDatas() {
    const res=await fetch("http://localhost:3000/elmin")
    const data=await res.json()
    return data
}
export async function getDatasId(id) {
    const res=await fetch("http://localhost:3000/elmin/"+id)
    const data=await res.json()
    return data
}
export async function deleteDatas(id) {
    const res=await fetch("http://localhost:3000/elmin/"+id,{method:"DELETE"})
    const data=await res.json()
    return data
}
export async function addDatas(val) {
    const res=await fetch("http://localhost:3000/elmin",{
        method:"POST"
    ,
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(val),
    });
    const data=await res.json()
    return data
}
