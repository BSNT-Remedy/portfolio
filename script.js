// alert("Welcome to my portfolio!");

document.querySelectorAll('.skill').forEach(img => {
    const delay = (Math.random() * 2).toFixed(2); 
    img.style.animationDelay = `${delay}s`;
});