'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <div className="flex justify-center mb-24 slide-up-and-fade">
                    <div className="relative group w-fit max-w-full mx-auto overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:border-primary/30 hover:shadow-primary/10">
                        {/* Decorative background elements - adjusted for flexible size */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-700"></div>
                        
                        {/* The Image Container */}
                        <div className="relative p-1.5 flex items-center justify-center">
                            <div className="relative overflow-hidden rounded-[calc(1.5rem-4px)] bg-neutral-900">
                                <img
                                    src="/Yahya_Bouzekri.jpg"
                                    alt="Yahya Bouzekri"
                                    className="max-w-full max-h-[70vh] w-auto h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop';
                                    }}
                                />
                                
                                {/* Overlay Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                                        <p className="font-anton text-xl md:text-2xl tracking-wider text-white">YAHYA BOUZEKRI</p>
                                        <p className="text-primary text-xs md:text-sm uppercase tracking-[0.2em] mt-1 italic">Building the future, one pixel at a time</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* Border Frame */}
                         <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none"></div>
                    </div>
                </div>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade uppercase tracking-widest text-xs font-medium">
                    About Me
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Yahya.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                I&apos;m a Full Stack web developer dedicated to
                                turning ideas into creative solutions. I
                                specialize in creating seamless and intuitive
                                user experiences.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                My approach focuses on creating scalable,
                                high-performing solutions tailored to both user
                                needs and business objectives. By prioritizing
                                performance, accessibility, and responsiveness,
                                I strive to deliver experiences that not only
                                engage users but also drive tangible results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
