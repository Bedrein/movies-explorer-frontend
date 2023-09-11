import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title' id='about-project'>
        О проекте
      </h2>
      <div className='about-project__discription'>
        <div>
          <h3 className='about-project__discription-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <h4 className='about-project__discription-subtitle'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </h4>
        </div>

        <div>
          <h2 className='about-project__discription-title'>
            На выполнение диплома ушло 5 недель
          </h2>
          <h3 className='about-project__discription-subtitle'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </h3>
        </div>
      </div>
      <div className='about-project__roadmap '>
        <p className='about-project__part-one'>1 неделя</p>
        <p className='about-project__part-two'>4 недели</p>
      </div>
      <div className='about-project__roadmap-captions'>
        <span className='about-project__roadmap-caption roadmap-caption-one'>
          Back-end
        </span>
        <span className='about-project__roadmap-caption roadmap-caption-two'>
          Front-end
        </span>
      </div>
    </section>
  );
}

export default AboutProject;
