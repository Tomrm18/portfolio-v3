import { Achievement } from '@content';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';

const AchievementItem: React.FC<Achievement> = ({
  achievement,
  body,
  organization,
  startDate,
  endDate,
}) => {
  return (
    <article className="border-t-2 border-neutral-6 py-6 first-of-type:border-none last-of-type:pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <section>
          <Heading level={3}>{achievement}</Heading>

          <div className="mt-1 font-medium tracking-wide">
            <FontAwesomeIcon className="mr-2" icon={faUniversity} />
            {organization}
          </div>
        </section>

        <section className="mt-1 place-self-end pb-10 tracking-wide">
          <FontAwesomeIcon className="mr-2" icon={faCalendarDays} />
          {startDate} – {!endDate ? 'Current' : endDate}
        </section>
      </div>

      <Prose html={body.html} />
    </article>
  );
};

export default AchievementItem;
