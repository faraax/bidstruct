import React from 'react';

export default function HowItWorks() {
    return (
        <div className='bg-secondary py-7 x-container flex flex-col items-center'>
            <div className='2xl:text-6xl xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-white py-7'>
                <h2 className='text-center'>How does it work?</h2>
            </div>

            <div class="rounded-lg relative">
                <iframe
                    class="w-full max-w-[1372px] h-[180px] sm:w-[320px] sm:h-[180px] md:w-[576px] md:h-[324px] lg:w-[768px] lg:h-[432px] xl:w-[992px] xl:h-[558px] 2xl:w-[1372px] 2xl:h-[774px] 3xl:w-[1820px] 3xl:h-[1020px]"
                    src="https://www.youtube.com/embed/djU59zzqNqQ?si=NhcXj0NfXDz8UIYx"
                    title="YouTube video player"
                    frameborder="10"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    allowfullscreen="">
                </iframe>
            </div>

            {/* <div className='rounded-lg relative'>
                <iframe
                    className='w-full max-w-[1372px] xs:h-full h-[630px] sm:w-[420px] sm:h-[280px] md:w-[576px] md:h-[324px] lg:w-[768px] lg:h-[432px] xl:w-[992px] xl:h-[558px] 2xl:w-[1372px] 2xl:h-[774px] 3xl:w-[1820px] 3xl:h-[920px]'
                    src="https://www.youtube.com/embed/djU59zzqNqQ?si=NhcXj0NfXDz8UIYx"
                    title="YouTube video player"
                    frameBorder="10"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    allowFullScreen>
                </iframe>
            </div> */}
        </div>
    );
}
