import JobItem from "./JobItem";

export default function JobsList({ jobs, filters }) {
  const filterJobs = () =>
    jobs.filter((job) => {
      const jobKeys = [job.role, job.level, ...job.languages, ...job.tools].map(
        (key) => key.toLowerCase()
      );

      return (
        filters.every((filter) =>
          jobKeys.includes(filter.name.toLowerCase())
        ) || filters.length === 0
      );
    });

  const filteredJobs = filterJobs();

  return (
    <section className="pt-14 lg:pt-10 pb-8 lg:mb-[7.5rem] px-6 max-w-[69.375rem] mx-auto space-y-10 sm:space-y-16 lg:space-y-6">
      {filteredJobs.length !== 0 ? (
        filteredJobs.map((job) => <JobItem key={job.id} options={job} />)
      ) : (
        <h2 className="text-center text-2xl font-bold text-primary">
          Nothing found!
        </h2>
      )}
    </section>
  );
}
