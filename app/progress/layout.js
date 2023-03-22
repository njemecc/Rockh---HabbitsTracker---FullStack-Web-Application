'use client'
import React from 'react'

//components
import AccountMenu from '@/components/UI/Menu'

const layout = (props) => {
  return (
    <>
    <AccountMenu/>
    {props.children}
    </>
  )
}

export default layout