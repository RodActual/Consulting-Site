import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Rodriguez Digital Operations, LLC.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0908',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '64px 80px',
          position: 'relative',
        }}
      >
        {/* Inner border frame */}
        <div
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            bottom: '24px',
            left: '24px',
            border: '1px solid #1e1c1a',
            display: 'flex',
          }}
        />

        {/* Corner accent dots */}
        <div style={{ position: 'absolute', top: '38px', left: '38px', width: '10px', height: '10px', borderRadius: '50%', background: '#c8a96e', display: 'flex' }} />
        <div style={{ position: 'absolute', top: '38px', right: '38px', width: '10px', height: '10px', borderRadius: '50%', background: '#60a5fa', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: '38px', right: '38px', width: '10px', height: '10px', borderRadius: '50%', background: '#34d399', display: 'flex' }} />

        {/* Main content: logo left, text right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '64px', width: '100%', maxWidth: '1000px' }}>

          {/* Logo */}
          <svg viewBox="0 0 200 200" width="160" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 20L169.282 60V140L100 180L30.718 140V60L100 20Z" fill="#09090B" />
            <path d="M75 65V135" stroke="#ffffff" stroke-width="12" stroke-linecap="round" />
            <path d="M75 65H110C123.807 65 135 76.1929 135 90C135 103.807 123.807 115 110 115H75" stroke="#ffffff" stroke-width="12" stroke-linecap="round" />
            <path d="M105 115L135 145" stroke="#ffffff" stroke-width="12" stroke-linecap="round" />
            <path d="M100 20L169.282 60V140L100 180L30.718 140V60L100 20Z" stroke="#484849" stroke-width="2" />
            <circle cx="100" cy="20" r="6" fill="#c8a96e" />
            <circle cx="169.282" cy="60" r="6" fill="#60a5fa" />
            <circle cx="169.282" cy="140" r="6" fill="#34d399" />
          </svg>

          {/* Text block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                letterSpacing: '0.2em',
                color: '#666',
                textTransform: 'uppercase',
                display: 'flex',
              }}
            >
              Digital Operations Architecture
            </div>

            <div
              style={{
                fontSize: '52px',
                fontWeight: '400',
                color: '#ccc8c8',
                lineHeight: '1.15',
                letterSpacing: '-0.01em',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              Rodriguez Digital
              <span style={{ color: '#e8e0d0' }}>Operations, LLC.</span>
            </div>

            <div
              style={{
                fontSize: '22px',
                color: '#555',
                display: 'flex',
                marginTop: '8px',
              }}
            >
              Secure, scalable systems for service businesses.
            </div>

            {/* Accent line */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
              <div style={{ width: '32px', height: '2px', background: '#c8a96e', display: 'flex' }} />
              <div style={{ width: '32px', height: '2px', background: '#60a5fa', display: 'flex' }} />
              <div style={{ width: '32px', height: '2px', background: '#34d399', display: 'flex' }} />
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
