import AboutMe from 'src/components/Articles/AboutMe';
import Achievements from 'src/components/Articles/Achievements';
import { AdditionalInfo } from 'src/components/Articles/AdditionalInfo';
import { ContactInformation } from 'src/components/Articles/ContactInformation';
import Professional from 'src/components/Articles/Professional';
import Education from 'src/components/Articles/Education';
import Skills from 'src/components/Articles/Skills';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';

const Page: React.FC<PageProps> = () => {
  return (
    <>
      <Header />

      <div className="container">
        <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2">
          <AboutMe />
          <ContactInformation />
        </div>

        {/* <div className="mt-12">
          <Skills />
        </div> */}

        <div className="mt-12">
          <Education />
        </div>

        <div className="mt-12">
          <Professional />
        </div>

        <div className="mt-12">
          <Achievements />
        </div>

        {/* <div className="mt-12">
          <AdditionalInfo />
        </div> */}
      </div>

      <Footer />
    </>
  );
};

export default Page;
