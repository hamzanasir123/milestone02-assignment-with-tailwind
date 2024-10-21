"use client"
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
    <div className="grid sm:grid-cols-2 gap-2 bg-purple-400">
    <div className="">
    <Image src={"https://img.freepik.com/free-vector/cute-astronaut-holding-planet-wearing-hoodie-cartoon-vector-icon-illustration-science-technology_138676-4352.jpg?t=st=1729507528~exp=1729511128~hmac=5d92a8175acb033325102afd7805ccd3d294b68edc5e7c780f7ecbd3398f3b81&w=740"}
     alt="Image"
     height={500}
     width={500}
     className="rounded-full sm:m-20 "
     ></Image>
  </div>
    <div className='text-center mt-20 sm:mr-10 mb-5 '>
        <p
        className='sm:text-3xl font-serif '
        >Feel free to reach out for any collaborations, inquiries,<br/> 
            or discussions related to AI, Web3, Metaverse, or emerging technologies.<br/>
             I am always open to exploring new opportunities and innovative projects.<br/>
             You can contact me via email at <span className='bg-orange-400 p-1 rounded'> hk435981@gmail.com.</span><br/>
             Alternatively, connect with me on LinkedIn for professional networking.<br/>
             Lets create something impactful together!</p>
    </div>
    </div>
    </>
  )
}

export default page