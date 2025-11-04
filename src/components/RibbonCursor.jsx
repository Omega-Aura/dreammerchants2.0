import { useEffect, useRef } from 'react';

function RibbonCursor() {
    const canvasRef = useRef(null);
    const pointsRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Mouse move handler
        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

            // Add new point
            pointsRef.current.push({
                x: e.clientX,
                y: e.clientY,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                life: 1,
            });

            // Limit number of points
            if (pointsRef.current.length > 30) {
                pointsRef.current.shift();
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw points
            pointsRef.current = pointsRef.current.filter(point => {
                // Update point
                point.x += point.vx;
                point.y += point.vy;
                point.life -= 0.02;
                point.vy += 0.1; // Gravity

                return point.life > 0;
            });

            // Draw ribbon
            if (pointsRef.current.length > 1) {
                ctx.beginPath();
                ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);

                for (let i = 1; i < pointsRef.current.length; i++) {
                    const point = pointsRef.current[i];

                    // Create gradient for each segment
                    const gradient = ctx.createLinearGradient(
                        pointsRef.current[i - 1].x,
                        pointsRef.current[i - 1].y,
                        point.x,
                        point.y
                    );

                    gradient.addColorStop(0, `rgba(59, 130, 246, ${point.life * 0.8})`);
                    gradient.addColorStop(1, `rgba(147, 51, 234, ${point.life * 0.5})`);

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 3 * point.life;
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';

                    ctx.lineTo(point.x, point.y);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(point.x, point.y);
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-40"
            style={{ mixBlendMode: 'screen' }}
        />
    );
}

export default RibbonCursor;
