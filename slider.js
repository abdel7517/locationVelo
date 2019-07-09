const slider =
  {
    numberImage : 1,

  imageSelector()
  {
    const image = document.getElementById("image");

     switch(this.numberImage)
      {
        case 1 : image.setAttribute("src", "map.jpg");
        break;
        case 2 : image.setAttribute("src", "form.jpg");

      };
  },

  next()
    {
     this.numberImage++;
     if (this.numberImage > 2)
        {
            this.numberImage = 1;
        }
      this.imageSelector();
    },

  previous()
    {
      this.numberImage --;
      if(this.numberImage < 1)
        {
          this.numberImage = 2;
        }
      this.imageSelector();
      clearInterval(counter);
    },

  pause()
    {
      clearInterval(counter);
    }

  }

const nextImage = () => {slider.next()};
const previousImage = () => { slider.previous()};
const stop = () => { slider.pause() }

// automatic image change
const counter = setInterval(nextImage, 5000);

//  button next image
const buttonNext = document.getElementById("buttonNext");
buttonNext.addEventListener("click", nextImage);

// button for previous image

const buttonPrevious = document.getElementById("buttonPrev");
buttonPrevious.addEventListener("click", previousImage);

// button for stop the slider
const buttonPause = document.getElementById("pause");
buttonPause.addEventListener("click", stop);
