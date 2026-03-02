import Image from 'next/image';

export default function ImpactSection() {
    return (
        <div className="relative w-full overflow-hidden" style={{ height: '600px' }}>
            {/* Background Image */}
            <div className="relative w-full">
                <Image
                    src="/images/outdoor/evidencia-marca.png"
                    alt="Sua marca em evidência"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                    priority
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 md:px-8 lg:px-16">
                <section className="w-full max-w-4xl mx-auto flex flex-col items-center">
                    {/* Main Title */}
                    <h2 className="font-goldplay font-bold text-white text-center" 
                        style={{ 
                            fontSize: 'clamp(24px, 5vw, 38px)',
                            lineHeight: '1.2',
                            marginTop: 'clamp(150px, 20vw, 300px)',
                            marginBottom: '5px'
                        }}>
                        Sua marca em evidência
                    </h2>

                    {/* Stats Container */}
                    <div className="flex flex-col items-center w-full">
                        {/* +30 CIDADES */}
                        <div className="text-center w-full">
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
                        </div>

                        {/* +240 MILHÕES */}
                        <div className="text-center w-full" style={{ marginBottom: '-10px' }}>
                            <p 
                                className="font-bebas font-normal leading-none"
                                style={{ 
                                    fontSize: 'clamp(48px, 8vw, 128px)',
                                    color: '#C3D33F',
                                }}
                            >
                                +240 MILHÕES
                            </p>
                        </div>

                        {/* DE PESSOAS IMPACTADAS MENSALMENTE */}
                        <div className="text-center w-full">
                            <p 
                                className="font-bebas font-normal uppercase"
                                style={{ 
                                    fontSize: 'clamp(16px, 3vw, 30px)',
                                    color: '#C3D33F'
                                }}
                            >
                                de pessoas impactadas mensalmente
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
