import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChartsContainer, StatsContainer, Loading } from "../../components";
import { showStats } from "../../features/allJobs/allJobsSlice";
const Stats = () => {
  const dispatch = useDispatch();
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  useEffect(() => {
    dispatch(showStats());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
