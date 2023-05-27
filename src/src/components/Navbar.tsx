'use client'
import React from 'react'
import { Menubar } from 'primereact/menubar';
import Link from 'next/link';
export function Navbar() {

    const start = <Link href='/'><img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png?20220319060844" height="40" className="cursor-pointer" /></Link>;
  return (
    <Menubar className='' start={start} />
  )
}
