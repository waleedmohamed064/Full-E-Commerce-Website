import { useEffect, useRef, useState } from 'react'

export default function Stats() {
  const items = [
    { boxClass: 'sellers-active', iconClass: 'icon-1', icon: '/img/Services.png',    target: 10500, text: 'Sellers active our site' },
    { boxClass: 'Product-sale',   iconClass: 'icon-2', icon: '/img/Services-2.png',  target: 33000, text: 'Monthly product sale' },
    { boxClass: 'customer-active',iconClass: 'icon-3', icon: '/img/Services-3.png',  target: 45500, text: 'Customers active in our site' },
    { boxClass: 'gross-sale',     iconClass: 'icon-4', icon: '/img/Services-4.png',  target: 25000, text: 'Annual gross sale in our site' },
  ]

  const containerRef = useRef(null)
  const [start, setStart] = useState(false)
  const [values, setValues] = useState(items.map(() => 0))

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true)
          obs.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (containerRef.current) obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!start) return
    const duration = 1200
    const startTime = performance.now()
    let rafId

    const tick = (now) => {
      const t = Math.min((now - startTime) / duration, 1)
      setValues(items.map((it) => it.target * t))
      if (t < 1) rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [start])

  const formatK = (n) => {
    const v = Math.round(n)
    return v >= 1000 ? `${Math.round((v / 1000) * 10) / 10}k` : `${v}`
  }

  return (
    <div className="stats" ref={containerRef}>
      {items.map((it, i) => (
        <div className={it.boxClass} key={i}>
          <img className={it.iconClass} src={it.icon} alt="icon" />
          <h5 className="counter" data-target={it.target}>{formatK(values[i])}</h5>
          <p>{it.text}</p>
        </div>
      ))}
    </div>
  )
}
