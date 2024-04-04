interface Users {
    name: string;
    email: string;
    age: number;
    phone: number;
  }
  type ups = Pick<User, "name" | "email" | "phone">;
  type partial=Partial<ups>
  const updates=(update:partial)=>{
    console.log(update);
  }
  const u:partial={name:"John",phone:3168151861}
  updates(u)
  