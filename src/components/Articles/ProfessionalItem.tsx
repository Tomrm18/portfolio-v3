import { ProfessionalExperience } from '@content';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';
import Image from 'next/image';

interface ProfessionalItemProps {
  imagePath: string;
}

const ProfessionalItem: React.FC<
  ProfessionalExperience & ProfessionalItemProps
> = ({ body, endDate, organization, startDate, title, imagePath }) => {
  return (
    <article className="border-t-2 border-neutral-6 py-6 first-of-type:border-none last-of-type:pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex gap-3">
          <Image
            width={80}
            height={80}
            src={imagePath}
            alt={organization}
            className="span"
          />
          <span className="pt-1">
            <Heading level={3}>
              <span className="rounded-md bg-neutral-12 px-2 text-neutral-1">
                {title}
              </span>
            </Heading>
            <p className="text-xl">{organization}</p>
          </span>
        </div>

        <div className="mt-1 place-self-end pb-10 tracking-wide">
          <FontAwesomeIcon className="mr-2" icon={faCalendar} />
          {startDate}–{!endDate ? 'Current' : endDate}
        </div>
      </div>

      <Prose html={body.html} />
    </article>
  );
};

export default ProfessionalItem;
