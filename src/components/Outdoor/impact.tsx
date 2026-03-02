'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ImpactSection() {
    return (
        <div className="relative w-full min-h-[600px] sm:min-h-[700px] md:min-h-0">
            <Image
                src="/images/outdoor/marca-evidencia.jpg"
                alt="Sua marca em evidência"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto min-h-[600px] sm:min-h-[700px] md:min-h-0 object-cover md:object-contain"
                priority
            />

            {/* Content Overlay */}
            <motion.div 
            className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
                <motion.section 
                    className="w-full max-w-4xl mx-auto flex flex-col items-center px-2"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Main Title */}
                    <motion.h2 
                        className="font-goldplay font-bold text-white text-center" 
                        style={{ 
                            fontSize: 'clamp(24px, 5vw, 38px)',
                            lineHeight: '1.2',
                            marginTop: 'clamp(150px, 20vw, 300px)',
                            marginBottom: '5px'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Sua marca em evidência
                    </motion.h2>

                    {/* Stats Container */}
                    <motion.div 
                        className="flex flex-col items-center w-full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {/* +30 CIDADES */}
                        <motion.div 
                            className="text-center w-full"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <p 
                                className="font-bebas font-normal leading-none"
                                style={{ 
                                    fontSize: 'clamp(48px, 8vw, 128px)',
                                    color: '#C3D33F',
                                    marginBottom: '2px'
                                }}
                            >
                                +30 CIDADES
                            </p>
                        </motion.div>

                        {/* +240 MILHÕES */}
                        <motion.div 
                            className="text-center w-full" 
                            style={{ marginBottom: '-10px' }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                        >
                            <p 
                                className="font-bebas font-normal leading-none"
                                style={{ 
                                    fontSize: 'clamp(48px, 8vw, 128px)',
                                    color: '#C3D33F',
                                }}
                            >
                                +240 MILHÕES
                            </p>
                        </motion.div>

                        {/* DE PESSOAS IMPACTADAS MENSALMENTE */}
                        <motion.div 
                            className="text-center w-full"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            <p 
                                className="font-bebas font-normal uppercase"
                                style={{ 
                                    fontSize: 'clamp(16px, 3vw, 30px)',
                                    color: '#C3D33F'
                                }}
                            >
                                de pessoas impactadas mensalmente
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.section>
            </motion.div>
        </div>
    );
}
