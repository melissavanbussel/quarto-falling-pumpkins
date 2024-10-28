function startPumpkinFall() {
  const pumpkinEmoji = '🎃';
  
  confetti({
    particleCount: 100,
    startVelocity: 10,
    spread: 120,
    origin: { y: 0, x 0.5 },
    shapes: ['circle'],
    scalar: 1.2,
    gravity: 0.3,
    drift: 0.5,
    resize: true,
    ticks: 200, 
    colors: ['#FFA500'],
    emojis: [pumpkinEmoji]
  })
}

startPumpkinFall();