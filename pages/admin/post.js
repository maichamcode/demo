import { useEffect, useState } from "../../lib"
import headersAdmin from "../../nav/headersAdmin";

const post = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/post")
      .then(response => response.json())
      .then((data) => setData(data))
  }, [])
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove")
    for (const btn of btns) {
      const id = btn.dataset.id
      // console.log(id);
      btn.addEventListener("click", (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/post/" + id, {
          method: "DELETE"
        })
          .then((response) => response.json())
          .then(({ data }) => setData(data))
        const newData = data.filter((post) => post.id != id)
        setData(newData)

      })

    }
  })
  return  /*html*/`
  
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
<br>
<br>

    <table class="table table-bordered" >
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Content</th>
          <th>Img</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        ${data.map((post, index) => /*html*/`
        <tr>
            <td>${index + 1}</td>
            <td>${post.title}</td>
            <td>${post.content}</td>
            <td><img src="${post.img[0]}" width="100px"></td>
            <td>${post.author}</td>
            <td>
            <button data-id=${post.id} class="btn btn-danger btn-remove">Xóa</button> 
            <button data-id=${post.id} class="btn btn-success"><a href="/admin/post/${post.id}/edit" class="text-white"    >Sửa</a></button>
            </td>
            
        </tr>
        
        `).join("")}
      </tbody>
    </table>
    <button class="btn btn-primary" ><a href="/admin/post/add" class="text-white">Thêm</a></button>
    

    `
}

export default post