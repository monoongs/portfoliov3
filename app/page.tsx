import CommonExperience from '@/app/components/CommonExperience';
import Introduce from '@/app/components/Introduce';
import experience from '@/app/config';

function Home() {
  const sorted = Object.values(experience).sort((a, b) => b.order - a.order);

  return (
    <>
      <Introduce />
      {sorted.map((exp) => (
        <CommonExperience key={exp.id} experienceId={exp.id} />
      ))}
    </>
  );
}

export default Home;
