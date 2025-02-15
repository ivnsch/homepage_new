import Image from "next/image";
import { LinkType, load_projects, ProjectType } from "./model";

const Projects: React.FC = () => {
  const projects = load_projects();

  const projectsHtml = projects.map((p) => {
    return <Project key={p.title} project={p} />;
  });

  return <div className="">{projectsHtml}</div>;
};

type ProjectProps = {
  project: ProjectType;
};

type LinkProps = {
  link: LinkType;
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="flex flex-row w-full mb-10">
      <img src={project.img} width={350} height={350}></img>
      <div className="flex flex-col w-full mr-32 ml-5">
        <div className="font-bold border-b w-full text-3xl mb-5">
          {project.title}
        </div>
        <div>{project.descr}</div>
        <div className="flex flex-row mt-5">
          {project.links.map((element) => (
            <Link key={element.href} link={element} />
          ))}
        </div>
        <div className="flex flex-row mt-5">
          {project.tags.map((tag) => (
            <span className="mr-5 bg-slate-500 py-1 px-2 rounded" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Link: React.FC<LinkProps> = ({ link }) => {
  return (
    <a href={link.href} className="mr-2 font-medium text-gray-300">
      {link.text}
    </a>
  );
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <header className="flex-row h-14">
          <div className="flex flex-col">
            <span className="text-3xl font-bold">Ivan Schütz</span>
            <span className="logo-subtitle">Software Developer</span>
          </div>
        </header>

        <div>This homepage is under construction</div>
        <Image
          className="w-full"
          src="/hero.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-row justify-end w-full">
          <a
            href="https://github.com/ivnsch"
            target="_blank"
            rel="noopener"
            aria-label="github"
            className="mr-5"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              className="svg-inline--fa fa-github fa-w-16 w-9"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ivan-sch%C3%BCtz-61a8165a"
            target="_blank"
            rel="noopener"
            aria-label="linkedin"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin"
              className="svg-inline--fa fa-linkedin fa-w-14 w-9"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              ></path>
            </svg>
          </a>
        </div>
        <Projects />
      </main>
    </div>
  );
}
