'use client'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { DetailCharacter } from '@/src/components/DetailCharacter'

export default function IdCharacter({params}: any) {
    const [character, setCharacter]: any = useState(null);
  return (
    <>
    <DetailCharacter idCharacter={params.id} />
    </>
  )
}
