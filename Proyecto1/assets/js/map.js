document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
                                <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0"
                                    marginwidth="0"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.376637406576!2d-3.689629923890877!3d40.42265827143871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422899f1e2d9fb%3A0xcb802d3dedf5565a!2sC.%20de%20Claudio%20Coello%2C%2019%2C%2028001%20Madrid!5e0!3m2!1ses!2ses!4v1701283886173!5m2!1ses!2ses"
                                    width="600" height="250" style="border:0;" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    }, 500)

})
