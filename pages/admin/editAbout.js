import { router, useEffect, useState } from "../../lib"

const aboutAdmin = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => setUser(data))
  }, [])
  useEffect(() => {
    const form = document.querySelector(".form-add")
    const name = document.getElementById("name")
    const age = document.getElementById("age")
    const phone = document.getElementById("phone")
    const address = document.getElementById("address")
    const email = document.getElementById("email")
    const major = document.getElementById("major")
    console.log(name.value);
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      const formData = {
        name: name.value,

        age: age.value,
        phone: phone.value,
        address: address.value,
        email: email.value,
        major: major.value,
      }
      fetch("http://localhost:3000/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)

      }).then(() => router.navigate("/admin/about/"))
    })
  })
  return /*html*/`

<form class="form-add">

<div class="row">
<div class="col-md-6">
  <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
    <i><h1>🙋‍♂️</h1></i>
    <h4><a href="#">Họ Tên</a></h4>
<input type="text" id="name" value="${user.name}">
    
  </div>
</div>
<div class="col-md-6 mt-4 mt-md-0">
  <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
    <i ><h1>📅</h1></i>
    <h4><a href="#">Năm sinh</a></h4>
<input type="text" id="age" value="${user.age}">
    
  </div>
</div>
<div class="col-md-6 mt-4 mt-md-0">
  <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
    <i ><h1>☎</h1></i>
    <h4><a href="#">SĐT</a></h4>
<input type="text" id="phone" value="${user.phone}">
    
  </div>
</div>
<div class="col-md-6 mt-4 mt-md-0">
  <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
    <i ><h1>🛕</h1></i>
    <h4><a href="#">Địa Chỉ</a></h4>
<input type="text" id="address" value="${user.address}">

  </div>
</div>
<div class="col-md-6 mt-4 mt-md-0">
  <div class="icon-box" data-aos="fade-up" data-aos-delay="500">
    <i ><h1>📧</h1></i>
    <h4><a href="#">Email</a></h4>
<input type="text" id="email" value="${user.email}">

  </div>
</div>
<div class="col-md-6 mt-4 mt-md-0">
  <div class="icon-box" data-aos="fade-up" data-aos-delay="600">
    <i ><h1>💼</h1></i>
    <h4><a href="#">Chuyên ngành</a></h4>
<input type="text" id="major" value="${user.major}">

  </div>
  <br>
 
</div>

 
</div>

<button class="btn btn-success">Sửa </button>

</form> 
  `
}

export default aboutAdmin