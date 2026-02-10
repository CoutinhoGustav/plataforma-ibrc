import React from 'react';

const Contato = () => {
    const socials = [
        { name: "Facebook", url: "https://www.facebook.com" },
        { name: "Instagram", url: "https://www.instagram.com/ibrc_df" },
        { name: "WhatsApp", url: "https://wa.me/yourwhatsappnumber" },
        { name: "Youtube", url: "https://www.youtube.com/@igrejabatistaregulardocalv5714" },
        { name: "Spotify", url: "https://open.spotify.com/show/3RC1O9rkXKZCRGRWXLrih8" },
    ];

    return (
        <div className="min-h-screen transition-colors duration-300 flex items-center justify-center pt-20">
            <div className="max-w-4xl mx-auto px-4 text-center animate-hero-content">
                <h1 className="text-[36px] font-bold mb-12">
                    Fique por dentro em nossas <span className="text-secondary dark:text-primary">redes sociais:</span>
                </h1>

                <div className="flex flex-col items-center gap-6">
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary w-full max-w-[300px] text-xl text-center flex items-center justify-center py-4 rounded-[25px]"
                        >
                            {social.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contato;
