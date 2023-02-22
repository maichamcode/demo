import { useEffect, useState } from "../lib"

const navAdmin = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/menuAdmin")
            .then(response => response.json())
            .then((data) => setData(data))
    }, []) // [] click vô li nó sẽ mượt 
    return `
    ${data.map(({ path, name }) => `<li><a href="/#${path}">${name}</a></li>`).join("")}
  `
}

export default navAdmin