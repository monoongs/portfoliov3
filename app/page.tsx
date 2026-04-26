import CommonExperience from '@/app/components/CommonExperience';
import Introduce from '@/app/components/Introduce';

function Home() {
  return (
    <>
      <Introduce />
      <CommonExperience experienceId='bedrock' />
    </>
  );
}

export default Home;
