import React, {useState, useEffect} from 'react';

export default function Newsletter(){
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(()=> {
    // mostrar número de subscripcions
    const subs = JSON.parse(localStorage.getItem('subs') || '[]');
    setMessage(`Total subscriptions: ${subs.length}`);
  },[]);

  function subscribe(e){
    e.preventDefault();
    if(!email) return setMessage('Use a valid email');
    const subs = JSON.parse(localStorage.getItem('subs') || '[]');
    if(subs.includes(email)) return setMessage('You are already subscribed');
    subs.push(email);
    localStorage.setItem('subs', JSON.stringify(subs));
    setEmail('');
    setMessage('Thanks for subscribing! ' + `Total subscriptions: ${subs.length}`);
  }

  return (
    <section>
      <article className='newssub'>
      <h2>Newsletter</h2>
      <p>You will receive weekly news.</p>
      <form onSubmit={subscribe}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email" type="email" />
        <button type="submit" className='submit'>Subscribe</button>
      </form>
      <p>{message}</p>
      </article>
      
      <article className="newsletter-preview">
        <div className="preview-header">
          <h1>Weekly Newsletter</h1>
        </div>

        <div className="preview-content">
          <p className="newsletter-title">DigitalEvolution 001</p>
          <ul>
            <li>
              <h4>What's new this month</h4>              <img src="/images/preview1.jpg" alt="preview1" />              
              <p>This month, our front-end team has been hard at work delivering exciting projects. We’ve launched a new portfolio redesign, experimented with modern JavaScript frameworks, and improved performance across multiple websites. Stay tuned for detailed case studies and live demos coming soon!</p>
            </li>
            <li>
              <h4>New collaborations</h4>
              <img src="/images/preview2.jpg" alt="preview2" />              
              <p>We are thrilled to announce new collaborations with several innovative companies. These partnerships will allow us to work on cutting-edge web applications, share best practices, and deliver tailored solutions that meet each client’s unique needs. Expect more updates and success stories in the coming weeks.</p>
            </li>
            <li>
              <h4>Exclusive content!</h4>
              <img src="/images/preview3.jpg" alt="preview3" />              
              <p>Subscribers get access to exclusive content you won’t find anywhere else. From behind-the-scenes tutorials, early previews of upcoming projects, to curated resources and tips, our goal is to provide valuable insights to help you grow your skills and stay ahead in the world of web development.</p>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
