interface User {
  name: string;
  email: string;
  age: number;
  phone: number;
}
type up = Pick<User, "name" | "email" | "phone">;
const update=(update:up)=>{
  console.log(update);
}
