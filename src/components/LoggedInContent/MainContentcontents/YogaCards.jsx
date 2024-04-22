import React from 'react'

const YogaCards = ({name,details,link}) => {
  return (
    <>
        <div className="bg-purple-200 text-white p-3 rounded-2xl min-h-[600px] w-[470px] lg:w-[29vw]">
          <div className="rounded-lg mb-3">
            <iframe
              className="w-full h-[250px] rounded-lg mx-auto shadow-2xl  border-2 hover:bg-purple-300 border-purple-900 text-purple-900 p-3 rounded-xl m-5 font-semibold"
              src={link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="bg-white h-[503px] text-purple-700 rounded-lg p-4 px-6">
            <div className="shadow-2xl text-2xl font-semibold mb-4 mt-2 border-2 py-2 px-3 border-purple-900 rounded-lg">
              <a className="font-bold text-center px-5">{name}</a>
            </div>
            <div className='font-quicksand'>
              {details}
            </div>
          </div>
        </div>
    </>
  )
}

export default YogaCards