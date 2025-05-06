

const urlImg = import.meta.env.VITE_REACT_APP_API;

import { useContext } from "react";
import JobContext from "../context/JobsContext";
import { Link } from "react-router-dom";

function Portfolio() {
  const { job } = useContext(JobContext);

  return (
    <div className="px-8 lg:px-16 xl:px-32 w-screen pt-24 z-0 flex mx-auto text-zinc-500">
      <div
        className="bg-zinc-950 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full pb-32 flex-wrap z-10"
        key={job._id}
      >
        {job.map((job) => (
          <div
            key={job._id}
            className={`
            flex justify-center items-center 
            h-[150px] sm:h-[300px]
            `}
          >
            <Link
              to={`/jobs/${job._id}`}
              style={{
                backgroundImage: `url(${urlImg}/images/jobs/${job.images[0]}) `,
              }}
              className={`
                bg-center
                bg-cover
                w-full
                h-full
                justify-center items-center   
                z-10
                `}
            ></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
