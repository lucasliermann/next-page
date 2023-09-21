import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>

      <header className='bg-gradient-to-r from-cyan-300 to-sky-500 h-24 flex justify-between items-center rounded-es-2xl fixed w-full'>
        <h1 className='text-4xl p-6 text-cyan-950 text font-semibold'> Next Page</h1>
        <nav className='flex gap-7 pr-5 items-center font-extrabold'> 
          <a className='hover:bg-indigo-950 hover:scale-110 transition duration-500 px-3 py-2 rounded-2xl hover:text-white'> exemplo</a>
          <a className='hover:bg-indigo-950 hover:scale-110 transition duration-500 px-3 py-2 rounded-2xl hover:text-white'> exemplo</a>
          <a className='hover:bg-indigo-950 hover:scale-110 transition duration-500 px-3 py-2 rounded-2xl hover:text-white'> exemplo</a>
          <a className='border border-purple-50 rounded-full px-4 py-2 hover:bg-slate-950 transition-colors duration-500 hover:text-slate-200'  href="https://eliti-next-page.vercel.app/">Enter</a>
        </nav>  
      </header>
      
    <section className=' flex justify-between bg-[url("https://img.freepik.com/fotos-gratis/foto-interior-da-bela-funcionaria-afro-americana-feliz-bonita-em-pe-isolada-no-branco-sorrindo-alegremente-mantendo-os-bracos-cruzados-relaxando-dentro-de-casa-apos-o-trabalho_176420-10369.jpg?w=1060&t=st=1695228002~exp=1695228602~hmac=0005e7e273ba8d5d8a2c0a11db1e7854bd3d6595e3c6c63f643a0585f7378c9f")] h-[800px] pt-80 pl-10 bg-cover'>
      <span className='text-blue-950 text-8xl font-sans font-bold '>
        <span className='text-blue-500'>Our </span>
         product <p>admin system </p>
      </span>
    </section>

    <section className='flex flex-col items-center pb-8'>
      <div className='bg-gradient-to-r from-cyan-400 to-sky-700 h-[300px] mt-10  rounded-md flex w-3/4 justify-between '> 
        <div className='max-w-prose '>
          <h1 className='flex justify-left text-6xl text-zinc-50 font-extrabold p-4'>Título</h1>
          <span className='flex flex-col w-[50%] pl-10 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, facilis id vitae reprehenderit architecto quae error magnam eveniet expedita adipisci ex tempora saepe eaque tenetur ipsam dolore odit doloremque. Sint!</span>
        </div>
        <Image className='w-72 p-10'
          src={"/Vasco.png"}
          height={200}
          width={200}
          alt='Vasco'
        />
      </div>

      <div className='bg bg-gradient-to-br from-amber-400 to-green-700 h-[300px]  mt-14 rounded-md flex justify-between w-3/4'> 
        <div className='max-w-prose '>
        <h1 className='flex justify-left text-6xl text-zinc-50 font-extrabold p-4'>Título</h1>
        <span className='flex flex-col w-[50%] pl-10 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, facilis id vitae reprehenderit architecto quae error magnam eveniet expedita adipisci ex tempora saepe eaque tenetur ipsam dolore odit doloremque. Sint!</span>
        </div>
        <Image className='w-72 p-8'
          src={"/Vasco2.png"}
          height={200}
          width={200}
          alt='Vasco'
          />

      </div>
    </section>

    <footer className='bg-black text-neutral-50 flex justify-around h-56 p-10'>
      <div className='flex flex-col'> 
        <h1 className='pb-5 font-mono text-lg'>Contact</h1>
        <span>info</span>
        <span>info</span>
        <span>info</span>
      </div>
      <div className='flex flex-col'> 
        <h1 className='pb-5 font-mono text-lg '>My Pannel</h1>
        <span>info</span>
        <span>info</span>
        <span>info</span>
      </div>
      <div className='flex flex-col'> 
        <h1 className='pb-5 font-mono text-lg'>More info</h1>
        <span>info</span>
        <span>info</span>
        <span>info</span>
      </div>
    </footer>

    </>
  
  )
}
