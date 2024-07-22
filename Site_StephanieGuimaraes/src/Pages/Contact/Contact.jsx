import { ArrowForward, Email, LocalPhone, LocationOn, MailOutline} from '@mui/icons-material'
import TitlePages from '../../Components/TitlePages/TitlePages'
import './Contact.css'
import React from 'react';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "09388981-be37-4322-9965-8439a3996142");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
        <TitlePages title='Contato'/>
        <div className='contact'>
            <div className='contact-col'>
                <div className='contact-col-title'>
                  <h3>Send us a message</h3>
                  {/* <MailOutline sx={{fontSize: 32}}/> */}
                  <Email sx={{fontSize: 32, color: "#000F38"}}/>
                </div>
                <p>Feel free to reach out Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cum eaque vero, sint voluptas sequi?</p>
                <ul>
                    <li><MailOutline sx={{marginRight: "8px"}}/> stephanieguimarães7@gmail.com</li>
                    <li><LocalPhone sx={{marginRight: "8px"}}/> +55 62 9 8214 9782</li>
                    <li><LocationOn sx={{marginRight: "8px"}}/> Brazil, Goiânia/Go</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                  <label>Your name</label>
                  <input type="text" name='name' placeholder='Enter your name' required/>
                  <label>Phone Number</label>
                  <input type="tel" name='phone' placeholder='Enter your mobile number'/>
                  <label>Write your messages here</label>
                  <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                  <button type='submit' className='btn'>Submit now <ArrowForward sx={{marginLeft:"8px"}}/> </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    </div>
  )
}

export default Contact