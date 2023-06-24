import React, { useEffect } from 'react';
import { gsap } from 'gsap';


const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('cursor');
        const links = document.querySelectorAll('Link');
        const cursorText = document.querySelector('.cursor__text');

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            gsap.to(cursor, { x: clientX, y: clientY })
        }

        const onMouseEnterLinks = (e) => {
            const link = e.target;
            if (link.classList.contains('view')) {
                gsap.to(cursor, { scale: 4 })
                cursorText.style.display = 'block';
            } else {
                gsap.to(cursor, { scale: 4 })
            }
        }

        const onMouseLeaveLinks = (e) => {
            gsap.to(cursor, { scale: 1 })
            cursorText.style.display = 'none'
        }

        document.addEventListener('mousemove', onMouseMove)
        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLinks);
            link.addEventListener('mouseleave', onMouseLeaveLinks);
        })
    })
    return (
        <div id="cursor">
            <span className='cursor__text'>View</span>
        </div>
    )
}

export default Cursor