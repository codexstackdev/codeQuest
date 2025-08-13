"use client";
import { useParams } from 'next/navigation'
import React from 'react'
import Frame from '../components/Frame';

const page = () => {
  const param = useParams();
  const language = param.programming;
  
  return (
    <>
    <div className='h-[100vh] w-[100vw]'>
     <Frame language={language}/>
    </div>
    <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('contextmenu', event => event.preventDefault());
            document.addEventListener('keydown', event => {
              if (event.ctrlKey && event.key.toLowerCase() === 'u') {
                event.preventDefault();
              }
            });
          `,
        }}
      />
    </>
  );
}

export default page