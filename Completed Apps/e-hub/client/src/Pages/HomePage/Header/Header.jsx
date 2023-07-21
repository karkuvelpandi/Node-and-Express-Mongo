import React from 'react'
import './Header.css'
import logo2 from '../../../assets/header-img.png'
import { Slider } from '../../../components/Slider/Slider'
import slider1 from "../../../assets/Slider/slider1.jpg"
import slider2 from "../../../assets/Slider/slider2.jpg"
import slider3 from "../../../assets/Slider/slider3.jpg"
const Header = () => {
   const imageArray = [slider1, slider2, slider3]
   const imageChild = () => {
      return imageArray.map((img, index) => (
         <img key={index} src={img} alt="" />
      ))
   }
   return <>

      <div className='relative'>
         <Slider dots dotColor='blue' dotContainerClass='flex gap-10  absolute top-1/2 left-1/2'>
            {imageChild()}
         </Slider>

      </div>
   </>
}

export default Header