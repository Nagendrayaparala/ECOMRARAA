function  addClickListenersToImages(imageIds){
    imageIds.forEach((imageId)=> {
        const image = document.getElementById(imageId);
        if(image){
            image.addEventListener("click",imageClickHandler);
        }
    });
}
function imageClickHandler(event){
    const imageUrl = event.target.src;

    window.location.href = `new.html?image=${encodeURIComponent(imageUrl)}`;
}

const imageIds = ["image1","image2","image3","image4","image5","image6","image7","image8","image9","image10","image11","image12","image13","image14","image15","image16"];
addClickListenersToImages(imageIds);