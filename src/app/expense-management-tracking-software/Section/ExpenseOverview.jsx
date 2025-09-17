// import React from 'react'


const contentData = [
  {
    image: '/image/ExpenseManagement/ExpenseExpress.webp',
    heading: "Add New Expenses",
    paragraph:
      "Upload expense easily from your dashboard.",
  },
  {
    image: '/image/ExpenseManagement/ExpenseEasyBulk.webp',
    heading: "Easy Bulk Upload",
    paragraph:
      "Import multiple expense via excel.",
  },
  {
    image: '/image/ExpenseManagement/ExpenseQuickReport.webp',
    heading: "Quick Reports",
    paragraph:
      "Get real-time insights in just one click.",
  },
 
];

function ExpenseOverview() {
  return (
   <section className=" mt-[140px] lg:mt-[180px]">
    <div className='max-w-screen-lg mx-auto  xl:px-[0px] relative'>
    <div className='hidden lg:block expenseOverviewGradiant'></div>
      <h2 className="px-1 text-center lg:text-left text-[28px] lg:text-[34px] lg:leading-[45px] leading-[40px] font-semibold   ExpenseOverviewHeader">
       One Platform, Every Expense Covered
      </h2>
      <p className='px-6 lg:px-1 py-3 text-center lg:text-left font-normal text-[16px] leading-[25px] lg:text-[20px] lg:leading-[33px] text-[#959595]'>All your business expense, managed in one place</p>
      <div className="flex flex-wrap flex-col sm:flex-row gap-9 lg:gap-[17px] justify-center items-center xl:justify-between mt-[35px] lg:mt-[45px]">
        {contentData.map((item, index) => (
          <div
            key={index}
            style={{aspectRatio:'0.78'}}
            className="flex flex-col  transform transition-transform duration-300 ease-in-out hover:scale-[1.04]"
          
          >
           <div className='cardbg relative  h-[290px] w-[317px] rounded-b-[0px] rounded-t-[13.59px] p-[0.6px]'>
             <div className="bg-[#080219] left-[1px] right-[1px] top-[2px] absolute  h-[calc(100%-2px)]  p-[55px]  rounded-t-[13.59px] rounded-b-[0px]  ">
               <img src={item.image} className="" />
             </div>
           </div>
            <div className="bg-white py-[13px] px-[25px] rounded-b-[13.59px] rounded-t-[0px] flex-1 flex flex-col justify-start w-[317px]">
             
              <h3 className="text-[16px] font-semibold leading-[25px] text-[#4F31B4] pt-[11px]">
                {item.heading}
              </h3>
              <p className="text-[14px] font-medium leading-[25px] text-[#565656] pt-[3px]">
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div> 
</div>
    </section>
  )
}

export default ExpenseOverview