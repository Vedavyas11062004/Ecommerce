import React from "react";

function ContactUs() {
  return (
    <div>
      <div className="contact-main-page">
        <div className="container">
          <div id="google-map">
            <div className="mapouter">
              <div className="gmap_canvas d-flex justify-content-center">
                <iframe
                  style={{ height: "50vh", width: "80vw" }}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>

                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
              <div className="contact-page-side-content">
                <h3 className="contact-page-title">Contact Us</h3>
                <p className="contact-page-message">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Velit ipsum maiores facere. Quam quasi ipsum quos debitis
                  perferendis obcaecati fugit recusandae, ad, sequi quod
                  doloribus dolores earum id corrupti maxime.
                </p>
                <div className="single-contact-block">
                  <h4>
                    <i className="fa fa-fax"></i> Address
                  </h4>
                  <p>123 Main Street, Anytown, CA 12345 – USA</p>
                </div>
                <div className="single-contact-block">
                  <h4>
                    <i className="fa fa-phone"></i> Phone
                  </h4>
                  <p>Mobile: (00) 000 000 0000</p>
                  <p>Hotline: 1009 678 456</p>
                </div>
                <div className="single-contact-block last-child">
                  <h4>
                    <i className="fa fa-envelope-o"></i> Email
                  </h4>
                  <p>email@domain.com</p>
                  <p>support@.company</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="contact-form-content">
                <h3 className="contact-page-title">Tell Us Your Message</h3>
                <div className="contact-form">
                  <form
                    id="contact-form"
                    // action="https://whizthemes.com/mail-php/mamunur/kenne/kenne.php"
                  >
                    <div className="form-group">
                      <label>
                        Your Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="con_name"
                        id="con_name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Your Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="con_email"
                        id="con_email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input type="text" name="con_subject" id="con_subject" />
                    </div>
                    <div className="form-group form-group-2">
                      <label>Your Message</label>
                      <textarea name="con_message" id="con_message"></textarea>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        value="submit"
                        id="submit"
                        className="kenne-contact-form_btn"
                        name="submit"
                      >
                        send
                      </button>
                    </div>
                  </form>
                </div>
                <p className="form-message"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
