"use client"
import React from 'react'
import { useRouter, useParams } from 'next/navigation'

const HabbitName = () => {
    const router = useRouter()

    const searchParams  = useParams()

      console.log(searchParams)
  return (
    <div>{habbitName}</div>
  )
}

export default HabbitName