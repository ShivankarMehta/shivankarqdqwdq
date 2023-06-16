import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="contact-info">
        <div className="container-fluid">
          <div className="row">
            <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
              <div className="contact_info_item d-flex justify-content-start align-items-center">
               <div className="content_info_content">
                <div className="contact_info_title">
                  Phone
                </div>
                <div className="contact_info_text">
                  8271681154
                </div>
               </div>
               <div className="content_info_content">
                <div className="contact_info_title">
                  Email
                </div>
                <div className="contact_info_text">
                  shivankarmehta60@gmail.com
                </div>
               </div>
               <div className="content_info_content">
                <div className="contact_info_title">
                  Address
                </div>
                <div className="contact_info_text">
                  Ara
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>


     <div className="contact_form">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="contact_form_container py-5">
              <div className="contact_form_title">
                GET IN TOUCH
              </div>
              <form id="contact_form">
                <div className="contact_form_name d-flex justify-content-between align-items-center">
                 <input type="text" id="contact_form_name" className='contact_form_name input_field'
                  placeholder='Your Name' required="true"
                 />
                  <input type="email" id="contact_form_email" className='contact_form_email input_field'
                  placeholder='Your Email' required="true"
                 />
                  <input type="number" id="contact_form_phone" className='contact_form_phone input_field'
                  placeholder='Your Phone Number' required="true"
                 />
                </div>
                <div className="contact_form_text mt-5">
                  <textarea placeholder="Message" className='contact_form_message text_field' cols="100" rows="10"></textarea>
                </div>
                <div className="contact_form_button">
                  <button type="submit" className='button contact_submit_button'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Contact