import React from 'react'

export default function HomePageLayout({children,title,des}) {
    return (
        <div className="container px-5 my-5">
            <div className="text-center mb-5">
                <h3>{title}</h3>
                <p className='text-muted '>{des}</p>
            </div>

            {children}
           
        </div>
    )
}
