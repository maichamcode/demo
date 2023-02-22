import header from "../components/header"

const headers = () => {
  return `
  <header id="header" class="fixed-top d-flex align-items-center">
  <div class="container d-flex align-items-center">
    <h1 class="logo me-auto"><a href="index.html">Mai<span>.</span></a></h1>
    <!-- Uncomment below if you prefer to use an image logo -->
    <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt=""></a>-->

    <nav id="navbar" class="navbar order-last order-lg-0">
      <ul>
        
                ${header()}
              
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
    </nav><!-- .navbar -->

    <a href="/login" class="get-started-btn scrollto">🤵Admin</a>
  </div>
</header><!-- End Header -->
  `
}

export default headers