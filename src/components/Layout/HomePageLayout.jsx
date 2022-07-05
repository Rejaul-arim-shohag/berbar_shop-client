import './HomePageLayout.scss'
export default function HomePageLayout({ children, title, des }) {
    return (
        <div className="container px-5 py-5">
            <div className="" data-aos="fade-down">
                <div className="text-center mb-5">
                    <h3 className='text-uppercase layoutTitle'>{title}</h3>
                </div>
            </div>
            <div data-aos="fade-up" >
                {children}
            </div>

        </div>
    )
}
