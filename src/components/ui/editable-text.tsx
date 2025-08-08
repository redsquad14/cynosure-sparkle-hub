import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface EditableTextProps {
  initialText: string;
  className?: string;
  onSave?: (text: string) => void;
}

export const EditableText: React.FC<EditableTextProps> = ({
  initialText,
  className = '',
  onSave
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    setIsEditing(false);
    onSave?.(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      setText(initialText);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <textarea
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        className={cn(
          'resize-none border-none outline-none bg-transparent',
          className
        )}
        style={{ minHeight: '60px' }}
      />
    );
  }

  return (
    <p
      className={cn('cursor-pointer hover:bg-white/5 rounded px-2 py-1 transition-colors', className)}
      onClick={() => setIsEditing(true)}
      title="Click to edit"
    >
      {text}
    </p>
  );
};