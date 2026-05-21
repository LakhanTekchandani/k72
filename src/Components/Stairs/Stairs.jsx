import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = ({ children }) => {

    const location = useLocation()

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    useEffect(() => {

        const ctx = gsap.context(() => {

            const tl = gsap.timeline()

            tl.set(stairParentRef.current, {
                display: 'flex'
            })

            tl.from('.stair', {
                scaleY: 0,
                transformOrigin: 'top',
                stagger: {
                    amount: -0.25
                }
            })

            tl.to('.stair', {
                y: '100%',
                stagger: {
                    amount: -0.25
                }
            })

            tl.set(stairParentRef.current, {
                display: 'none'
            })

            tl.set('.stair', {
                y: '0%'
            })

            gsap.from(pageRef.current, {
                opacity: 0,
                duration: 0.5,
                delay: 0.5
            })

        })

        return () => ctx.revert()

    }, [location.pathname])

    return (
        <div>
            <div
                ref={stairParentRef}
                className='fixed top-0 left-0 z-50 h-screen w-full hidden'
            >
                <div className='flex h-full w-full'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>

            <div ref={pageRef}>
                {children}
            </div>
        </div>
    )
}

export default Stairs