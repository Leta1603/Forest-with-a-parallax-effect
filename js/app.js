document.addEventListener("mousemove", (e) => {
  Object.assign(document.documentElement, {
    style: `
        --move-x:${(e.clientX - window.innerWidth / 2) * -0.007}deg;
        --move-y:${(e.clientY - window.innerHeight / 2) * -0.02}deg;
        `,
  });
});

document.addEventListener("touchmove", (e) => {
    Object.assign(document.documentElement, {
        style: `
        --move-x:${(e.clientX - window.innerWidth / 2) * -0.007}deg;
        --move-y:${(e.clientY - window.innerHeight / 2) * -0.02}deg;
        `,
    });
});