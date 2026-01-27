import React from 'react'
import Camrasetting from './Camraresetbuttons/Camrasetting'
import { useRef,useEffect,useState } from 'react'
type samples = {
  sample:string
}

export default function Samplepreviewimage({sample}:samples) {
  const vedioref = useRef<HTMLVideoElement|null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [Captured,setCaptured] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  

 
  
  const startCamera = async()=>{
    const stream = await navigator.mediaDevices.getUserMedia({video:true});
    streamRef.current = stream;
    vedioref.current!.srcObject = stream;
  }
    useEffect(() => {
  startCamera();

  return () => {
    streamRef.current?.getTracks().forEach(t => t.stop());
  };
}, []);
const takePhoto = ()=>{
  console.log("clicked");
  

  const video = vedioref.current;
  if(!video){
    
    return;
  }
  
  if (video.videoWidth === 0 || video.videoHeight === 0) {
  console.log("Video not ready yet");
  return;
}

  const canvas = canvasRef.current;

  if (!video || !canvas) return;
  console.log("vedio and canva are fine");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  if(!ctx) return;
  ctx.drawImage(video,0,0);
  const image = canvas.toDataURL("image/png");
  setCaptured(image);

}
 
  return (
    <div className='mt-[3%]'>
      <canvas ref={canvasRef} className="hidden" />
        
        <div className='w-full h-[3.5rem] bg-gray-50 pt-[0.6%] pl-[4%]'>
            <h1 className='text-3xl font-serif font-cinzel '>{sample}</h1>

        </div>
        <div  className='w-full h-[20rem] flex justify-evenly pt-[2%]'>
            <div className='h-[80%] w-[22%] border-1'>d</div>
            <div className='h-[80%] w-[22%] border-1'>
              {Captured ? (
                <img src={Captured} className="w-full h-full object-cover" alt="" />
              ):(
                <span className='text-gray-400'>No image</span>
              )}
            </div>
            <div className='h-[80%] w-[22%] border-1'>
              <video ref={vedioref} autoPlay muted ></video>
            </div>
         
        </div>
        <div  className='w-full h-[3.5rem]  bg-gray-50 flex justify-end '>
           
            <Camrasetting onclickbutton = {takePhoto}/>
        </div>
    </div>
  )
}
