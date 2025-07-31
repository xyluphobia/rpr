import React from 'react';

function RatingPicker({ value, onChange }) {
    return (
        <div>
            {[...Array(10)].map((_, i) => {
                let bgColor = '#76cd1d';
                if (i < 4) bgColor = '#ff7575';   
                else if (i < 7) bgColor = '#f9be03';

                const isSelected = value === String(i + 1);

                return (
                    <input
                        key={i + 1}
                        type="button"
                        value={i + 1}
                        onClick={() => onChange(String(i + 1))}
                        style={{
                            backgroundColor: bgColor,
                            color: value === String(i + 1) ? '#fff' : '#fff',
                            marginRight: 4,
                            border: '1px solid #ccc',
                            borderRadius: 4,
                            width: 32,
                            height: 32,
                            cursor: 'pointer',
                            filter: isSelected ? 'brightness(70%)' : 'none'
                        }}
                    />
                );
            })}
        </div>
    );
}

export default RatingPicker;