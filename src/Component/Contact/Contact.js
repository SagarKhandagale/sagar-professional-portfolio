import { React } from 'react'
import "./Contact.css"

const Contact = () => {
    return (
        <div>
            <section class="contact" id="contact">
                <div className='heading text-center'>
                    <h4>CONTACT</h4>
                    <h1>Contact With Me</h1>
                </div>
                <div class="contact-content">
                    <div class="contactInfo">
                        <h3>Contact Info</h3>
                        <div class="contactInfoBx">
                            <div class="box">
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="text">
                                    <h3>Address</h3>
                                    <p><a href="https://goo.gl/maps/GQVY38pYUtvHdAKV6" target="_blank" rel="noreferrer">231 Park Drive, <br /> Boston, MA <br /> 02215</a></p>
                                </div>
                            </div>
                            <div class="box">
                                <div class="icon">
                                    <i class="fas fa-phone-alt"></i>
                                </div>
                                <div class="text">
                                    <h3>Phone</h3>
                                    <p><a href="tel:857-763-8602">(857)-763-8602</a></p>
                                </div>
                            </div>
                            <div class="box">
                                <div class="icon">
                                    <i class="far fa-envelope"></i>
                                </div>
                                <div class="text">
                                    <h3>Email</h3>
                                    <p><a href="mailto:info@khandagale.com" >khandagale.s@northeastern.edu</a></p>
                                </div>
                            </div>
                        </div>

                        <footer>

                            {/* <a href="https://twitter.com/ksagar2094"><i class="footer-icons fab fa-twitter fa-lg"></i></a> */}
                            <a href="https://www.linkedin.com/in/sagarjk2094/"><i
                                class="footer-icons fab fa-linkedin-in fa-lg"></i></a>
                            <a href="https://github.com/SagarKhandagale"><i
                                class="footer-icons fab fa-github fa-lg"></i></a>
                            <a href="https://www.instagram.com/sagar_k2094/?hl=en"><i
                                class="footer-icons fab fa-instagram fa-lg"></i></a>

                        </footer>
                    </div>

                    <div class="formBx">
                        <form action="mailto:info@khandagale.com" method="post" enctype="text/plain">
                            <h3>Message Me</h3>
                            <input type="text" name="fullname" placeholder="Full Name" onChange={InputEvent} />
                            <input type="text" name="email" placeholder="Email" onChange={InputEvent} />
                            <textarea name="message" placeholder="Your Message" onChange={InputEvent}></textarea>
                            <input className='btn_shadow' type="submit" value="send" />
                        </form>
                    </div>

                </div>



            </section>
        </div>
    )
}

export default Contact