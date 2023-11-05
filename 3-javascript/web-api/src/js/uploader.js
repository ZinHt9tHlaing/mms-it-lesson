const form = document.querySelector("#form");
const photos = document.querySelector("#photos");
const uploaderUi = document.querySelector("#uploaderUi");

// click event forward ui to file input
uploaderUi.addEventListener("click", () => {
  photos.click();
});

const selectedPhotoPreview = (event) => {
  event.preventDefault();
  // for (let photo of photos.files) {}

  // 1. get file
  [...photos.files].forEach((photo) => {
    // file reader instance
    const fileReader = new FileReader();

    // file reader event
    fileReader.addEventListener("load", (event) => {
      //   console.log(event.target.result); //url

      // create new img
      const img = new Image();
      // set url as src of img
      img.src = event.target.result;
      img.classList.add("object-cover", "object-top", "h-24", "rounded-lg");
      // append of doc
      uploaderUi.append(img);
    });

    // read file
    fileReader.readAsDataURL(photo);
  });
};

photos.addEventListener("change", selectedPhotoPreview);
