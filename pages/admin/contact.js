

import { useEffect, useState } from "../../lib";
import headersAdmin from "../../nav/headersAdmin";


const contact = () => {
  //contact
  const [contact, setContact] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/contact")
      .then((response) => response.json())
      .then((data) => setContact(data))
  }, [])
  return /*html*/`
  <header id="header" class="fixed-top d-flex align-items-center">
  <div class="container d-flex align-items-center">
    <h1 class="logo me-auto"><a href="index.html">Mai<span>.</span></a></h1>
    <!-- Uncomment below if you prefer to use an image logo -->
    <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt=""></a>-->

    <nav id="navbar" class="navbar order-last order-lg-0">
      <ul>
        
      ${headersAdmin()}
              
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
    </nav><!-- .navbar -->

  </div>
</header><!-- End Header -->
<br>
<br>
<br>
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
              <button class="btn btn-success"><a href="/admin/contact/editContact">Sửa</a></button>
            </div>
          </div>
          `).join("")}
        </div>
        
        
      </section>

      <!-- End Contact Section -->
    
  `
}

export default contact