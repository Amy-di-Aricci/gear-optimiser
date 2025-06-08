import { Stack } from '@mui/material';
import { useState } from 'react';
import { useIsNumberUwu } from './useIsNumberUwu';
import { LearningHookDisplay } from './LearningHookDisplay';
import { LearningHookButton } from './LearningHookButton';

export const LearningHook = () => {
  const [timesClicked, setTimesClicked] = useState<number>(0);

  const uwuString = useIsNumberUwu(timesClicked);
  return (
    <Stack>
      <LearningHookDisplay timesClicked={timesClicked} uwuString={uwuString} />
      <LearningHookButton setTimesClicked={setTimesClicked} />
    </Stack>
  );
};
