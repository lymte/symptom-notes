import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="App">
        <header className="App-header">
        <h1>Welcome to Symptom Notes!</h1>
        <p>
        This website will talk about what can lead to small symptoms that people may not notice or care about too much in order to provide people with a better awareness of the symptoms of some serious diseases.
        </p>
        <Link id="enter-main" to='/symptom-notes/list'>Check this out!</Link>
        <p>&copy; Linwei (Will) Ren</p>
      </header>
    </div>
    );
}
 
export default AboutUs;