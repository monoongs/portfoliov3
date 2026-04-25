import BedrockJob from '@/app/components/BedrockJob';
import CommonContainer from '@/app/components/CommonContainer';
import Introduce from '@/app/components/Introduce';

function Home() {
  return (
    <>
      <CommonContainer>
        <Introduce />
      </CommonContainer>
      <CommonContainer>
        <BedrockJob />
      </CommonContainer>
    </>
  );
}

export default Home;
