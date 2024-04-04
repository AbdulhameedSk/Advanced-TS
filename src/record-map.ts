type Student = {
  id: string;
  username: string;
};

type t = Record<string, Student>;

const students: t = {
  "abdul@gmail.com": { id: "abdul@gmail.com", username: "abdul" },
  "hameed@gmail.com": { id: "hameed@gmail.com", username: "hameed" },
};
const teacher = new Map<string,Student>;
teacher.set("a", { id: "a", username: "hi" });
const p = teacher.get("a");
console.log(p);

