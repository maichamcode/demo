import { useEffect, useState } from "../lib"
import headers from "../nav/headers";

const postPageDetail = ({ id }) => {

  const [detail, setDetail] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/post/" + id)
      .then(response => response.json())
      .then((data) => setDetail(data))
  }, [])
  return /*html*/`
  ${headers()}
  <br>
  <br>
  <br>
  <br>
  <br>
    <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <section class="breadcrumbs"></section>
    <!-- End Breadcrumbs -->
  
    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">
                <div class="swiper-slide">
                  <img
                    src="${detail.img}"
                    alt=""
                  />
                </div>             
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
  
          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Thông tin</h3>
              <ul>
                <li><strong>Title</strong>: ${detail.title}</li>
                <li><strong>Content</strong>: ${detail.content}</li>
                <li><strong>Client</strong>: ${detail.author}</li>
                <li><strong>Project date</strong>: 01 March, 2020</li>
                
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>Giới thiệu</h2>
              <p>
               ${detail.noidung}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Portfolio Details Section -->
  </main>
  <!-- End #main -->
  `
}

export default postPageDetail