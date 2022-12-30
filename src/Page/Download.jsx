import React from "react"
 import Image from './../components/items/Images.jsx'
import {Images} from './../../src/assets/Images'
function Download(){
  return(
    <section className="download mt-[71px] bg-[#F36B7F] ">
    
      <div className="container flex justify-between">
        <div className="heading-down w-[50%]  pr-[60px]">
          <h3 className="font-bold text-[47px] pt-[164px]   text-[#fff] leading-200 ">Dowload the Clean Cruiz App on playstore and get 10% discount</h3>
          <p className="pt-[16px] text-[#fff] text-[16px] leading-[29px] font-400 mb-[16px] pr-[200px] " >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Thank you.</p>
               <Image src={Images.googlePlay}/>
        </div>
        <div className="content_iphone pt-[96px] ">
             <Image ClassName={'w-[366px] h-[655px]'} src={Images.iphone}/>
        </div>
     </div>
   </section>
    )
}

export default Download
