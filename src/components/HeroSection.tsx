import React, { useEffect, useState, useRef } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loopCount, setLoopCount] = useState(0);
  const [videoError, setVideoError] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Log to help with debugging
    console.log("Video path:", "/HERO commerce in motion video loop .mp4");
  }, []);

  // Handle video looping
  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (!videoElement) return;
    
    const handleVideoEnded = () => {
      setLoopCount(prevCount => {
        const newCount = prevCount + 1;
        
        if (newCount >= 3) {
          videoElement.pause();
          // Ensure we stay on the last frame
          videoElement.currentTime = videoElement.duration - 0.1;
        } else {
          videoElement.play();
        }
        
        return newCount;
      });
    };

    const handleVideoError = (e: Event) => {
      console.error("Video error:", e);
      setVideoError(true);
    };
    
    videoElement.addEventListener('ended', handleVideoEnded);
    videoElement.addEventListener('error', handleVideoError);
    
    return () => {
      videoElement.removeEventListener('ended', handleVideoEnded);
      videoElement.removeEventListener('error', handleVideoError);
    };
  }, []);

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black">
        {videoError ? (
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <p>Video could not be loaded</p>
          </div>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          >
            {/* Use URL encoded path to handle spaces in filename */}
            <source src="/HERO%20commerce%20in%20motion%20video%20loop%20.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-white">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo with fade-in animation */}
          <div className={`transform transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <img
              src="/lovable-uploads/805585be-5b17-45e5-8558-16bef169ff09.png"
              alt="Public Label"
              className="h-12 md:h-16 mb-8 md:mb-12"
            />
          </div>
          
          {/* Animated heading */}
          <div className="overflow-hidden">
            <h1 className="hero-text text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white">
              <span className={`block transform transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                COMMERCE
              </span>
              <span className={`block transform transition-all duration-1000 delay-500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                IN MOTION
              </span>
            </h1>
          </div>
          
          {/* Animated tagline */}
          <div className={`max-w-2xl mx-auto mt-6 md:mt-8 transform transition-all duration-1000 delay-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-lg md:text-xl">Driving growth through commerce innovation and strategically engineered creativity</p>
          </div>
          
          {/* Animated scroll indicator */}
          <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-1000 delay-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-sm mb-1">Scroll to explore</p>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Optional overlay animation for "motion" effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-1/4 h-full top-0 left-0 bg-gradient-to-r from-white to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="absolute w-1/4 h-full top-0 right-0 bg-gradient-to-l from-white to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
