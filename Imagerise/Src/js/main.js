//add class to show and hide the noise reduction block
const scalingOption = document.querySelectorAll('input[name="scaling"]');
const scalingParent = document.querySelector('#upscalingOption');

scalingOption.forEach(option =>{
  showNoiseReduction(option);
});

function showNoiseReduction(option) {
  option.addEventListener("click", () => {
    if(option.value == "Original"){
      scalingParent.classList.remove('upscaling-noise-hidden');
    }
    else{
      scalingParent.classList.add('upscaling-noise-hidden');
    }
  });
}

//add class to show and hide sample images group
const sapmleImageBtn = document.querySelectorAll('.upload_type-link ');
const sampleImageBox = document.querySelector('.imagebox');
sapmleImageBtn[2].addEventListener('click', () =>{
  sampleImageBox.classList.toggle('imagebox-show');
});

