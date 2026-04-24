"use client"
import React from 'react'
import { useRouter } from "next/navigation";

const RequestInvestigationBtn = () => {
   const router = useRouter();
  return (
       <div className="flex cursor-pointer flex-col sm:flex-row items-center gap-4"  onClick={() =>  router.push(`/contact-us`)}>
              <button className="px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/20 w-full sm:w-auto inline-flex items-center justify-center gap-2">
                Request Investigation{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </button>
        </div>
  )
}

export default RequestInvestigationBtn