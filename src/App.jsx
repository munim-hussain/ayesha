import { useState, useEffect, useRef } from 'react'

function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [noStyle, setNoStyle] = useState({});
  const noBtnRef = useRef(null);
  const containerRef = useRef(null);
  const originalPosRef = useRef(null); // To store initial absolute position

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Reset position on resize
      setNoStyle({});
      originalPosRef.current = null; // Clear cached original position
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Heart Animation Logic
  const spawnHeart = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  };

  const handleYesClick = () => {
    setShowSuccess(true);
    // Burst of hearts
    const interval = setInterval(spawnHeart, 100);
    setTimeout(() => clearInterval(interval), 5000);
  };

  // No Button Movement Logic
  const moveNoButton = () => {
    if (isMobile) return;

    // Capture original position if not yet captured
    if (!originalPosRef.current && noBtnRef.current && containerRef.current) {
      const btnRect = noBtnRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      // Save CENTER relative to container
      originalPosRef.current = {
        x: (btnRect.left - containerRect.left) + btnRect.width / 2,
        y: (btnRect.top - containerRect.top) + btnRect.height / 2
      };
    }

    if (!originalPosRef.current) return;

    const constraintSize = 200;
    const halfSize = constraintSize / 2;
    const { x: originX, y: originY } = originalPosRef.current;

    const minX = originX - halfSize;
    const maxX = originX + halfSize;
    const minY = originY - halfSize;
    const maxY = originY + halfSize;

    const newX = minX + Math.random() * (maxX - minX);
    const newY = minY + Math.random() * (maxY - minY);

    // Convert center to top/left (assuming button size roughly same, or use offsetWidth)
    const width = noBtnRef.current.offsetWidth;
    const height = noBtnRef.current.offsetHeight;

    setNoStyle({
      position: 'absolute',
      left: `${newX - width / 2}px`,
      top: `${newY - height / 2}px`,
      right: 'auto'
    });
  };

  return (
    <>
      <main className="container">
        <div className="content card">
          <h1 className="bounce-text">
            Will you be my <span className="valentine-highlight">VALENTINE?</span>
          </h1>

          <div className="button-group" ref={containerRef}>
            <button
              className="btn btn-yes"
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              id="no-btn"
              className="btn btn-no"
              ref={noBtnRef}
              style={noStyle}
              onMouseMove={moveNoButton}
              // Also trigger on hover entrance
              onMouseEnter={moveNoButton}
              disabled={isMobile}
            >
              {isMobile ? "No (Disabled)" : "No"}
            </button>
          </div>
        </div>
      </main>

      {/* Success Overlay */}
      <div id="success-message" className={showSuccess ? "" : "hidden"}>
        <h1>Let's gooo!! ❤️</h1>
        <p>Muah Muah Muah</p>
      </div>
    </>
  )
}

export default App
