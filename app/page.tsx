'use client'
import AppTable from "@/components/app.tabel"
import Link from "next/link"
export default function Home() {
  return (
   <div>
   {/* <ul>
    <li>
      <Link href={'/facebook'}>Facebook</Link>
    </li>
    <li>
      <Link href={'/youtube'}>Youtube</Link>
    </li>
    <li>
      <Link href={'/tiktok'}>Tiktok</Link>
    </li>
   </ul> */}
   <AppTable />
   </div>
  )
}
