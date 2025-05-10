import React from 'react'
import ButtonIcon  from "./ButtonIcon"
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'
import { useDarkMode } from '../context/DarkModeProvider'

export default function DarkModeToogle() {
    const {isDarkMode, toogleDarkMode} = useDarkMode();
  return (
    <ButtonIcon onClick={toogleDarkMode}>{isDarkMode? <HiOutlineSun/> :<HiOutlineMoon/>}</ButtonIcon>
  )
}
