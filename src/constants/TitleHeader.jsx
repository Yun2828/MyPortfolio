import React from 'react'

const TitleHeader = ({title}) => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="font-semibold md:text-5xl text-3xl text-center">
                {title}
            </div>
        </div>
    )
}
export default TitleHeader
