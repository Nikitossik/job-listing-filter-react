export default function JobsFilter({
  jobFilters,
  onFilterInput,
  onFilterSubmit,
  onFilterClear,
  jobFilter,
  onFilterDelete,
}) {
  return (
    <div className="relative w-full -mt-10">
      <div className="px-6 max-w-[69.375rem] mx-auto">
        <form
          onSubmit={onFilterSubmit}
          method="get"
          className="focus-within:ring-4 focus-within:ring-offset-2 focus-within:ring-primary-900/25 p-5 cursor-auto bg-white rounded-[0.3125rem] shadow-[0px_15px_20px_-5px] shadow-primary-900/[0.15]"
        >
          <div className="flex items-center gap-10">
            <div className="flex-auto flex items-center flex-wrap gap-4">
              {jobFilters.map((filter) => (
                <FilterCategory
                  onFilterDelete={onFilterDelete}
                  name={filter.name}
                  key={filter.id}
                  id={filter.id}
                />
              ))}

              <div className="flex-1 min-w-[5rem] overflow-hidden">
                <input
                  type="text"
                  value={jobFilter}
                  placeholder="Type..."
                  className="w-full py-1.5 outline-none"
                  name="job-filter"
                  onChange={onFilterInput}
                />
              </div>
            </div>
            {jobFilters.length !== 0 && (
              <button
                type="button"
                onClick={onFilterClear}
                className="text-primary-800 font-bold py-2"
              >
                Clear
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

function FilterCategory({ name, id, onFilterDelete }) {
  return (
    <div className="cursor-poiner flex rounded-[0.25rem] bg-primary-200 overflow-hidden font-bold text-primary">
      <div className="px-2 py-1">{name}</div>
      <button type="button" onClick={() => onFilterDelete(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="text-primary lg:hover:text-primary-900 transition duration-200"
        >
          <path
            d="M0 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H0V0Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.435 11.1213L20.3137 9L15.7175 13.5962L11.1213 9L9 11.1213L13.5962 15.7175L9 20.3137L11.1213 22.435L15.7175 17.8388L20.3137 22.435L22.435 20.3137L17.8388 15.7175L22.435 11.1213Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
