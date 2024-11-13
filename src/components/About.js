import maImg from '../assets/heroo.png';

export default function About () {
    const config={
        line1 : 'Hi, My Name Is CS SEKAR . I am a students'
    }
    return <section className='flex flex-col md:flex-row bg-primary px-5 justify-center' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={maImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center text-white'>
          <div className='text-white flex flex-col justify-center'>
              <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
              <p>{config.line1}</p>
          </div>
        </div>
    </section>
}