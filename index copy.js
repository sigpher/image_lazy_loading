const images = document.querySelectorAll('img');
const callback = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target;
            const data_src = image.getAttribute('data-src');
            image.setAttribute("src", data_src);
            observer.unobserve(image)
            console.log("触发");
        }
    })
}
const observer = new IntersectionObserver(callback);

images.forEach(image => {
    observer.observe(image);
})