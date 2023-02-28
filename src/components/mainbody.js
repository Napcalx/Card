import './mainbody.css';
import mail from './asset/iconMail.png'

function MainBody() {
    return (
        <div>
            <div className='title'>
                <section className='iden'>
                <h1>Calx Naphthali </h1>
                <p className='info'> Blockchain Developer</p>
                <h4> Calx@website</h4>
                <p className='btn'>
                    <a href='calebnaphthali97@gmail.com' className="mail">
                        <img src={mail} className="logos" alt="logos" /> <span>Email</span>
                    </a>
                </p>
                <section className='detail'>
                <p className='data'>
                    <h1>About</h1>
                    <p>I am a passionate Blockchain Developer with great interest in breaking down complex task into small and easy
                        to understand functions thereby enabling anyone to easily pickup and build, i am also focused on ensuring good 
                        internt security measures.
                    </p>
                </p>
                <p className='data'>
                    <h1>Interest</h1>
                    <p>Crypto Gaming, Formula 1, Ethical Hacking, Cloud Security, General Aviation, DeepSea Diving, Sky Diving, 
                        Helicopter Piloting
                    </p>
                </p>
                </section>
                </section>
            </div>
        </div>
    );
}
export default MainBody;