import './HomePageLayout.scss'
export default function HomePageLayout({ children, title, des }) {
    return (
        <div className="container px-5 py-5">
            <div className="text-center mb-5">
                <h3 className='text-uppercase layoutTitle'>{title}</h3>
                {/* <p className=' text-uppercase layoutDes'>{des}</p> */}
                {/* <hr className="divider-horizontal-blurry " /> */}

            </div>
         
            {children}

        </div>
    )
}
