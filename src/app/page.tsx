import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  <>

   <header className='bg-blue-400 h-20 flex justify-between items-center rounded-es-xl fixed w-full'>
      <h1 className='text-3xl'> Next Page</h1>
      <nav className='flex gap-7 pr-5 items-center'> 
      <a className='hover:bg-blue-600 hover:scale-110 transition duration-500 px-3 py-2 rounded-2xl hover:text-red-700'> exemplo</a>
      <a className='hover:bg-blue-600 hover:scale-110 transition duration-500 px-3 py-2 rounded-2xl hover:text-red-700'> exemplo</a>
      <a className='hover:bg-blue-600 hover:scale-110 transition duration-500 px-3 py-2 rounded-2xl hover:text-red-700'> exemplo</a>
      <a className='border border-red-700 rounded-full px-4 py-2 hover:bg-red-300 transition-colors duration-500'  href="https://eliti-next-page.vercel.app/">Enter</a>
      </nav>  
  </header>
    
  <section className='bg-[url("https://img.freepik.com/fotos-premium/homem-segurando-laptop-comemorar-o-sucesso_34840-1201.jpg?w=2000")] h-[800px] pt-80 pl-10 bg-cover'>
    <span className='text-blue-950 text-8xl font-sans font-bold'> <span className='text-blue-500'>Our</span> product <p>admin system </p> </span>
  </section>

  <section>
    <div> 
      <h1>título</h1>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, facilis id vitae reprehenderit architecto quae error magnam eveniet expedita adipisci ex tempora saepe eaque tenetur ipsam dolore odit doloremque. Sint!</span>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, facilis id vitae reprehenderit architecto quae error magnam eveniet expedita adipisci ex tempora saepe eaque tenetur ipsam dolore odit doloremque. Sint!</span>
    </div>
  </section>

  <footer>
    <div> 
      <h1>Contact</h1>
      <span>info</span>
      <span>info</span>
      <span>info</span>
    </div>
    <div> 
      <h1>My Pannel</h1>
      <span>info</span>
      <span>info</span>
      <span>info</span>
    </div>
    <div> 
      <h1>More info</h1>
      <span>info</span>
      <span>info</span>
      <span>info</span>
    </div>
  </footer>

  </>
  
  )
}
