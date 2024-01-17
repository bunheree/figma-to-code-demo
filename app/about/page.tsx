import Link from "next/link";
import React from "react";

const About = (): JSX.Element => {
    return (
        <div className="bg-white flex flex-grow justify-center w-full">
            <div className="bg-white overflow-hidden w-[1440px] h-[900px] relative">
                <div className="w-[1281px] top-[31px] left-[110px] absolute h-[827px]">
                    <div className="inline-flex flex-col items-start absolute top-[404px] left-[610px]">
                        <p className="relative w-[671px] h-[118px] mt-[-1.00px] [font-family:'Abel-Regular', Helvetica] font-normal text-black tracking-[0] leading-[23.0px]">
                            🖥️ I'm a full stack developer with a passion for building beautiful, functional, and scalable web applications. Well-versed in Front-End development. Good at PHP (Laravel), ReactJs, NextJS, and CSS for web applications.
                        </p>
                        <p className="relative w-[662px] h-[80px] [font-family:'Abel-Regular', Helvetica] font-normal text-black tracking-[0] leading-[23.0px]">
                            <span className="[font-family:'Abel-Regular', Helvetica] font-normal text-black tracking-[0] leading-[23.0px]">
                                ✍️ I am also passionate about writing and sharing my experiences. If you are interested in learning more about my work or simply want to connect with a fellow developer, please follow me on forums like
                            </span>
                            <Link href="https://bunhere.medium.com/" target="_blank">
                                <span>Medium</span>
                            </Link>
                            {' '}or{' '}
                            <Link href="https://dev.to/loanngo99" target="_blank">
                                <span>Dev.to</span>
                            </Link>
                        </p>
                    </div>
                    <div className="inline-flex items-center absolute top-[699px] left-[610px]">
                        <div className="relative w-[100px] h-[128px] mt-[-1.00px] [font-family:'Abel-Regular', Helvetica] font-normal text-black text-[168px] tracking-[0] leading-[normal] whitespace-nowrap">
                            4
                        </div>
                        <div className="relative w-fit [font-family:'Abel-Regular', Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[23.0px] whitespace-nowrap">
                            YEARS OF WORK
                        </div>
                    </div>
                    <div className="inline-flex items-start gap-[36px] absolute top-[803px] left-[1038px]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Abel-Regular', Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[23.0px] underline whitespace-nowrap">
                            INSTAGRAM
                        </div>
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Abel-Regular', Helvetica] font-normal text-black text-right text-[20px] tracking-[0] leading-[23.0px] underline whitespace-nowrap">
                            FACEBOOK
                        </div>
                    </div>
                    <div className="w-[1258px] top-0 left-0 absolute h-[827px]">
                        <div className="w-[592px] h-[827px] left-0 bg-[url(/images/bunhere.jpeg)] bg-cover bg-[50%_50%] absolute top-0"></div>
                        <div className="w-[899px] h-[313px] left-[359px] absolute top-0">
                            <p className="absolute w-[784px] top-0 left-[111px] [font-family:'Abel-Regular', Helvetica] font-normal text-transparent text-[168px] tracking-[0] leading-[normal] whitespace-nowrap">
                                <span className="text-white">E</span>
                                <span className="text-black">MMA</span>
                            </p>
                            <p className="absolute w-[737px] top-[160px] left-0 [font-family:'Abel-Regular', Helvetica] font-normal text-transparent text-[168px] tracking-[0] leading-[normal] whitespace-nowrap">
                                <span className="text-white">NG</span>
                                <span className="text-black">O - BUN</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex w-[85px] h-[900px] items-center justify-center gap-px px-[32px] py-[48px] absolute top-0 left-0 bg-white overflow-hidden border-r [border-right-style:solid] border-[#ababab]">
                    <div className="flex h-[21px] items-center justify-center gap-[199px] relative flex-1 grow -rotate-90">
                        <Link href="https://bunhere.com/" target="_blank">
                            <div className="relative flex-1 mt-[-3.00px] mb-[-1.00px] [font-family:'Abel',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
                                More
                            </div>
                        </Link>
                        <Link href="/">
                            <div className="relative flex-1 mt-[-3.00px] mb-[-1.00px] [font-family:'Abel',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal]">
                                Gallery
                            </div>
                        </Link>
                        <Link href="/about">
                            <div className="relative flex-1 mt-[-3.00px] mb-[-1.00px] [font-family:'Abel',Helvetica] font-normal text-black text-[20px] text-right tracking-[0] leading-[normal]">
                                About
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;