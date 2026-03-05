import Image from "next/image";
import { motion } from "framer-motion";


export default function SocialFeed() {

    const formatos = [
        { img: "/images/home/instagram1.jpg", title: "OUTDOOR" },
        { img: "/images/home/instagram2.jpg", title: "FRONT LIGHT", position: "80% center" },
        { img: "/images/home/instagram3.jpg", title: "RODOVIA" },
        { img: "/images/home/instagram4.jpg", title: "MOBILIÁRIO URBANO" },
        { img: "/images/home/instagram5.jpg", title: "PAINEL DIGITAL" },
        { img: "/images/home/instagram6.jpg", title: "MEGA PAINEL" },
    ];
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 mt-[29px] pb-[180px]">
      <motion.h1
        className="
          text-[40px] sm:text-[76.04px]
          leading-none
          font-bebas
          font-bold
          mt-[8px]
          max-w-[170px] sm:max-w-[520px]
          ml-18 sm:ml-59
          bg-linear-to-r
          from-accent
          to-[#079c9e]
          bg-clip-text
          text-transparent uppercase text-left
        "
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        SIGA NOSSO INSTAGRAM
      </motion.h1>

        <div className="relative w-full grid grid-cols-[251px] sm:grid-cols-[repeat(2,251px)] lg:grid-cols-[repeat(3,251px)] justify-center gap-x-[10px] gap-y-[10px]">
          <motion.div 
            className="pointer-events-none absolute right-8 sm:right-[100px] md:right-[200px] lg:right-[250px] top-[-80px] sm:top-[-152px] z-10 block sm:block md:block lg:block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-[120px] h-[87px] sm:w-[180px] sm:h-[131px] md:w-[210px] md:h-[153px] lg:w-[240px] lg:h-[175px]">
              <Image
                src="/images/robo2.png"
                alt="Robo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
                        {formatos.map((formato, index) => (
                            <div key={index} className="relative  md:aspect-3/4 overflow-hidden w-[251px] h-[313px] group cursor-pointer">
                                <Image
                                    src={formato.img}
                                    alt={formato.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
    </section>
  )
}