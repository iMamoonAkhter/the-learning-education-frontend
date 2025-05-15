import { useState, useEffect } from 'react';
import { Box, LinearProgress } from '@mui/material';

const LoadingBar = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [animationTimer, setAnimationTimer] = useState(null);

  useEffect(() => {
    let progressTimer;
    let hideTimer;
    
    // Clear any existing timers when loading state changes
    if (animationTimer) {
      clearTimeout(animationTimer);
    }
    
    if (isLoading) {
      // Show immediately when loading starts
      setVisible(true);
      
      // Quick initial progress to provide immediate feedback
      setProgress(30);
      
      // Calculate progress based on actual elapsed time
      const animateProgress = () => {
        setProgress(prev => {
          // Increase progress slower as it gets higher, but never reach 100
          const newValue = prev + Math.max(1, (100 - prev) / 20);
          return Math.min(95, newValue);
        });
        
        const timer = setTimeout(animateProgress, 200);
        setAnimationTimer(timer);
      };
      
      // Start animation after a small delay
      progressTimer = setTimeout(animateProgress, 100);
    } else if (visible) {
      // Loading complete - show 100% progress
      setProgress(100);
      
      // Hide after showing completion
      hideTimer = setTimeout(() => {
        setVisible(false);
        
        // Reset progress after hiding
        setTimeout(() => {
          setProgress(0);
        }, 300);
      }, 400);
    }
    
    return () => {
      clearTimeout(progressTimer);
      clearTimeout(hideTimer);
      if (animationTimer) {
        clearTimeout(animationTimer);
      }
    };
  }, [isLoading, visible, animationTimer]);

  return (
    <Box 
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        height: '4px',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.2s ease',
      }}
    >
      <LinearProgress 
        variant="determinate" 
        value={progress} 
        sx={{
          height: '4px',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#4281ff',
            transition: progress === 100 
              ? 'transform 0.2s ease-out' 
              : 'transform 0.3s ease-in-out',
          },
          backgroundColor: 'rgba(66, 129, 255, 0.2)',
        }}
      />
    </Box>
  );
};

export default LoadingBar; 