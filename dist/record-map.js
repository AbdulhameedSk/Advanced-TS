"use strict";
const students = {
    "abdul@gmail.com": { id: "abdul@gmail.com", username: "abdul" },
    "hameed@gmail.com": { id: "hameed@gmail.com", username: "hameed" },
};
const teacher = new Map;
teacher.set("a", { id: "a", username: "hi" });
const p = teacher.get("a");
console.log(p);
