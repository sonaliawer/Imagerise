const openModalBtn = document.querySelectorAll(".upload-btn");
openModalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    createModalHtml();
    const modalCloseBtn = document.querySelector(".close");
    modalCloseBtn.addEventListener("click", () => {
      clearModal();
    });
  });
});

//Create modal html

function createModalHtml() {
  console.log("added succesfully");
  let modalHtml = `
      <section class="image-enhancer-popup">
          <svg class="close">
              <use xlink:href="./assets/icons/icons.svg#close"></use>
          </svg>
          <div class="image-enhancer-popup-gallery">
              <!-- <ul>
                  <li>
                      <div class="skeleton">
                          <div class="skeleton-img loading"></div>
                          <div class="skeleton-bar"></div>
                      </div>
                  </li>
                  <li>
                      <div class="skeleton">
                          <div class="skeleton-img loading"></div>
                          <div class="skeleton-bar"></div>
                      </div>
                  </li>
                  <li>
                      <div class="skeleton">
                          <div class="skeleton-img loading"></div>
                          <div class="skeleton-bar"></div>
                      </div>
                  </li>
                  <li>
                      <div class="skeleton">
                          <div class="skeleton-img loading"></div>
                          <div class="skeleton-bar"></div>
                      </div>
                  </li>
                  <li>
                      <div class="skeleton">
                          <div class="skeleton-img loading"></div>
                          <div class="skeleton-bar"></div>
                      </div>
                  </li>
              </ul> -->
              <div class="image-enhancer-popup-gallery-item">
                  <ul>
                      <li>
                          <img src="./assets/images/image-001.png" alt="image-001">
                          <div class="remove">
                              <svg>
                                  <use xlink:href="./assets/icons/icons.svg#subtract"></use>
                              </svg>
                          </div>
                      </li>
                      <li>
                          <img src="./assets/images/image-002.png" alt="image-002">
                          <div class="remove">
                              <svg>
                                  <use xlink:href="./assets/icons/icons.svg#subtract"></use>
                              </svg>
                          </div>
                      </li>
                      <li>
                          <img src="./assets/images/image-003.png" alt="image-003">
                          <div class="remove">
                              <svg>
                                  <use xlink:href="./assets/icons/icons.svg#subtract"></use>
                              </svg>
                          </div>
                      </li>
                      <li>
                          <img src="./assets/images/image-004.png" alt="image-004">
                          <div class="remove">
                              <svg>
                                  <use xlink:href="./assets/icons/icons.svg#subtract"></use>
                              </svg>
                          </div>
                      </li>
                      <li>
                          <img src="./assets/images/image-005.png" alt="image-005">
                          <div class="remove">
                              <svg>
                                  <use xlink:href="./assets/icons/icons.svg#subtract"></use>
                              </svg>
                          </div>
                      </li>
                  </ul>
              </div>
              <figure>
                  <div class="big-image">
                      <!-- <div class="skeleton-big-img loading"></div> -->
                      <img src="./assets/images/image-001.png" alt="image-001">
                      <div class="zoom-button">
                            <span class="text">Preview Image</span>
                            <span class="icon">
                                <svg>
                                    <use xlink:href="./assets/icons/icons.svg#zoom"></use>
                                </svg>
                            </span>
                      </div>
                      <div class="image-scale">
                          <ul>
                              <li>
                                  <svg>
                                      <use xlink:href="./assets/icons/icons.svg#subtract"></use>
                                  </svg>
                              </li>
                              <li><p>50 %</p></li>
                              <li>
                                  <svg>
                                      <use xlink:href="./assets/icons/icons.svg#add"></use>
                                  </svg>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <figcaption class="image-info">
                      <div class="image-info-item">
                          <h4 class="hghlt-text">Image <span class="block"> Size<span> </h4>
                          <h4 class="tc">300<span class="hghlt-text">KB</span><span class="nrml-text">Original</span></h4>
                          <svg>
                              <use xlink:href="./assets/icons/icons.svg#arrow"></use>
                          </svg>
                          <h4 class="tc">700<span class="hghlt-text">KB</span><span class="nrml-text">updated</span></h4>
                      </div>
                      <div class="image-info-item bd-lt-rt">
                          <h4 class="hghlt-text">Resolution <span class="block"> Size<span> </h4>
                          <h4 class="tc">300x300<span class="nrml-text">Original</span></h4>
                          <svg>
                              <use xlink:href="./assets/icons/icons.svg#arrow"></use>
                          </svg>
                          <h4 class="tc">1000x1000<span class="nrml-text">updated</span></h4>
                      </div>
                      <div class="image-info-item">
                        <button class="download-btn transition">
                            Download Image
                            <svg>
                            <use xlink:href="./assets/icons/icons.svg#download"></use>
                            </svg>
                        </button>
                      </div>
                  </div>
              </figure>
          </div>
          <div class="image-enhancer-box">
              <h3>Image Enhancer</h3>
              <div class="image-enhancer-box-title upscaling image-enhancer-settings" >
                  <span>Upscaling</span>
                  <label class="form-control">
                      <input type="radio" name="radio" value="original"/>
                      Original
                  </label>                  
                  <label class="form-control">
                      <input type="radio" name="radio" value="2x" checked="checked"/>
                      2x
                  </label>
                  <label class="form-control">
                      <input type="radio" name="radio" value="4x"/>
                      4x
                  </label>
              </div>
              <div class="image-enhancer-box-title bd-tp image-enhancer-settings">
                  <span>Noise Reduction</span>
                  <label class="switch">
                      <input type="checkbox" checked="checked">
                      <span class="slider round"></span>
                    </label>
              </div>
          </div>
    </section>
  `;
  let modalParentDiv = document.querySelector(".file_upload");
  modalParentDiv.insertAdjacentHTML("beforeend", modalHtml);
  modalParentDiv.classList.add("open-enhancer-modal");
}

//close modal
function clearModal() {
  let modalDiv = document.querySelector(".file_upload");
  modalDiv.lastElementChild.remove();
  modalDiv.classList.remove("open-enhancer-modal");
  console.log("close succesfully");
}
