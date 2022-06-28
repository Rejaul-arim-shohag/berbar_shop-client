import './HomePageLayout.css'
export default function HomePageLayout({ children, title, des }) {
    return (
        <div className="container px-5 my-5">
            <div className="text-center mb-5">
                <h3 className='text-uppercase'>{title}</h3>
                <p className='text-muted text-uppercase layoutDes'>{des}</p>
            </div>
         
            {children}

        </div>
    )
}
