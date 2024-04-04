type event = "click" | "scroll " | "move ";
type eevent = Exclude<event, "scroll">;
const handle = (e: event) => {
  console.log(e);
};
handle("click");
// handle("scroll"); //This gives error
