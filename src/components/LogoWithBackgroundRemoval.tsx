import { useState, useEffect } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

interface LogoWithBackgroundRemovalProps {
  originalSrc: string;
  alt: string;
  className?: string;
}

const LogoWithBackgroundRemoval = ({ originalSrc, alt, className }: LogoWithBackgroundRemovalProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        setError(null);

        // Fetch the original image
        const response = await fetch(originalSrc);
        const blob = await response.blob();
        
        // Load as HTMLImageElement
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(url);
      } catch (err) {
        console.error('Failed to process image:', err);
        setError('Failed to process image');
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();

    // Cleanup function to revoke object URL
    return () => {
      if (processedImageUrl) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, [originalSrc]);

  if (isProcessing) {
    return (
      <div className={`${className} flex items-center justify-center bg-muted/20 rounded-lg`}>
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (error) {
    // Fallback to original image if processing fails
    return (
      <img 
        src={originalSrc} 
        alt={alt} 
        className={className}
      />
    );
  }

  return (
    <img 
      src={processedImageUrl || originalSrc} 
      alt={alt} 
      className={className}
    />
  );
};

export default LogoWithBackgroundRemoval;