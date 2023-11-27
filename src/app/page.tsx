import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.adobe.com/corporate-responsibility/creativity/digital-academy.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/DALogo.png"
              alt="Adobe Digital Academy Logo"
              width={100}
              height={24}
              priority
            />
            Adobe Digital Academy Apprentices
          </a>
        </div>
      </div>
      <div className="flex content-center justify-center space-x-4 min-w-full mb-10">
      <Image
              src="/DA_2019.jpg"
              alt="Adobe Digital Academy 2019"
              width={300}
              height={100}
              priority
              className="rounded"
            />
      <Image
        src="/DA_2020.jpg"
        alt="Adobe Digital Academy 2020"
        width={300}
        height={24}
        priority
        className="rounded"
      />
      <Image
        src="/DA_hangout.jpg"
        alt="Adobe Digital Academy fun night"
        width={300}
        height={24}
        priority
        className="rounded"
      />
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <h1 className="text-xl me-10">Reskilling and upskilling through modern apprenticeships.</h1>
      Part of our commitment to fostering a diverse and inclusive workforce, the Adobe Digital Academy offers career switchers the education and experience they need to launch successful careers in user experience (UX) design, data science, software engineering and digital marketing.
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Outcomes{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about the DA apprenticeships and the impact within and outside Adobe
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Program Resources{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find resources to support you as a potential applicant or current participant
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Hire our Alumni{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            We have incredibly candidates ready to make an impact on your project and organization
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Alumni Directoy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Get to know our alumni and learn their stories
          </p>
        </a>
      </div>
    </main>
  )
}
