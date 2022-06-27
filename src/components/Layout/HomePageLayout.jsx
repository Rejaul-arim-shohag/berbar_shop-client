import React from 'react'
import { motion } from "framer-motion"

export default function HomePageLayout({ children, title, des }) {
    return (
        <div className="container px-5 my-5">
            <div className="text-center mb-5">
                <h3>{title}</h3>
                <p className='text-muted '>{des}</p>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
            >

                {children}

            </motion.div>

        </div>
    )
}
