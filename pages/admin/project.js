import { useEffect, useState } from "../../lib"
import headersAdmin from "../../nav/headersAdmin"

const project = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/project")
            .then((response) => response.json())
            .then((data) => setProject(data))
    }, [])
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove")
        for (const btn of btns) {
            const id = btn.dataset.id;
            // console.log(id);
            btn.addEventListener("click", (e) => {
                e.preventDefault()
                fetch("http://localhost:3000/project/" + id, {
                    method: "DELETE"
                })
                    .then(response => response.json())
                    .then(({ data }) => setProject(data))
                const newData = project.filter((project) => project.id != id)
                setProject(newData)
            })
        }
    })

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
        ${project.map((project, index) => /*html*/`
        <tr>
        <td>${index + 1}</td>
        <td>${project.title}</td>
        <td>${project.content}</td>
        <td><img src="${project.img[0]}" width="100px"></td>
        <td>${project.author}</td>
        
        <td>
            <button data-id="${project.id}" class="btn btn-danger btn-remove">Xoa</button>
            <button data-id=${project.id} class="btn btn-success"><a href="/admin/project/${project.id}/edit" class="text-white"    >Sửa</a></button>

        </td>
    </tr>
        `).join("")}
        
      </tbody>
    </table>
    <button class="btn btn-primary" ><a href="/admin/project/add" class="text-white">Thêm</a></button>

    
  `
}

export default project