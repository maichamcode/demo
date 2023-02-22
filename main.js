
import "bootstrap/dist/css/bootstrap.min.css"
import { render, router } from "./lib"
import aboutPage from "./pages/aboutPage"
import post from "./pages/admin/post"
import contactPage from "./pages/contactPage"
import homePage from "./pages/homePage"
import postPage from "./pages/postPage"
import addPost from "./pages/admin/addPost"
import editPost from "./pages/admin/editPost"
import admin from "./pages/admin/admin"
import aboutAdmin from "./pages/admin/editAbout"
import about from "./pages/admin/about"
import contact from "./pages/admin/contact"
import editContact from "./pages/admin/editContact"
import login from "./pages/login/login"
import projectPage from "./pages/projectPage"
import project from "./pages/admin/project"
import addProject from "./pages/admin/addProject"
import editProject from "./pages/admin/editProject"

import projectPageDetail from "./pages/projectPageDetail"
import postPageDetail from "./pages/postPageDetail"


const app = document.querySelector("#app")
router.on("/", () => render(homePage, app))
router.on("/about", () => render(aboutPage, app))
router.on("/post", () => render(postPage, app))
router.on("/contact", () => render(contactPage, app))
router.on("/project", () => render(projectPage, app))
router.on("/admin", () => render(admin, app))


//login
router.on("/login", () => render(login, app))

//admin post
router.on("/admin/post", () => render(post, app))
router.on("/admin/post/add", () => render(addPost, app))
router.on("/admin/post/:id/edit", (params) => render(() => editPost(params), app))
//admin about
router.on("/admin/about", () => render(about, app))
router.on("/admin/about/edit", () => render(aboutAdmin, app))
//admin contact
router.on("/admin/contact", () => render(contact, app));
router.on("/admin/contact/editContact", () => render(editContact, app));

//admin project
router.on("/admin/project", () => render(project, app))
router.on("/admin/project/add", () => render(addProject, app))
router.on("/admin/project/:id/edit", (params) => render(() => editProject(params), app))

//project
router.on("/project/:id/projectdetail", ({ data }) => render(() => projectPageDetail(data), app))
//post
router.on("/post/:id/postdetail", ({ data }) => render(() => postPageDetail(data), app))


router.resolve();


