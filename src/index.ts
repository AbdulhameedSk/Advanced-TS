interface user {
    name:string,
    age:number
}
function sum(u1:user,u2:user){
    return u1.age + u2.age
}
const u1={
    name:"abdul",
    age:20
}
const u2={
    name:"kalam",
    age:30
}
const ans=sum(u1,u2)
console.log(ans);
