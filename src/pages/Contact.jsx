import React, {useState} from 'react';

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [status, setStatus] = useState(null);

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    // Exemple senzill: validació i emmagatzematge a localStorage per demo
    if(!form.name || !form.email || !form.message){
      setStatus({type:'error', msg:'You must write a message'});
      return;
    }
    const stored = JSON.parse(localStorage.getItem('contacts') || '[]');
    stored.push({...form, date: new Date().toISOString()});
    localStorage.setItem('contacts', JSON.stringify(stored));
    setStatus({type:'ok', msg:'Message sent'});
    setForm({name:'', email:'', message:''});
  }

  return (
    <section>
      
      <form onSubmit={handleSubmit} style={{maxWidth:600}} className='contact'>
        <h2>Contact</h2>
        <div>
          <label>Name</label><br />
          <input name="name" value={form.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label><br />
          <input name="email" value={form.email} onChange={handleChange} type="email" />
        </div>
        <div>
          <label>Message</label><br />
          <textarea name="message" value={form.message} onChange={handleChange} />
        </div>
        <button type="submit" className='submit'>Send</button>
      </form>
      {status && (<p className={`status-message ${status.type}`}>{status.msg}</p>)}
    </section>
  );
}
