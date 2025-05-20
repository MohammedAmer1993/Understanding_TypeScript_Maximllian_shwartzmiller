const element = document.getElementById("some-element") as HTMLInputElement;

console.log(element.value);

function myFunc(cp: (m: string) => (r: string) => void) {
  let greet = "hi";
  let name = " amer";
  cp(greet)(name);
}

function inner(msg: string) {
  function innerDeep(innermsg: string) {
    console.log(msg + innermsg);
  }
  return innerDeep;
}

myFunc(inner);
