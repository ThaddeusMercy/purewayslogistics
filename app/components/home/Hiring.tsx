"use client";

export default function Hiring() {


  // const toggleAccordion = (section: string) => {
  //   setOpenSection(openSection === section ? null : section)
  // }

  // useEffect(() => {
  //   // Calculate heights for each accordion section
  //   const newHeights: Record<string, number> = {}
    
  //   jobCategories.forEach(category => {
  //     if (contentRefs.current[category.id]) {
  //       newHeights[category.id] = contentRefs.current[category.id]?.scrollHeight || 0
  //     }
  //   })
    
  //   setHeights(newHeights)
  // }, [openSection])

  // const FlagIcon = () => (
  //   <svg 
  //     width="16" 
  //     height="16" 
  //     viewBox="0 0 512 512" 
  //     className="w-4 h-4 mr-1"
  //     fill="none" 
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <rect width="512" height="512" fill="#f0f0f0"/>
  //     <path d="M0,0 H512 V128 L256,192 L512,256 V512 H0 Z" fill="#0052B4"/>
  //     <path d="M0,0 H256 V256 H0 Z" fill="#f0f0f0"/>
  //     <path d="M128,0 V128 H0 V0 Z M256,0 V128 H128 V0 Z M128,128 V256 H0 V128 Z M256,128 V256 H128 V128 Z" fill="#D80027"/>
  //     <path d="M144,0 H112 V106.7 H0 V138.7 H112 V245.3 H144 V138.7 H256 V106.7 H144 Z" fill="#D80027"/>
  //   </svg>
  // )

  

  return (
    <section className="pt-12 md:pt-14 flex items-center  bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
        <div className="text-accent-500 text-center text-xl md:text-4xl font-medium mb-6 md:mb-8 tracking-tighter">
          We're hiring!
        </div>
       
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">We're looking for talented people</h2>
          <div className="h-2"></div>
          <p className="text-lg text-white">
            Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
          </p>
        </div>
        <div className="flex justify-center">
          <a 
            href="/join-us" 
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 mb-8"
          >
            Join Us
          </a>
        </div>

      
      </div>
    </section>
  )
} 