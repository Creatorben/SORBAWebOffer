import React from 'react'

const PrimaryButton = ({text, link}) => {
  return (
    <a
                    href={link}
                    className="rounded-md bg-newport-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-newport-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-newport-600"
                  >
                    {text}
                  </a>
  )
}

export default PrimaryButton
