import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { sortedProfessionalExperiences } from 'src/helpers/utils';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import ProfessionalItem from './ProfessionalItem';
import { useGetImages } from 'src/hooks/useGetImage';
import { imageNameMap } from 'src/helpers/imageNameMap';

const Professional: React.FC = () => {
  const [getImagePath] = useGetImages();

  return (
    <article className="rounded-xl bg-neutral-3 py-12">
      <div className="container">
        <div className="flex justify-center text-center">
          <SectionHeading icon={faBriefcase} level={2} text="Experience" />
        </div>

        {sortedProfessionalExperiences.map((professional) => {
          return (
            <ProfessionalItem
              key={professional._id}
              {...professional}
              imagePath={getImagePath(professional.alt)}
            />
          );
        })}
      </div>
    </article>
  );
};

export default Professional;
