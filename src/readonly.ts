interface Usera {
    readonly name: string;
    email: string;
    age: number;
    phone: number;
}

const per: Readonly<Usera> = {
    name: "John",
    email: "john@gmail.com",
    age: 30,
    phone: 1234567890
};
// per.name="Abdul" //error since readonly