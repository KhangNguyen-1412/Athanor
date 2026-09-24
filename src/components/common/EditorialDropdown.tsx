import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import './EditorialDropdown.css';

export interface DropdownOption<T = string> {
  value: T;
  label: string;
  badge?: string | number;
  color?: string;
  icon?: React.ReactNode;
}

interface EditorialDropdownProps<T = string> {
  options: DropdownOption<T>[];
  value: T;
  onChange: (value: T) => void;
  placeholder?: string;
  className?: string;
  accentColor?: string;
  disabled?: boolean;
}

export function EditorialDropdown<T extends string = string>({
  options,
  value,
  onChange,
  placeholder = 'CHỌN...',
  className = '',
  accentColor,
  disabled = false,
}: EditorialDropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (val: T) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={`editorial-dropdown-container ${isOpen ? 'is-open' : ''} ${
        disabled ? 'is-disabled' : ''
      } ${className}`}
    >
      {/* Trigger Button */}
      <button
        type="button"
        className="editorial-dropdown-trigger"
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="editorial-dropdown-trigger-content">
          {selectedOption?.color && (
            <span
              className="editorial-dropdown-dot"
              style={{ backgroundColor: selectedOption.color }}
            />
          )}
          {selectedOption?.icon && (
            <span className="editorial-dropdown-icon">{selectedOption.icon}</span>
          )}
          <span className="editorial-dropdown-label">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          {selectedOption?.badge !== undefined && (
            <span className="editorial-dropdown-badge">
              ({selectedOption.badge})
            </span>
          )}
        </div>

        <ChevronDown
          size={14}
          className={`editorial-dropdown-chevron ${isOpen ? 'rotated' : ''}`}
        />
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <div className="editorial-dropdown-menu" role="listbox">
          <div className="editorial-dropdown-list custom-scrollbar">
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <div
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  className={`editorial-dropdown-item ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => handleSelect(option.value)}
                >
                  <div className="editorial-dropdown-item-left">
                    {option.color && (
                      <span
                        className="editorial-dropdown-item-dot"
                        style={{ backgroundColor: option.color }}
                      />
                    )}
                    {option.icon && (
                      <span className="editorial-dropdown-item-icon">{option.icon}</span>
                    )}
                    <span
                      className="editorial-dropdown-item-text"
                      style={{
                        color: isSelected && option.color ? option.color : undefined,
                      }}
                    >
                      {option.label}
                    </span>
                  </div>

                  <div className="editorial-dropdown-item-right">
                    {option.badge !== undefined && (
                      <span className="editorial-dropdown-item-badge">
                        {option.badge}
                      </span>
                    )}
                    {isSelected && (
                      <Check
                        size={13}
                        className="editorial-dropdown-check"
                        style={{ color: accentColor || 'var(--cerulean)' }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
