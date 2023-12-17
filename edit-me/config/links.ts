import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { CMSLink } from 'edit-me/types/CMSLink';

export const links: CMSLink[] = [
  {
    href: 'https://github.com/Tomrm18',
    icon: faGithub,
    title: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/thomas-maguire018/',
    icon: faLinkedin,
    title: 'LinkedIn',
  },
  {
    href: 'pdf/resume.pdf',
    icon: faFilePdf,
    title: 'Resume',
  },
  {
    href: 'mailto:tmaguire2002@yahoo.com.au',
    icon: faEnvelope,
    title: 'Email',
  },
];
