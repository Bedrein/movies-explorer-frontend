import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title' id='about-project'>
        О проекте
      </h2>
      <div className='about-project__discription'>
        <div>
          <h2 className='about-project__discription_title'>
            Дипломный проект включал 5 этапов
          </h2>
          <h3 className='about-project__discription_subtitle'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </h3>
        </div>

        <div>
          <h2 className='about-project__discription_title'>
            На выполнение диплома ушло 5 недель
          </h2>
          <h3 className='about-project__discription_subtitle'>
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
        <span className='about-project__roadmap-caption roadmap-caption_one'>
          Back-end
        </span>
        <span className='about-project__roadmap-caption roadmap-caption_two'>
          Front-end
        </span>
      </div>
    </section>
  );
}

export default AboutProject;
