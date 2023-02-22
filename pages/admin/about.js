import { useEffect, useState } from "../../lib";
import headersAdmin from "../../nav/headersAdmin";

const about = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => setUser(data))
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
           <a href="/admin/about/edit/"> <button class="btn btn-success">Sửa</button></a>
          </div>
          
          
        </div>
      </section>
      
      
  `
}

export default about