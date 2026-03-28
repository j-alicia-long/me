import { socialLinks } from '../../data/about';
import Button from '../ui/Button';
import Section from '../ui/Section';

const socialLinkClassNames = [
  'inline-flex h-8 w-8 items-center justify-center rounded-full transition',
  'text-primary-950/60 hover:bg-primary-500/10 hover:text-primary-950',
  'dark:text-primary-100/70 dark:hover:bg-primary-400/10 dark:hover:text-primary-200',
  '[&>svg]:h-6 [&>svg]:w-6',
].join(' ');

const SocialLinks = () => (
  <div className="flex items-center gap-4">
    {socialLinks.map((link) => (
      <a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={socialLinkClassNames}
        aria-label={link.name}
        dangerouslySetInnerHTML={{ __html: link.icon }}
      />
    ))}
  </div>
);

const About = () => (
  <Section>
    <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
      <div className="flex flex-col items-center gap-6">
        <img
          src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
          alt="Jennifer"
          className="mx-auto h-64 w-74 rounded-full object-cover lg:mx-0 lg:h-72 lg:w-72"
        />
        <SocialLinks />
      </div>
      <div className="flex flex-col items-center text-center pt-8 gap-8 sm:gap-10 lg:col-span-2 lg:items-start lg:text-left">
        <p className="text-base text-primary-950/70 dark:text-primary-100/75 sm:text-lg">
          <b>Hi there, I'm Jennifer!</b>
          <br /><br />
          I'm a full-stack web + iOS developer at <b>Duolingo</b>, based in <b>New York City</b>.
          <br /><br />
          I dabble in a variety of creative hobbies including art, music, dance, and photography, and I'm always looking for my next adventure.
          <br /><br />
          Feel free to connect with me on social media!
        </p>
        <Button href={`${import.meta.env.BASE_URL}photography`}>See my work</Button>
      </div>
    </div>
  </Section>
);

export default About;
