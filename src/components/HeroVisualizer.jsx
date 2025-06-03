import {useEffect, useRef} from 'react';

export default function HeroVisualizer({playerRef}){
    const canvasRef=useRef(null);

    useEffect(()=>{
        const canvas=canvasRef.current;
        const ctx=canvas.getContext("2d");

        let animationId;

        function draw(){
            if(!playerRef.current||!playerRef.current._enabled) return;
            const analyser=playerRef.current._analyser;
            if(!analyser) return;

            const values=analyser.getValue();
            ctx.clearRect(0,0,canvas.width, canvas.height);

            const gradient=ctx.createLinearGradient(0,0,canvas.width,0);
            gradient.addColorStop(0,'#8b5cf6');
            gradient.addColorStop(1, '#3b82f6');
            ctx.strokeStyle=gradient;
            ctx.shadowColor='#8b5cf6';
            ctx.shadowBlur=20;
            ctx.lineWidth=3;
            ctx.beginPath();
            
            const sliceWidth=canvas.width/analyser.size;
            let x=0;
            for(let i=0;i<analyser.size;i++){
                const v=(values[i]+1)/2;
                const y=v*canvas.height;
                (i===0)?ctx.moveTo(x,y):ctx.lineTo(x,y);
                x+=sliceWidth;
            }
            ctx.lineTo(canvas.width,canvas.height/2);
            ctx.stroke();
            animationId=requestAnimationFrame(draw);
        }

        if(playerRef.current && playerRef.current._analyser){
            draw();
        }

        return()=>cancelAnimationFrame(animationId);
    }, [playerRef.current]);

    return(
        <div>
            <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={200}
            className='absolute top-0 left-0 cursor-pointer z-10'
            />
        </div>
    );
}