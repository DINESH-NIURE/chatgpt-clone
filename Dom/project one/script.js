if (typeof document !== "undefined") {
  const buttons = document.querySelectorAll(".button");
  const body = document.querySelector("body");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "red":
                body.style.backgroundColor = "red";
                break;
            case "green":
                body.style.backgroundColor = "green";
                break;
            case "blue":
                body.style.backgroundColor = "blue";
                break;
            case "yellow":
                body.style.backgroundColor = "yellow";
                break;
            default:
                body.style.backgroundColor = "white";
                break;
        }
    });
  });
}
