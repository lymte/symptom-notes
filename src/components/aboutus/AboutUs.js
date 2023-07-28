import { Link } from 'react-router-dom';
import pic1 from '../../images/pic1.jpg';

const AboutUs = () => {
    return (
        <div className="App">
        <header className="App-header">
        <h1>Welcome to Symptom Notes!</h1>
        <p>
        This website aims to help people understand and recognize the signs of serious diseases by highlighting the small symptoms that people often may not notice or give too much attention. By increasing awareness of these symptoms, we hope to provide valuable information that can help individuals take appropriate action for their health.
        </p>
        <p>
We want to make it clear that the diseases we mentioned are not the only ones that can cause the symptoms we discussed, but they are the ones that are more likely or have a higher chance. If you experience any of these symptoms for a long period, it's important to go to the hospital for professional treatment.
        </p>
        <img src={pic1} id="pic1">
        
        </img>
        <Link id="enter-main" to='/symptom-notes/list'>Check this out!</Link>
        <p>&copy; Linwei (Will) Ren</p>
      </header>
    </div>
    );
}
 
export default AboutUs;