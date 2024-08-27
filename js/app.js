document.addEventListener("mousemove", (e) => {
  Object.assign(document.documentElement, {
    style: `
        --move-x:${(e.clientX - window.innerWidth / 2) * -0.007}deg;
        --move-y:${(e.clientY - window.innerHeight / 2) * -0.02}deg;
        `,
  });
});

document.addEventListener("touchmove", (e) => {
    console.log("e.clientX", e.touches[0].clientX);
    Object.assign(document.documentElement, {
        style: `
        --move-x:${(e.touches[0].clientX - window.innerWidth / 2) * -0.007}deg;
        --move-y:${(e.touches[0].clientY - window.innerHeight / 2) * -0.02}deg;
        `,
    });
});