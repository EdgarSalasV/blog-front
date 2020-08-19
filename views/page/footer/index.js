import classes from './style.module.css'

const InfoContact = ({ title, children }) => {
  return (
    <li className={classes.infoContact}>
      <h5 className={classes.infoContactTitle}> {title} </h5>
      {children}
    </li>
  )
}

const Contacts = () => {
  return (
    <div className={classes.contacts}>
      <InfoContact title='PHONE'>
        <p> (33) 3456-1234 </p>
        <p> (33) 3123-5432 </p>
      </InfoContact>
      <InfoContact title='EMAIL'>
        <p>info@borela.com</p>
      </InfoContact>
      <InfoContact title='ADDRESS'>
        <p> Av. López Mateo </p>
        <p> WeWork Metdown </p>
        <p> Guadalajara México </p>
      </InfoContact>
    </div>
  )
}

const Icons = () => {
  return (
    <div className={classes.icons}>
      <span className='fab fa-instagram'></span>
      <span className='fab fa-facebook-square'></span>
      <span className='fab fa-twitter-square'></span>
      <span className='fab fa-pinterest'></span>
    </div>
  )
}

const Footer = () => {
  return (
    <footer id='contact-us' className={classes.footer}>
      <h4>CONTACT US</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aperiam odit dolorem officia reiciendis similique accusantium earum deserunt provident. Veritatis a reiciendis dolor ut dicta aperiam voluptas harum sit delectus?</p>
      <Contacts />
      <Icons />
      <img style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', height: '90%' }} src='/images/footer/section.png' alt='background image' />
    </footer>
  )
}

export default Footer
