function FeaturesComparison() {
  return (
    <section className="mt-[150px]">
     <div className="max-w-screen-lg lg:mx-auto px-4 ">
       <p className="bg-textgradiantMid text-transparent bg-clip-text text-[24px] lg:text-[32px] font-semibold leading-[40px] lg:leading-[56px] text-center">
         Zyro Soundbox vs Others
       </p>
      
       <div className="lg:h-[529px] p-[1px] h-auto rounded-[27px] overflow-x-auto mt-6 flex items-center justify-center bg-featurediv  bg-clip-text text-transparent  hover:shadow-md transition duration-300 text-center" style={{
                 background:
                   " linear-gradient(160deg,rgba(79, 49, 180, 1) 6%, rgba(34, 21, 78, 1) 100%)",
               }}>
         <div className="lg:h-[99.7%] h-[calc(100%-2px)]  lg:w-[99.7%] w-full rounded-[27px] bg-[#080411] lg:px-[52px] relative">
             <div className="feature-comparison-gradient hidden lg:block"></div>
             <div className="feature-comparison-gradient1"></div>
         <table className="min-w-full rounded-[27px] text-white  border-collapse ">
           <thead className="text-[15px] lg:text-[24.75px] font-medium leading-[27px] bg-transparent">
             <tr>
               <th className="px-4 py-6 text-left">Features</th>
               <th className="px-4 py-6 text-left">Zyro Soundbox</th>
               <th className="px-4 py-6 text-left">Others</th>
             </tr>
           </thead>
           <tbody>
             {[
               {
                 feature: "Connectivity",
                 zyro: "4G SIM + Wi-Fi Dual Mode",
                 others: "SIM - Only, Often unstable",
               },
               {
                 feature: "Battery Backup",
                 zyro: "Up to 4 days",
                 others: "1-2 days",
               },
               {
                 feature: "Multi-Language Support",
                 zyro: "10 Languages Supported",
                 others: "Limited or single language",
               },
               {
                 feature: "Dashboard Access",
                 zyro: "Yes, with Detailed Payment History",
                 others: "Usually not available",
               },
               {
                 feature: "Merchant Support",
                 zyro: "24/7 Dedicated Support",
                 others: "Limited or no support",
               },
             ].map((row, i) => (
               <tr key={i} className="border-b border-gray-700 text-left">
                 <td className="px-4 py-6 text-[11px] lg:text-[18px] font-medium lg:font-semibold leading-[17px] lg:leading-[27px]">{row.feature}</td>
                 <td className="px-4 py-6 text-[11px] lg:text-[15.75px] font-normal text-[#989898] leading-[17px] lg:leading-[27px]">{row.zyro}</td>
                 <td className="px-4 py-6 text-[11px] lg:text-[15.75px] font-normal text-[#989898] leading-[17px] lg:leading-[27px]">{row.others}</td>
               </tr>
      
             ))}
             <tr className="">
                 <td className="py-6"></td>
                 <td></td>
                 <td></td>
             </tr>
           </tbody>
         </table>
           <div className="feature-comparison-gradient2 hidden lg:block"></div>
      
       </div>
       </div>
     </div>
    </section>
  );
}

export default FeaturesComparison;
