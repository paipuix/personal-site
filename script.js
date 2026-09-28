// Code from https://puretoxin.neocities.org/resources/codesnippets/sparklecursor/
    const glitterSymbols = ["♡","𐕣", "𐙚"];
    const glitterColors = ["#0B0B0B","#0B0B0B"];

    let lastGlitterTime = 0;

    document.addEventListener("mousemove", (event) => {
        const now = Date.now();

        if (now - lastGlitterTime < 35) return;

        lastGlitterTime = now;

        createGlitter(event.clientX, event.clientY);
    });

    function randomGlitterItem(items) {
        return items[
        Math.floor(Math.random() * items.length)
        ];
    }

    function createGlitter(x, y) {
        const glitter = document.createElement("span");

        glitter.className = "cursor-glitter";

        glitter.textContent = randomGlitterItem(
            glitterSymbols
        );

        glitter.style.left = `${x}px`;
        glitter.style.top = `${y}px`;

        glitter.style.color = randomGlitterItem(
            glitterColors
        );

        glitter.style.setProperty(
            "--glitter-x",
            `${Math.floor(Math.random() * 30) - 15}px`
        );

        glitter.style.setProperty(
            "--glitter-y",
            `${Math.floor(Math.random() * 25) + 20}px`
        );

    glitter.style.setProperty(
      "--glitter-rotation",
      `${Math.floor(Math.random() * 180) - 90}deg`
    );

    document.body.appendChild(glitter);

    glitter.addEventListener("animationend", () => {
        glitter.remove();
    });
  }