import React from 'react'

const SecondaryButton = ({text, link}) => {
  return (
    <a
                    href={link}
                    className="rounded-md bg-tangerine-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-tangerine-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangerine-600"
                  >
                    {text}
                  </a>
  )
}

export default SecondaryButton
