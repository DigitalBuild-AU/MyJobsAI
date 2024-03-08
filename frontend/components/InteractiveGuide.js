import React, { useState } from 'react';
import Joyride, { STATUS } from 'react-joyride';

const InteractiveGuide = ({ steps }) => {
  const [run, setRun] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setRun(false);
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      stepIndex={stepIndex}
      continuous={true}
      showProgress={true}
      showSkipButton={true}
      callback={handleJoyrideCallback}
      styles={{
        options: {
          zIndex: 10000,
        },
      }}
    />
  );
};

export default InteractiveGuide;
