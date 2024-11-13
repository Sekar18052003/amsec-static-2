import HeroImg from '../assets/ma.png';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

export default function Hero() {
    const config ={
        subtitle:'Im a Full-stack developer',
      social: {
        Facebook:'https://www.facebook.com/profile.php?id=100031128007547',
        Github:'https://github.com',
        Linkedin:'https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav',
        Instagarm:'https://www.instagram.com/sekar143_sakthi_audious/profilecard/?igsh=bXA2MTRjOXpxNmdy'
      }
    }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-4xl font-hero-font'>Hi, <br/> I'm <span className='text-black'>CS</span> Sekar
              <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-7 '>
                <a href={config.social.Facebook}className='pr-5  hover:text-white'><AiOutlineFacebook size={40}/></a>
                <a href={config.social.Linkedin}className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.Github}className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.Instagarm}className='hover:text-white'><AiOutlineInstagram size={40}/></a>
            </div>
        </div>
      
       <img  className='md:w-1/3' src={HeroImg} />
    </section>
}