import React from "react";
const tags = [
  "aero",
  "ashtanga",
  "Body",
  "Candle",
  "classes",
  "hatha",
  "health",
  "instructor",
  "Mind",
  "retreat",
  "vinyasa",
  "Yoga",
];

const items = [
  "Yoga Equipment",
  "Aero",
  "Block",
  "Candle",
  "Scent",
  "Scrub",
  "Soap",
  "Vinyasa"
];

function RightCotainer() {
  return (
    <div>
      <div className="px-[50px]">
        <div className="">
        <div className="">
            <div className="w-full">
                <img className="rounded-tr-[50%]" src="https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/05/Author-img2.jpg" alt=""/>
            </div>
            <div className="mt-5">
                <h1 className="text-[#3e4939] text-[20px] font-[620]">Carrie stone</h1>
                <p className="text-[18px] font-[450] mt-2">Astanga Yoga Instructer</p>
            </div>
        </div>
          <div className="mt-[30px]">
            <h1 className="text-[#3e4939] font-[620] text-[22px]">
              Categories
            </h1>

            <ul className="mt-[10px]">
            {items?.map((elm,id)=>{
          return(
            <>
            <a href={`/blogs/${elm}?type=category&val=${elm}`} key={id+"category"}  className="block text-[16px] font-[400]">{elm}</a>
            </>
          )
        })}
            </ul>
          </div>
        </div>

        <div className="mt-[40px]">
          <div className="">
            <h1 className="text-[#3e4939] font-[620] text-[22px]">
              Recent Blogs
            </h1>
          </div>

          {Array.from({ length: 2 }, (elm, id) => {
            return (
              <>
                <div className={`w-[110px] ${id !== 0 ? "mt-4" : "mt-5"}`}>
                  <div className="w-[110px] h-[160px] relative">
                    <img
                      className="w-full hover:opacity-40 transition-opacity duration-300 h-full object-cover"
                      src={
                        "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/05/h1-blog-list-img5.jpg"
                      }
                      alt=""
                    />
                    <div className="absolute top-0 bg-white left-2 p-2">
                      <p className="text-[16px] font-[550]">17 </p>
                      <p className="text-[16px] font-[550]">June </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex flex-row justify-start space-x-2">
                      <h1 className="text-[#3e4939] font-[400] text-[15px]">
                        By Mehul
                      </h1>
                      <p className="text-[#3e4939] font-[400] text-[15px]">/</p>
                      <p className="text-[#3e4939] font-[400] text-[15px]">
                        Aero
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="mt-[40px]">
          <div className="">
            <h1 className="text-[#3e4939] font-[620] text-[22px]">TAGS</h1>
          </div>
          <div className="flex flex-wrap gap-[8px] mt-3">
            {tags?.map((elm, id) => {
              return (
                <>
                  <div className="px-2 py-[2px] hover:bg-white cursor-pointer transition-colors duration-300 rounded-[4px] bg-[#eae9e9]">
                    <p className="text-[13px] font-[500]">{elm}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightCotainer;
