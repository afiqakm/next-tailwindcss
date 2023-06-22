import React, { useEffect, useRef, useState } from 'react';
import { motion, useDragControls, useInView } from 'framer-motion';
import Matter, { Engine, Render, Runner, MouseConstraint, Mouse, Composite, Bodies } from 'matter-js';

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

    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // create engine
        const engine = Engine.create(),
        world = engine.world;

        // create renderer
        const render = Render.create({
        element: document.body,
        engine,
        options: {
            width: 1400,
            height: 1200,
            showVelocity: true,
        },
        });

        Render.run(render);

        // create runner
        const runner = Runner.create();
        Runner.run(runner, engine);

        // add bodies
        Composite.add(world, [
        // falling blocks
        Bodies.rectangle(200, 100, 60, 60, { frictionAir: 0.1 }),

        // walls
        Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
        Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
        Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
        Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
        ]);

        // add mouse control
        const mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
            stiffness: 0.01,
            render: {
                visible: false,
            },
            },
        });

        Composite.add(world, mouseConstraint);

        // keep the mouse in sync with rendering
        render.mouse = mouse;

        // fit the render viewport to the scene
        Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 },
        });

        // context for MatterTools.Demo
        return () => {
        Render.stop(render);
        Runner.stop(runner);
        };
    }, []);

    return (
        <>
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
            <div ref={canvasRef} style={{width: '100$', height: 'fit-content'}} />
        </>
    );
};
export default EasterEggInput;
