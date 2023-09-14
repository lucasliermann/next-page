import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  <section className='bg-zinc-600 h-screen text-zinc-200 flex justify-center items-center flex-col gap-10'>
    <div className='bg-white w-2/5 h-60 p-5 text-red-800 flex items-center justify-center flex-col rounded-full'>
      <h1 className='text-2xl text-lime-500'>Hello world </h1>
      <p className='first-letter:uppercase'>oi</p>
      <button className='border border-blue-950 p-2 rounded-3xl hover:bg-gray-950 transition duration-500 ease-in-out'>clique aqui</button>
      <Link target='blank' href="https://tailwindcss.com/docs/transition-duration">bom dia</Link>
    </div>
    <div>
      <p className='bg-green-500 p-8 text-fuchsia-700 rounded-3xl h-50' >oi 2</p>
    </div>
  </section>
  )
}
