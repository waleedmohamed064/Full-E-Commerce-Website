export default function Services() {
    const services = [
      {
        img: '/img/Services-5.png',
        title: 'FREE AND FAST DELIVERY',
        text: 'Free delivery for all orders over $140',
      },
      {
        img: '/img/Services-6.png',
        title: '24/7 CUSTOMER SERVICE',
        text: 'Friendly 24/7 customer support',
      },
      {
        img: '/img/Services-7.png',
        title: 'MONEY BACK GUARANTEE',
        text: 'We reurn money within 30 days',
      },
    ]
  
    return (
      <div className="fullservices">
        {services.map((s, i) => (
          <div className="service" key={i}>
            <img src={s.img} alt={s.title} />
            <h5>{s.title}</h5>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    )
  }
  