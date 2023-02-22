import footer from "../components/footer";
import { useEffect, useState } from "../lib";
import headers from "../nav/headers"

const postPage = () => {
  // post
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/post")
      .then((response) => response.json())
      .then((data) => setPost(data))
  }, [])
  return /*html*/`
    ${headers()}
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
      <br>
      <br>
      <br>
        <h2>Portfolio</h2>
       
      </div>

      <div class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>

      <div
        class="row portfolio-container"
        data-aos="fade-up"
        data-aos-delay="200"
      >
      ${post.map((data) =>/*html*/`
      
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img
              src="${data.img}"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>${data.title}</h4>
              <p>${data.content}</p>
              <div class="portfolio-links">
                <a
                  href="${data.img}"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="App 1"
                  ><i class="bx bx-plus"></i
                ></a>
                <a href="/post/${data.id}/postdetail" title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        `).join("")}
       


        

        

       

        

       

        
      </div>
    </div>
  </section>
  <!-- End Portfolio Section -->
  ${footer()}
    
  `
}

export default postPage