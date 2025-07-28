    const   button = document.querySelector(".btn");
    const image = document.querySelector("img");

    async function randomCatImages() {
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search");
            const data = await response.json();
            image.src = data[0].url;

        }
        catch (error) {
            console.log(error);
        }
}
 button.addEventListener("click", () => {
     let isLoaded = image.complete;
     if (isLoaded) {
         randomCatImages();
     }
 });
