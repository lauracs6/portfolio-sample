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
    </section>
  );
}
