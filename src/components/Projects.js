import websiteImg1 from '../assets/website .webp'
import websiteImg2 from '../assets/heroo.png'
import websiteImg3 from '../assets/website.jpg'

export default function Projects() {
    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-secondary text-white">
        <div className="w-full">
             <div className="flex flex-col px-10 py-5">
                 <h1 className="text-4xl text-white border-b-4 border-primary  mb-5 w-[140px] font-bold" >Projects</h1>
                   <p >This is Sample</p>
             </div>
           </div>

        <div className="w-full">
             <div className='flex flex-col md:flex-row px-10 gap-5 '>
                <div className='relative'>
                     <img className='h-[200px] w-[500px]' src={ websiteImg1}/>
                     <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100'>
                        <p className='text-center  py-5'>sample1</p>
                     </div>
                </div>

                <div className='relative'>
                     <img className='h-[200px w-[500px]]' src={ websiteImg2}/>
                     <div className='project-desc'>
                        <p className='text-center  py-5'>sample2</p>
                     </div>
                    
                </div>
                <div className='relative'>
                     <img className='h-[200px] w-[500px]' src={ websiteImg3}/>
                       <div className='project-desc'>
                          <p className='text-center  py-5'>sample3</p> 
                         </div>
                </div>
             </div>
        </div>
    </section>
}