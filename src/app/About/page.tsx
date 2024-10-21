"use client"
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
    <div className='grid sm:grid-cols-2 gap-2 bg-teal-300'>
    <div className="">
    <Image src={"https://img.freepik.com/free-vector/cute-astronaut-with-rocket-bag-cartoon-vector-icon-illustration-technology-education-icon-isolated_138676-5828.jpg?w=740&t=st=1729507126~exp=1729507726~hmac=c61ce93d9fbb189e5b23a0f17f3e0c573bf93a4485066b6d467e1e2641cb11cd"}
     alt="Image"
     height={500}
     width={500}
     className="rounded-full sm:m-20 "
     ></Image>
  </div>
    <div className='text-center mt-10 mb-5 mr-5'>
        <p
        className='sm:text-3xl font-serif '
        >I am a dedicated AI enthusiast with a passion for exploring the cutting edge of technology,<br/>
             especially in Web3, Metaverse, and Generative AI.<br/>
             Currently advancing my skills under the guidance of experts like<span className='bg-orange-400 p-1 rounded'> Sir Hamza Alvi,</span><br/>
             I have completed key milestones in AI and emerging tech. <br/>
            I thrive on solving complex problems and constantly learning new tools to stay ahead in the fast-evolving digital world.<br/>
             My focus is on creating innovative solutions that bridge the gap between technology and human potential.<br/>
             Ready to collaborate and make an impact in the AI and tech space.</p>
    </div>
    </div>
    </>
  )
}

export default page