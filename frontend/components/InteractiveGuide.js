/**
 * InteractiveGuide Component
 * This component utilizes the react-joyride library to render an interactive guide or tour for the user interface. It is designed to enhance user experience by providing step-by-step guidance through the application's features.
 */
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
        },
      }}
    />
  );
};

export default InteractiveGuide;
