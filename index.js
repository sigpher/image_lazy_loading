const images = document.querySelectorAll('img');
const callback = entries =>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const image = entry.target;
            image.setAttribute("src",image.getAttribute("data-src"))
            observer.unobserve(image)
        }
    })
}

const observer = new IntersectionObserver(callback);
images.forEach(image=>{
    observer.observe(image)
})