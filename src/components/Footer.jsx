import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";

import footer_bg from '../assets/footer_bg.png'
import footer_bg_mobail from '../assets/footer_bg_mobail.png'
import footer_text from '../assets/footer_text.png'
import whatsapp from '../assets/whatsapp.svg'
import linkeddin from '../assets/linkedin.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'

const Footer = () => {


    const footerLinks = [
        { name: "Home", path: "/" },
        { name: "Applications", path: "/Applications" },
        { name: "Products", path: "/Products" },
        { name: "Blogs", path: "/Blogs" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/Contact" },
    ];


    const socialLinks = [
        {
            name: "WhatsApp",
            icon: whatsapp,
            link: "https://wa.me/919999999999",
        },
        {
            name: "LinkedIn",
            icon: linkeddin,
            link: "https://www.linkedin.com/company/uni-min-india/",
        },
        {
            name: "Facebook",
            icon: facebook,
            link: "https://www.facebook.com/UNIMININDIA/",
        },
        {
            name: "Instagram",
            icon: instagram,
            link: "https://www.instagram.com/uniminindia/",
        },
    ];

    return (
        <>

            {/* Desktop Footer */}
            <div
                className="hidden sm:flex h-auto w-[100vw] bg-cover bg-center bg-no-repeat mt-[15%] justify-center text-sm pt-10
                md:text-base
                lg:text-lg
                xl:text-xl
                2xl:text-2xl
                "
                

                style={{ backgroundImage: `url(${footer_bg})` }}
            >

                <div className="h-auto w-[95vw] flex flex-col items-center justify-between gap-25  font-[nordb]

        ">
                    {/* footer part1 */}
                    <div className="h-auto w-[95vw] flex  justify-between  gap-10 "

                    >

                        <div className="h-[60%] w-[60%]  flex justify-between 
                        xl:w-[50%]
                        ">


                            {/* Explore */}
                            <div className="h-auto w-[45%]  gap-3 flex flex-col items-start text-white">
                                <h1>EXPLORE</h1>

                                <div className="h-auto flex flex-col justify-around gap-2 font-[nordl]">
                                    {footerLinks.map((link) => {
                                        return (
                                            <Link
                                                key={link.name}
                                                to={link.path}
                                                className=" text- uppercase text-white transition hover:text-[var(--colorblue)] "
                                            >
                                                {link.name}
                                            </Link>
                                        );
                                    })}
                                </div>

                            </div>
                            <div className="h-auto w-[55%]  gap-3 flex flex-col items-starttext-end text-white
                            xl:w-[45%]
                            ">
                                <h1>VISIT US</h1>
                                <p className="font-[nordl] ">Corporate Office : 210 & 211, Second Floor, Dariyalal Plaza, 8-A National Highway, Near Shakti Chamber ,Morbi, 363642, Gujarat , India.</p>
                            </div>
                        </div>
                        <div className="h-auto w-[40%]  flex flex-col gap-5 
                        xl:flex-row
                        ">
                            <div className="h-auto w-[100%]  gap-3 flex flex-col items-starttext-end text-white">
                                <h1>CALL US</h1>
                                <p className="font-[nordl] ">+91-81538 00093</p>
                            </div>
                            <div className="h-auto w-[55%]  gap-3 flex flex-col items-starttext-end text-white">
                                <h1>WRITE US</h1>
                                <a
                                    href="mailto:sumit@uni-minindia.com"
                                    className="font-[nordl] whitespace-nowrap text-white"
                                >
                                    sumit@uni-minindia.com
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* footer part2 */}
                    <div className="h-auto w-[95vw]  ">
                        <div className="h-auto w-[100%]  flex flex-col items-center text-white text-start font-[nordl]  justify-between gap-5">
                            <div className="w-[100%] flex items-center justify-start gap-[2%] [--social-icon-size:3.2%]">
                                {socialLinks.map((social) => {
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative flex aspect-square w-[var(--social-icon-size)] shrink-0 items-center justify-center overflow-hidden"
                                        >
                                            <div className="relative h-full w-full transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d] group-hover:[transform:perspective(600px)_rotateX(8deg)_rotateY(-8deg)_scale(1.08)] group-active:[transform:perspective(600px)_rotateX(8deg)_rotateY(-8deg)_scale(1.08)]">
                                                {/* Main gray icon */}
                                                <img
                                                    src={social.icon}
                                                    alt={social.name}
                                                    className="absolute inset-0 h-full w-full object-contain"
                                                />

                                                {/* Same icon turns white from bottom to top */}
                                                <img
                                                    src={social.icon}
                                                    alt=""
                                                    className="absolute inset-0 h-full w-full object-contain brightness-0 invert transition-all duration-500 ease-out [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0%_0_0_0)] group-active:[clip-path:inset(0%_0_0_0)]"
                                                />
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                            <div className="w-[100%] flex justify-between">
                                <p>All rights reserved by © Uni-Min India 2021-2026</p>
                                <p>Powered by Obito Studios</p>
                            </div>
                        </div>

                    </div>
                    <div className="w-[100vw] h-auto">
                        <img src={footer_text} alt="" className="object-contain" />
                    </div>
                </div>

            </div>






            {/* Mobile Footer */}
            <div
                className=" sm:hidden h-auto w-[100vw] bg-cover bg-center bg-no-repeat pt-5 mt-[15%] font-[nordb] flex justify-center"
                style={{ backgroundImage: `url(${footer_bg_mobail})` }}
            >
                <div className="h-auto w-[95vw] flex flex-col items-center justify-between gap-15

        ">
                    {/* footer part1 */}
                    <div className="h-auto w-[95vw] flex flex-col justify-between items-center gap-15 "

                    >

                        <div className="h-[60%] w-[100%]  flex justify-between ">


                            {/* Explore */}
                            <div className="h-auto w-[45%]  gap-3 flex flex-col items-start text-white">
                                <h1>EXPLORE</h1>

                                <div className="h-auto flex flex-col justify-around gap-2 font-[nordl]">
                                    {footerLinks.map((link) => {
                                        return (
                                            <Link
                                                key={link.name}
                                                to={link.path}
                                                className="  uppercase text-white transition hover:text-[var(--colorblue)] "
                                            >
                                                {link.name}
                                            </Link>
                                        );
                                    })}
                                </div>

                            </div>
                            <div className="h-auto w-[55%]  gap-3 flex flex-col items-starttext-end text-white">
                                <h1>VISIT US</h1>
                                <p className="font-[nordl] ">Corporate Office : 210 & 211, Second Floor, Dariyalal Plaza, 8-A National Highway, Near Shakti Chamber ,Morbi, 363642, Gujarat , India.</p>
                            </div>
                        </div>
                        <div className="h-[30%] w-[100%]  flex justify-between ">
                            <div className="h-auto w-[45%]  gap-3 flex flex-col items-starttext-end text-white">
                                <h1>CALL US</h1>
                                <p className="font-[nordl] ">+91-81538 00093</p>
                            </div>
                            <div className="h-auto w-[55%]  gap-3 flex flex-col items-starttext-end text-white">
                                <h1>WRITE US</h1>
                                <a
                                    href="mailto:sumit@uni-minindia.com"
                                    className="font-[nordl] whitespace-nowrap text-white"
                                >
                                    sumit@uni-minindia.com
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* footer part2 */}
                    <div className="h-auto w-[95vw]   ">
                        <div className="h-auto w-[100%]  flex flex-col items-center text-white text-center font-[nordl] justify-between gap-5">
                            <div className=" w-[100%] flex items-center  justify-center gap-6 ">
                                {socialLinks.map((social) => {
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative flex aspect-square h-[10vw] items-center justify-center overflow-hidden sm:h-[8vw] md:h-[5vw] lg:h-[4vw]"
                                        >
                                            <div className="relative h-full w-full transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d] group-hover:[transform:perspective(600px)_rotateX(8deg)_rotateY(-8deg)_scale(1.08)] group-active:[transform:perspective(600px)_rotateX(8deg)_rotateY(-8deg)_scale(1.08)]">
                                                {/* Default icon color from SVG: #D1D1D1 */}
                                                <img
                                                    src={social.icon}
                                                    alt={social.name}
                                                    className="absolute inset-0 h-full w-full object-contain"
                                                />

                                                {/* White icon hover/touch fill bottom to top */}
                                                <span className="absolute bottom-0 left-0 h-0 w-full overflow-hidden transition-all duration-500 ease-out group-hover:h-full group-active:h-full">
                                                    <img
                                                        src={social.icon}
                                                        alt=""
                                                        className="absolute bottom-0 left-0 aspect-square h-[10vw] object-contain brightness-0 invert sm:h-[8vw] md:h-[5vw] lg:h-[4vw]"
                                                    />
                                                </span>
                                            </div>
                                        </a>

                                    );
                                })}


                            </div>
                            <p>All rights reserved by © Uni-Min India 2021-2026</p>
                            <div className="">
                                <p>Powered by Obito Studios</p>
                            </div>
                        </div>

                    </div>
                    <div className="w-[100vw] h-auto border-t border-t-[0.5px] border-t-white pt-5 ">


                        <img src={footer_text} alt="" className="object-contain" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer