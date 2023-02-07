import  React from 'react'
import style from './testing.module.css'
import logo from '../public/Logo.png'
import Card from '../components/card'
import Logo from '../components/logo'

export default function testing() {
    return (
      <>
      <div className={style.body}>
        <div className="">
        < Logo />
        </div>
        <div className="">
        < Card />
          
        </div>
      </div>


      
      </>
    )
  }