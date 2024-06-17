if (typeof document !== "undefined") {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            document.body.style.backgroundColor = "lightblue";
            console.log("Button clicked:", e.target);
        });
    });
}
