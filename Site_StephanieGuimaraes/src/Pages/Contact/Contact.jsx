import { Email} from '@mui/icons-material'
import TitlePages from '../../Components/TitlePages/TitlePages'
import './Contact.css'

const Contact = () => {
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
                    <li>Contact@GreatStack.dev</li>
                    <li>+55 62 9 8214 9782</li>
                    <li>Brazil, Goiânia/Go</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact