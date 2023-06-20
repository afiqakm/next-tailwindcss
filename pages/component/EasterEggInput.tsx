import React, { useEffect, useRef, useState } from 'react';
import { motion, useDragControls, useInView } from 'framer-motion';

const EasterEggInput: React.FC = () => {
    const controls = useDragControls();
    const constraintsRef = useRef(null);
    const isInView = useInView(constraintsRef)

    const [keySequence, setKeySequence] = useState('');
    const [isRaining, setIsRaining] = useState(false);
    const keyword = 'afiqakm';

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();
            setKeySequence(prevSequence => prevSequence + key);
        };
        const handleKeyUp = () => {
            // Check for your Easter egg key sequence
            if (keySequence.includes(keyword)) {
                // Easter egg action
                setKeySequence('');
                setIsRaining(!isRaining);
            }
            return false;
        };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [keySequence, isRaining]);

    return (
        <motion.div className={isRaining ? 'flex items-center justify-center fixed w-4/5 h-4/5 rounded-xl' : 'hidden'} ref={constraintsRef}>
            <motion.img
                src='/static/images/kurukuru.gif'
                className='absolute w-44 h-44 rounded-xl right-10 top-0'
                drag
                dragConstraints={constraintsRef}
                initial={{ y: -500 }}
                animate={isInView ? {y: 550} : {y: -500}}
                transition={{duration: 5}}
            />
            <motion.img
                src='/static/images/kurukuru.gif'
                className='absolute w-44 h-44 rounded-xl top-0 left-10'
                drag
                dragConstraints={constraintsRef}
                initial={{ y: -500 }}
                animate={isInView ? {y: 550} : {y: -500}}
                transition={{duration: 5 }}
            />
        </motion.div>
    );
};
export default EasterEggInput;
