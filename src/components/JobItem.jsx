export default function JobItem({ options }) {
  return (
    <a
      href="#"
      className={`${
        options.featured && "border-primary border-l-4"
      } block shadow-[0px_15px_20px_-5px] shadow-primary-900/[0.15] lg:flex gap-6 
      relative w-full bg-white p-6 pt-8 sm:pt-10 sm:p-8 lg:px-10 lg:py-8 rounded-[0.3125rem]`}
    >
      <div
        className="absolute lg:static top-0 -translate-y-1/2 lg:translate-y-0 w-12 sm:w-16 lg:w-[5.5rem] 
      h-12 sm:h-16 lg:h-[5.5rem] rounded-full overflow-hidden"
      >
        <img
          className="w-full h-full"
          src={options.logo}
          alt={options.company + " logo"}
        />
      </div>
      <div className="divide-y flex-auto lg:divide-y-0 lg:flex lg:justify-between lg:items-center divide-primary-800">
        <div className="space-y-2 pb-4 lg:pb-0">
          <div className="flex flex-wrap items-center">
            <span className="text-primary text-sm sm:text-base lg:text-lg font-bold mr-8 lg:mr-4">
              {options.company}
            </span>
            <div className="flex flex-wrap gap-2">
              {options.new && <JobLabel type="new">new!</JobLabel>}
              {options.featured && (
                <JobLabel type="featured">featured</JobLabel>
              )}
            </div>
          </div>
          <h3
            className="text-primary-900 font-bold text-[0.9375rem] sm:text-lg sm:leading-none transition duration-200 
          lg:hover:text-primary"
          >
            {options.position}
          </h3>
          <div className="text-primary-800 flex items-center lg:text-lg lg:leading-snug">
            <span>{options.postedAt}</span>
            <div className="w-1 h-1 rounded-full bg-primary-800 mx-2 lg:mx-4"></div>
            <span>{options.contract}</span>
            <div className="w-1 h-1 rounded-full bg-primary-800 mx-2 lg:mx-4"></div>
            <span>{options.location}</span>
          </div>
        </div>
        <div className="pt-4 lg:pt-0 flex flex-wrap gap-4">
          <JobCategory key={1} name={options.role} />
          <JobCategory key={2} name={options.level} />
          {options.languages.map((lang, ind) => (
            <JobCategory name={lang} key={ind + 2} />
          ))}
          {options.tools.map((tool, ind) => (
            <JobCategory name={tool} key={ind + options.languages.length + 2} />
          ))}
        </div>
      </div>
    </a>
  );
}

function JobCategory({ name }) {
  return (
    <div
      className="text-primary rounded-[0.25rem] font-bold px-2 py-1 transition duration-200
      bg-primary-200 lg:hover:text-primary-200 lg:hover:bg-primary"
    >
      {name}
    </div>
  );
}

function JobLabel({ children, type = "new" }) {
  const bgClass = type === "new" ? "bg-primary" : "bg-primary-900";

  return (
    <div
      className={`${bgClass} tracking-tighter flex items-center rounded-xl text-white text-sm leading-none uppercase px-2 pt-[0.44rem] pb-[0.19rem] text-center font-bold`}
    >
      {children}
    </div>
  );
}
