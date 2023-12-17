import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { sortedEducation } from 'src/helpers/utils';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import EducationlItem from './EducationItem';
import { useGetImages } from 'src/hooks/useGetImage';
import { imageNameMap } from 'src/helpers/imageNameMap';

const Education: React.FC = () => {
  const [getImagePath] = useGetImages();

  return (
    <article className="rounded-xl bg-neutral-3 py-12">
      <div className="container">
        <div className="flex justify-center text-center">
          <SectionHeading icon={faGraduationCap} level={2} text="Education" />
        </div>

        {sortedEducation.map((education) => {
          return (
            <EducationlItem
              key={education._id}
              {...education}
              imagePath={getImagePath(education.alt)}
            />
          );
        })}
      </div>
    </article>
  );
};

export default Education;
