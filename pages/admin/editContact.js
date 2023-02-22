import { useEffect, useState } from "../../lib"

const editContact = () => {
    const [edit, setEdit] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/contact")
            .then((response) => response.json())
            .then((data) => setEdit(data))
    }, [])
    useEffect(() => {

    })
    return /*html*/`
    <div class="section-title"><h2>Contact</h2></div>
    <div class="col-lg-6">
              <div class="row">

                <div class="col-md-12">
                  <div class="info-box">
                    <i class="bx bx-map"></i>
                    <h3 id="address">Our Address</h3>
                    <p id="address2">A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i class="bx bx-envelope"></i>
                    <h3>Email Us</h3>
                    <p id="email">info@example.com</p>
                    <p id="email2">contact@example.com</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i class="bx bx-phone-call"></i>
                    <h3>Call Us</h3>
                    <p id="phone">+1 5589 55488 55</p>
                    <p id="phone2">+1 6678 254445 41</p>
                  </div>
                </div>
              </div>
            </div>
  `
}

export default editContact