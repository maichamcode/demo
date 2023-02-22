import { router, useEffect } from "../../lib"
import axios from "axios"
const addPost = () => {
    useEffect(() => {
        // const form = await document.getElementById(".form-add")
        const title = document.getElementById("title-post")
        const content = document.getElementById("content-post")
        const author = document.getElementById("author-post")
        const uploadImg = document.getElementById("img-post")
        const but = document.querySelector(".btn-primary")
        but.addEventListener("click", async (e) => {
            e.preventDefault();
            const urls = await uploadFile(uploadImg.files)
            const formData = {
                title: title.value,
                content: content.value,
                author: author.value,
                img: urls
            }
            fetch("http://localhost:3000/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)

            }).then(() => router.navigate("/admin/post/"))

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
    <input type="text" id="title-post" class="form-control">
    </form>
    <!--  -->
    <form action="" id="form-add" class="form-group mb-3">
    <label for="">Content</label>
    <input type="text" id="content-post" class="form-control">
    </form>
    <!--  -->
    <form action="" id="form-add" class="form-group mb-3">
    <label for="">Author</label>
    <input type="text" id="author-post" class="form-control">
    
    </form>
    <!--  -->
    <form action="" id="form-add" class="form-group mb-3">
    <label for="">Img</label>
    <input type="file" id="img-post" multiple class="form-control">
    
    </form>
    
    <div class="form-group ">
    <button class="btn btn-primary" > Them san pham</button>
  </div>
    
    
    `
}

export default addPost