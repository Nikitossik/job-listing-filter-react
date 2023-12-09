import { useState } from "react";
import JobsFilter from "./components/JobsFilter";
import JobsList from "./components/JobsList";
import jobs from "./data.json";
import "./index.css";

function App() {
  const [jobFilter, setJobFilter] = useState("");
  const [jobFilters, setJobFilters] = useState([]);

  function handleFilterInput(e) {
    setJobFilter(e.target.value.trim());
  }

  function handleFilterSubmit(e) {
    console.log("submit!!");
    e.preventDefault();
    if (jobFilter)
      setJobFilters([
        ...jobFilters,
        {
          id: jobFilters.length + 1,
          name: jobFilter,
        },
      ]);
    setJobFilter("");
  }

  function handleFilterDelete(filterId) {
    console.log("filter delete!!");

    setJobFilters(
      jobFilters.filter((item) => {
        return item.id !== filterId;
      })
    );
  }

  function handleFilterClear(e) {
    console.log("filter clear!!");
    e.preventDefault();
    setJobFilters([]);
  }

  return (
    <div className="min-h-screen flex flex-col bg-primary-200 font-medium">
      <header className="absolute top-0 left-0 w-full h-[9.75rem] bg-primary overflow-hidden">
        <picture>
          <source
            srcSet="./images/bg-header-desktop.svg"
            media="(min-width: 1024px)"
          />
          <img
            className="object-cover w-full h-full"
            src="./images/bg-header-mobile.svg"
            alt="header background"
          />
        </picture>
      </header>

      <main className="flex-auto pt-[9.75rem]">
        <JobsFilter
          onFilterSubmit={handleFilterSubmit}
          onFilterInput={handleFilterInput}
          onFilterDelete={handleFilterDelete}
          onFilterClear={handleFilterClear}
          jobFilters={jobFilters}
          jobFilter={jobFilter}
        />
        <JobsList jobs={jobs} filters={jobFilters} />
      </main>
    </div>
  );
}

export default App;
