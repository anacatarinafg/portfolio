import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import transition from '../../transition';
import './contact.css';

const Contact = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <>
      <div className="contact__container">
        <section className="contact">
          <article className="contact__headline">
            <p className="contact__text" data-aos="slide-right">
            For contributions, reach out to me through social media or email. Let's connect and explore collaboration possibilities!
            </p>
          </article>
          <article className="contact__info">
            <div className="contact__box" data-aos="slide-right">
              <h4 className="contact__label">Social media</h4>
              <ul className="contact__list">
                <li className="contact__item">
                  <a href="https://github.com/anacatarinafg" className="contact__link" target="_blank">Github</a>
                </li>
                <li>—</li>
                <li className="contact__item">
                  <a href="https://twitter.com/anacatarinafg" className="contact__link" target="_blank">Twitter</a>
                </li>
                <li>—</li>
                <li className="contact__item">
                  <a href="https://www.linkedin.com/in/ana-catarina-b87b75236/" className="contact__link" target="_blank">Linkedin</a>
                </li>
              </ul>
            </div>
            <div className="contact__box" data-aos="slide-right">
              <h4 className="contact__label">Email</h4>
              <span className="contact__email">
                anafrontenddeveloper@gmail.com
              </span>
            </div>
          </article>
        </section>
        <section className="contact__marquee" data-aos="slide-right">
          <span className="contact__marqueeText">
            Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me / Contact me </span>
        </section>
      </div>
    </>
  );
};

export default transition(Contact);