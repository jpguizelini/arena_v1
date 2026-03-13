import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [hasInput, setHasInput] = useState(false);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fields = document.querySelectorAll('input');
        const anyFilled = Array.from(fields).some(f => f.value.trim() !== '');
        setHasInput(anyFilled || e.target.value.trim() !== '');
    };

    return (
        <section className="w-full flex flex-col md:flex-row items-start justify-center gap-12 py-12 px-4 max-w-7xl mx-auto ">
            {/* Form Container */}
            {/*
                <div className="relative w-full md:w-1/2 border-2 border-white rounded-[2.5rem] pl-0 pr-0 pb-0 pt-10 mr-12">
                    
                    <div className="absolute -top-8 left-5 sm:left-10">
                        <div className="flex items-center gap-2 px-4 py-2 sm:gap-4 sm:px-8 sm:py-3 rounded-2xl bg-linear-to-tr from-[#c3d33f] to-[#079c9e] shadow-lg">
                            <Image src="/images/icone-menssagem.png" alt="WhatsApp" width={20} height={21} className="sm:w-[37px] sm:h-[38px]" />
                            <span className="font-bebas text-[30px] sm:text-[52px] leading-none text-white uppercase tracking-tight">
                                Fale com a I'mídia.
                            </span>
                        </div>
                    </div>

                    <p className="font-inter text-white/80 text-base px-4 py-4">
                        Preencha o formulário e vamos conversar sobre o seu projeto.
                    </p>

                    
                    <div className="border-t-2 border-white bg-neutral-900 overflow-hidden rounded-b-[2.5rem]">
                        <div className="grid border-b-2 border-white min-h-[50px]" style={{gridTemplateColumns: '120px 1fr'}}>
                            <div className="border-r-2 border-white flex items-center bg-transparent h-full">
                                <label className="font-bebas text-[25px] uppercase tracking-wider text-white px-4 py-3">Nome:</label>
                            </div>
                            <div className="h-full">
                                <input onChange={handleInput} type="text" className="w-full h-full bg-transparent outline-none text-white text-xl placeholder:text-white/30 px-4 py-3" />
                            </div>
                        </div>
                        <div className="grid border-b-2 border-white min-h-[50px]" style={{gridTemplateColumns: '120px 1fr'}}>
                            <div className="border-r-2 border-white flex items-center bg-transparent h-full">
                                <label className="font-bebas text-[25px] uppercase tracking-wider text-white px-4 py-3">Email:</label>
                            </div>
                            <div className="h-full">
                                <input onChange={handleInput} type="email" className="w-full h-full bg-transparent outline-none text-white text-xl placeholder:text-white/30 px-4 py-3" />
                            </div>
                        </div>
                        <div className="grid min-h-[50px]" style={{gridTemplateColumns: '120px 1fr'}}>
                            <div className="border-r-2 border-white flex items-center bg-transparent h-full">
                                <label className="font-bebas text-[25px] uppercase tracking-wider text-white px-4 py-3">Telefone:</label>
                            </div>
                            <div className="h-full">
                                <input onChange={handleInput} type="tel" className="w-full h-full bg-transparent outline-none text-white text-xl placeholder:text-white/30 px-4 py-3" />
                            </div>
                        </div>

                        <AnimatePresence>
                            {hasInput && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <motion.button
                                        className="relative w-full py-4 bg-linear-to-tr from-[#c3d33f] to-[#079c9e] font-bebas text-[28px] uppercase tracking-wider text-white overflow-hidden"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <motion.span
                                            className="absolute inset-0 w-[60px] h-full bg-white/30 skew-x-[-20deg] blur-sm"
                                            initial={{ x: '-100px' }}
                                            whileHover={{ x: '120%' }}
                                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                                        />
                                        Enviar
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            */}

            {/* Side Buttons */}
            <div className="flex flex-col gap-8 w-full md:w-1/2 lg:w-1/3 pt-15">
                <motion.button
                    type="button"
                    onClick={() => alert('Em breve!')}
                    className="flex items-center justify-center w-full max-w-[300px] mx-auto md:w-full md:max-w-none md:mx-0 px-10 py-5 rounded-2xl bg-linear-to-r from-[#079c9e] via-accent to-[#079c9e] hover:scale-105 transition-transform duration-300 shadow-lg group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <span className="font-bebas text-4xl leading-none text-white text-[35.04px] uppercase tracking-tight">
                        Baixar Mídia Kit
                    </span>
                </motion.button>
                <motion.button
                    type="button"
                    onClick={() => alert('Em breve!')}
                    className="flex items-center justify-center w-full max-w-[300px] mx-auto md:w-full md:max-w-none md:mx-0 px-10 py-5 mt-[-4px] rounded-2xl bg-linear-to-r from-[#079c9e] via-accent to-[#079c9e] hover:scale-105 transition-transform duration-300 shadow-lg group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <span className="font-bebas text-4xl leading-none text-white sm:text-[35.04px] uppercase tracking-tight">
                        Calendário de <br className="block sm:hidden" />Bi-semana
                    </span>
                </motion.button>
            </div>
        </section>
    );
}