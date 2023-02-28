import './footer.css';
import insta from './asset/iconIG.png'
import github from './asset/iconGT.png'
import twitter from './asset/iconTW.png'
import facebook from './asset/iconFB.png'

function Thefoot(){
    return (
        <div className='main-name'>
            <div className='foot'>
            <section className='socials'>
            <a href='calebnaphthali97@gmail.com'>
                <img src={insta} className="logos" alt="logos" />
            </a>
            <a href='calebnaphthali97@gmail.com'>
                <img src={twitter} className="logos" alt="logos" />
            </a>
            <a href='calebnaphthali97@gmail.com'><img src={facebook} classNames="logos" alt="logos" /></a>
            <a href='calebnaphthali97@gmail.com'><img src={github} classNames="logos" alt="logos" /></a>
            </section>    
            </div>
        </div>
    );
}
export default Thefoot;