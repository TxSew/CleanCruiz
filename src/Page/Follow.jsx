import React from "react"
import {Images} from './../../src/assets/Images.jsx'
 import Image from './../components/items/Images.jsx'
function Follow() {
  return (
    <div className="flex container justify-between   ">
      <Image classname={'opacity-[0.5]'} src={Images.amazon}/>       
    <Image src={Images.ebay} classname={'opacity-[0.5]'}/>       
    <Image src={Images.klarna}  classname={'opacity-[0.5]'}/>       
    <Image src={Images.mastercard}   classname={'opacity-[0.5]'}/>       
    <Image src={Images.strpe}   classname={'opacity-[0.5]'}/>       
    <Image src={Images.netewer}   classname={'opacity-[0.5]'}/>       
  </div>
  );
}

export default Follow;
