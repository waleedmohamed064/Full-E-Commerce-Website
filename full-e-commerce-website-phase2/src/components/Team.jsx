export default function Team() {
    const members = [
      {
        boxClass: 'member1',
        imgClass: 'tom-cruise',
        imgSrc: '/img/Frame%20874.png',
        name: 'Tom Cruise',
        role: 'Founder and chairman',
      },
      {
        boxClass: 'member2',
        imgClass: 'emma-watson',
        imgSrc: '/img/Frame%20875.png',
        name: 'Emma Watson',
        role: 'Manganing Director',
      },
      {
        boxClass: 'member3',
        imgClass: 'will-smith',
        imgSrc: '/img/Frame%20876.png',
        name: 'Will Smith',
        role: 'Products desginer',
      },
    ]
  
    const socials = [
      { href: 'https://twitter.com', img: '/img/Icon-Twitter.png', alt: 'twitter link' },
      { href: 'https://instagram.com', img: '/img/icon-instagram.png', alt: 'instagram link' },
      { href: 'https://linkedin.com', img: '/img/Icon-Linkedin.png', alt: 'linkedin link' },
    ]
  
    return (
      <div className="team">
        {members.map((m, i) => (
          <div className={m.boxClass} key={i}>
            <img className={m.imgClass} src={m.imgSrc} alt={`team member ${i + 1}`} />
            <h3>{m.name}</h3>
            <p>{m.role}</p>
            <div className="social-links">
              {socials.map((s, j) => (
                <a key={j} href={s.href} target="_blank" rel="noopener noreferrer">
                  <img src={s.img} alt={s.alt} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
  