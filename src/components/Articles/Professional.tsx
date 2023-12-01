import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { sortedProfessionalExperiences } from 'src/helpers/utils';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import ProfessionalItem from './ProfessionalItem';
import { useGetImages } from 'src/hooks/useGetImage';

const Professional: React.FC = () => {
  const [getImagePaths] = useGetImages();

  const jobImagePaths = getImagePaths();
  console.log(jobImagePaths);

  return (
    <article className="rounded-xl bg-neutral-3 py-12">
      <div className="container">
        <div className="flex justify-center text-center">
          <SectionHeading
            icon={faBriefcase}
            level={2}
            text="Professional Experience"
          />
        </div>

        {sortedProfessionalExperiences.map((professional) => (
          <ProfessionalItem key={professional._id} {...professional} />
        ))}
      </div>
    </article>
  );
};

export default Professional;
