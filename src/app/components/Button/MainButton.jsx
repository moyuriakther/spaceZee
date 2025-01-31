import React from 'react'

export default function MainButton({text, icon, style=0}) {
  return (
    <button className={`bg-black text-white rounded-xl px-6 py-3 font-semibold inline-flex items-center gap-2 w-fit hover:bg-gray-800 transition-color ${style}`}>
        {text}
    {icon &&  icon}
    </button>
  )
}
