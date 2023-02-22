import { router, useEffect, useState } from "../../lib"

const login = () => {
    const [login, setLogin] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/login")
            .then((response) => response.json())
            .then((data) => setLogin(data))
    }, [])
    useEffect(() => {
        const user = document.getElementById("username");
        const pass = document.getElementById("password");
        const btn = document.querySelector(".btn-primary")
        btn.addEventListener("click", (e) => {
            e.preventDefault()
            login.forEach(data => {
                if (data.user == user.value && data.pass == pass.value) {
                    router.navigate("/admin")
                } else {
                    alert("ban nhap sai r")
                }
            });
        })
    })
    return /*html*/`
    <form>
    <label for="username">Tên đăng nhập:</label>
    <input type="text" id="username" name="username" required>
    <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" required>
  
    <button  class="btn btn-primary">Đăng nhập</button>
  </form>
  `
}

export default login