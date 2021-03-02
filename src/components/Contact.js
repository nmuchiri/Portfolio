import emailjs from "emailjs-com"

//CSS import
import "../css/components/Contact.css"


const Contact =()=>{
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_jrg41yl', 
        'template_j8rfifg', e.target, 
        'user_dJZzI9ZSWLy3FbMoRoHkF')
          .then((result) => {
            window.location.reload();
          }, (error) => {
              console.log(error.text);
          });
      }
    
      return (
        <>
        <div className="container">
          <div className="row">
            <div className="col s12 m6 l6 chat-box center-align left-div">
            <br></br><br></br>
              <h1 className="page-title">Let's Connect!</h1>
            </div>
            <div className="col s12 m6 l6 right-div">
              <form class="contact-form sm center-align " onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <div class=" center-align row">
                  <div class="center-align input-field col s12">
                    <input
                      className="center-align"
                      type="text"
                      name="from_name"
                      class="validate"
                    />
                    <label className="center-align" for="first_name" style={{color:'white'}}>
                      Name
                    </label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input
                      type="email"
                      name="from_email"
                      id="email"
                      class="validate"
                    />
                    <label for="email" style={{color:'white'}}>Email</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <textarea
                      id="textarea1"
                      className="materialize-textarea"
                      name="message"
                    ></textarea>
                    <label for="textarea1" style={{color:'white'}}>Message</label>
                  </div>
                </div>
                <input className="buttons btn" type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </>
      );
    }

export default Contact