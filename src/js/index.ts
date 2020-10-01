var selector: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById("select")
);
var input: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("input")
);

function stringManipulator(): string {
  console.log("String Manipulation started");

  switch (selector.value) {
    case "uppercase":
      return input.value.toUpperCase();
    case "lowercase":
      return input.value.toLowerCase();
  }
}

function btnpress(): void {
  console.log("Btn pressed");
  document.getElementById("result").innerHTML = stringManipulator();
}

var button: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("btn")
);
button.addEventListener("click", btnpress);
