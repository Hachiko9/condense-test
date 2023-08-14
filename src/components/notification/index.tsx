import { useState } from 'react';

export const Notification = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: '#4C825B',
          boxShadow: '0px 0px 0px 2px rgba(0, 0, 0, 0.25) inset',
          borderRadius: '6px',
          width: '14rem',
          height: '3.8rem',
          padding: '0.4rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <button style={{ backgroundColor: '#4C825B', border: 'none' }}>
            <p style={{ fontWeight: '300' }}>X</p>
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'start' }}>
          <p style={{ color: '#FFF', fontWeight: '300', marginLeft: '0.6rem' }}>
            New Favourite Movie!
          </p>
        </div>
      </div>
    </>
  );
};
