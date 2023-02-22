
import { router, useEffect, useState } from "../../lib"
import axios from "axios"
const editProject = ({ data: { id } }) => {
    const [edit, setEdit] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/project/" + id)
            .then(response => response.json())
            .then(data => setEdit(data))
    }, [])

    useEffect(() => {
        // const form = await document.getElementById(".form-add")
        const title = document.getElementById("title-project")
        const content = document.getElementById("content-project")
        const author = document.getElementById("author-project")
        const noidung = document.getElementById("noidung-project")
        const uploadImg = document.getElementById("img-project")
        const but = document.querySelector(".btn-success")
        but.addEventListener("click", async (e) => {
            e.preventDefault();
            const urls = await uploadFile(uploadImg.files)
            const formData = {
                title: title.value,
                content: content.value,
                author: author.value,
                noidung: noidung.value,
                img: urls
            }
            fetch("http://localhost:3000/project/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)

            }).then(() => router.navigate("/admin/project/"))

        })
    });

    const uploadFile = async (files) => {
        const CLOUD_NAME = "dbttci0gc";
        const PRESET_NAME = "upload-img";
        const FOLDER_NAME = "ECMA";
        const urls = [];
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

        const formData = new FormData();
        formData.append('upload_preset', PRESET_NAME);
        formData.append('folder', FOLDER_NAME);
        for (const file of files) {
            formData.append('file', file);
            const response = await axios.post(api, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            })
            urls.push(response.data.secure_url)

        }
        return urls

    }
    return /*html*/`
    <form action="" id="form-add" class="form-group mb-3">
    <label for="">Title</label>
    <input type="text" value="${edit.title}" id="title-project" class="form-control">
    </form>
    <!--  -->
    <form action="" id="form-add" class="form-group mb-3">
    <label for="">Content</label>
    <input type="text" value="${edit.content}" id="content-project" class="form-control">
    </form>
    <!--  -->
    <form action="" id="form-add" class="form-group mb-3">
    <label for="">Author</label>
    <input type="text" value="${edit.author}"  id="author-project" class="form-control">
    
    </form>
    <!--  -->
    <form action="" id="form-add" class="form-group mb-3">
    <label for="">Noi dung</label>
    <input type="text" value="${edit.noidung}"  id="noidung-project" class="form-control">
    
    </form>
    <!--  -->
    <form action="" id="form-add" class="form-group mb-3">
    <label for="">Img</label>
    <input type="file" value="${edit.img}"  id="img-project" class="form-control">
    
    </form>
    <div class="form-group ">
    <button class="btn btn-success">Sua </button>
  </div>
  `
}

export default editProject