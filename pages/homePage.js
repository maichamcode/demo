import footer from "../components/footer"
import { useEffect, useState } from "../lib"
import headers from "../nav/headers"

const homePage = () => {
  // user
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => setUser(data))
  }, [])
  //skills
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/skills")
      .then((response) => response.json())
      .then((data) => setSkill(data))
  }, [])
  // phương châm
  const [maxim, setMaxim] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/maxim")
      .then((response) => response.json())
      .then((data) => setMaxim(data))
  }, [])
  // team
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/team")
      .then((response) => response.json())
      .then((data) => setTeam(data))
  }, [])
  //contact
  const [contact, setContact] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/contact")
      .then((response) => response.json())
      .then((data) => setContact(data))
  }, [])
  // post
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/post")
      .then((response) => response.json())
      .then((data) => setPost(data))
  }, [])
  // project
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/project")
      .then((response) => response.json())
      .then((data) => setProject(data))
  }, [])
  return /*html*/`
    
    ${headers()}
    
    <main id="main">
      <!-- ======= Clients Section ======= -->
      <section id="clients" class="clients">
        <div class="container" data-aos="zoom-in">
          <div class="clients-slider swiper">
            <div class="swiper-wrapper align-items-center">
              <div class="swiper-slide">
                <img
                  src="assets/img/clients/banner.jpg"
                  class="img-fluid"
                  alt="" 
                />
              </div>
              

      <!-- ======= About Section ======= -->
      
            </div>
          </div>
        </div>
      </section>
      <!-- End About Section -->
  
      <!-- ======= Services Section ======= -->
      
      <section id="services" class="services section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
          
            <h2>ABOUT</h2>
            
            
            
            <p>
              Tôi là sinh viên năm 2 tại trường cao đẳng FPT Polytechnic
            </p>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i><h1>🙋‍♂️</h1></i>
                <h4><a href="#">Họ Tên</a></h4>
                <h5>${user.name}</h5>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i ><h1>📅</h1></i>
                <h4><a href="#">Năm sinh</a></h4>
                <h5>${user.age}</h5>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                <i ><h1>☎</h1></i>
                <h4><a href="#">SĐT</a></h4>
                <h5>${user.phone}</h5>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                <i ><h1>🛕</h1></i>
                <h4><a href="#">Địa Chỉ</a></h4>
                <h5>${user.address}</h5>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="500">
                <i ><h1>📧</h1></i>
                <h4><a href="#">Email</a></h4>
                <h5>${user.email}</h5>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="600">
                <i ><h1>💼</h1></i>
                <h4><a href="#">Chuyên ngành</a></h4>
                <h5>${user.major}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- End Services Section -->
      <!-- ======= Tabs Section ======= -->
      <h1 class="text-center">Skills</h1>
      <br>
      <br>
      ${skill.map((data) => /*html*/`
      
      
          <div class="tab-content">
            <div class="tab-pane active show" id="tab-1">
              <div class="row">
                <div
                  class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3>
                      ${data.title}
                  </h3>
                 
                  <ul>
                    <li>
                      <i class="ri-check-double-line"></i>${data.skill1}
                    </li>
                    <li>
                      <i class="ri-check-double-line"></i> ${data.skill2}
                    </li>
                    <li>
                      <i class="ri-check-double-line"></i> ${data.skill3}
                    </li>
                    <li>
                      <i class="ri-check-double-line"></i> ${data.skill4}
                    </li>
                  </ul>
                  <p>
                    
                  </p>
                </div>
                <div
                  class="col-lg-6 order-1 order-lg-2 text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img src="assets/img/clients/imgskill.jpeg" alt="" width="250px" class="img-fluid" />
                </div>
              </div>
            </div>
            
      `).join("")}
      <!-- End Tabs Section -->
      <hr>

      <!-- ======= Portfolio Section ======= -->
      <section id="portfolio" class="portfolio">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Portfolio</h2>
           
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">All</li>
                <li data-filter=".filter-app">iphone11</li>
                <li data-filter=".filter-card">iphone12</li>
                <li data-filter=".filter-web">iphone13</li>
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
      <hr>
<!-- ======= Project ======= -->
<section id="portfolio" class="portfolio">
<div class="container" data-aos="fade-up">
  <div class="section-title">
    <h2>Project</h2>
   
  </div>

  <div class="row" data-aos="fade-up" data-aos-delay="100">
    <div class="col-lg-12 d-flex justify-content-center">
      <ul id="portfolio-flters">
        <li data-filter="*" class="filter-active">All</li>
        <li data-filter=".filter-app">iphone11</li>
        <li data-filter=".filter-card">iphone12</li>
        <li data-filter=".filter-web">iphone13</li>
      </ul>
    </div>
  </div>

  <div
    class="row portfolio-container"
    data-aos="fade-up"
    data-aos-delay="200"
  >
  ${project.map((data) =>/*html*/`
  
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
            <a href="/project/${data.id}/projectdetail" title="More Details"
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
<!-- End Project -->
      <!-- ======= Testimonials Section ======= -->
      <section id="testimonials" class="testimonials">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
          ${maxim.map((data) =>/*html*/`

          
            <h2>${data.phuongCham}</h2>
            <p>
            ${data.title}
            </p>
          </div>
          
          <div
            class="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonial-wrap">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/clients/mai1.png"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>${data.name}</h3>
                    <h4>${data.student}</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      ${data.doanvan}
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              `).join("")}
              <!-- End testimonial item -->

              

              <div class="swiper-slide">
                <div class="testimonial-wrap">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              <!-- End testimonial item -->

              <div class="swiper-slide">
                <div class="testimonial-wrap">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-4.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              <!-- End testimonial item -->

              <div class="swiper-slide">
                <div class="testimonial-wrap">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-5.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat esse veniam culpa
                      fore nisi cillum quid.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              <!-- End testimonial item -->
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
      <!-- End Testimonials Section -->

      

      

      <!-- ======= Team Section ======= -->
      <section id="team" class="team section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Team</h2>
            

            
            
          </div>
         
          <div class="row">
          ${team.map((data) =>/*html*/`
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="100">
                <div class="member-img">
                  <img
                    src="${data.img}"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>${data.name}</h4>
                  <span>${data.pos}</span>
                </div>
              </div>
            </div>
            

            

          `).join("")}

            
          </div>
          
          
        </div>
        
      </section>
      <!-- End Team Section -->

      <!-- ======= Contact Section ======= -->
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
        ${contact.map((data) =>/*html*/`
          <div class="section-title">
            <h2>Contact</h2>
            

            

            
            <p>
              ${data.lienhe}
            </p>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-md-12">
                  <div class="info-box">
                    <i class="bx bx-map"></i>
                    <h3>${data.address}</h3>
                    <p>${data.address2}</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i class="bx bx-envelope"></i>
                    <h3>Email Us</h3>
                    <p>${data.email}<br />${data.email2}</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i class="bx bx-phone-call"></i>
                    <h3>Call Us</h3>
                    <p>${data.phone}<br />${data.phone2}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form"
              >
                <div class="row">
                  <div class="col form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="col form-group">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  
                </div>
                
                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
                
              </form>
              
            </div>
          </div>
          `).join("")}
        </div>
        
        
      </section>

      <!-- End Contact Section -->
    </main>
    <!-- End #main -->
    ${footer()}
  `
}

export default homePage