import { Button } from '@mui/material';
import { useCallback } from 'react';

type LearningHookButtonProps = {
  setTimesClicked: React.Dispatch<React.SetStateAction<number>>;
};

export const LearningHookButton = ({ setTimesClicked }: LearningHookButtonProps) => {
  const onClickMe = useCallback(() => {
    setTimesClicked((prev) => prev + 1);
  }, []);
  return <Button onClick={onClickMe}>Clicku me</Button>;
};
