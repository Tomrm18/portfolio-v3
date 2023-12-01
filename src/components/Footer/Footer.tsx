import { personal } from '@content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { links } from 'edit-me/config/links';
import React from 'react';
import { fullName } from 'src/helpers/utils';
import ButtonLink from '../Button/ButtonLink';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-neutral-3 py-12 text-neutral-12">
      <div className="container text-center">
        <div className="mt-6">
          Copyright ©{new Date().getFullYear()} {fullName}
        </div>
      </div>
    </footer>
  );
};
