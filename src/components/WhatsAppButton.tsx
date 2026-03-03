'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function WhatsAppButton() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="fixed bottom-6 right-6 z-50 lg:bottom-8 lg:right-8"
        >
            <Link 
                href="https://wa.me/5516999723939" 
                target="_blank" 
                rel="noreferrer"
                className="block hover:scale-110 transition-transform duration-300"
            >
                <img 
                    src="/images/icons/wpp.png" 
                    alt="WhatsApp" 
                    className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 drop-shadow-lg hover:drop-shadow-xl"
                />
            </Link>
        </motion.div>
    )
}
