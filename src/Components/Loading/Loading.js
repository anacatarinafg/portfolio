import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import "./loading.css";


const Loading = () => {
    useEffect(() => {
        gsap.to(".has__state", 1.5, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "power4.inOut",
            stagger: {
                amount: 0.5,
            }
        });

        const overlay = document.querySelector(".overlay");
        overlay.addEventListener("click", function () {
            gsap.to(".has__state", 1.5, {
                clipPath: "polygon(0 85%, 100% 85%, 100% 100%, 0 100%)",
                ease: "power4.inOut",
                stagger: {
                    amount: 0.5,
                },
            }, 0);

            gsap.to(".overlay", 2, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                ease: "power4.inOut",
            });
        });
    }, []);
    return (
        <div className='overlay'>
            <div className='overlay__info'>
                <div className='overlay__name'>
                    <h2 className='has__state'>
                        Ana Gonçalves
                    </h2>
                </div>
                <div className='overlay__job'>
                    <p className='has__state'>Junior front-end developer</p>
                </div>
            </div>
            <div className='overlay__click'>
                <span className='has__state'>click</span>
                <p className='has__state'>anywhere to continue</p>
            </div>
        </div>
    )
}

export default Loading