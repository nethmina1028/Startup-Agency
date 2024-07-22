import React from 'react'

function Navbar() {
     
    
    const navItems = [
        { label: "Home", href: "#" },
        { label: "About Us", href: "#" },
        { label: "Our App", href: "#" },
        { label: "Contacts", href: "#" },
        
        
      ];

  return (
    <div className=' flex md:flex-row justify-between bg-white md:sticky md:top-0 md:shadow-none z-20 p-4 items-center '>

           <div>
           <img src="/images/logo.png" alt="logo" />
           </div>
           
                   
                <ul className='hidden md:flex gap-12 font-semibold '>
                    {navItems.map((item, index) => (
                        <li key={index}>
                         <a className='hover:text-primary' href="">{item.label}</a>  
                        </li>
                    ))} 
                </ul>
            

            <div className='hidden md:block px-4 space-x-7 ' >
                <a className='hover:text-primary font-semibold' href="">Login</a>
                <button className='bg-orange-500 h-[3.1215rem] w-[7.4375rem] text-white hover:opacity-90 rounded-[0.625rem] font-medium '>Sign up</button>
            </div>
               
               
    </div>
           
           
    
  );
}

export default Navbar;