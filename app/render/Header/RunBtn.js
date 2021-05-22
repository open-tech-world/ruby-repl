import { Box } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useState } from 'react';

export default function RunBtn() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const output = await window.electron.invoke('run-file');
    console.log(output);
    setLoading(false);
  };

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <LoadingButton
        loading={loading}
        variant="contained"
        endIcon={<PlayArrowIcon />}
        onClick={handleClick}
      >
        Run
      </LoadingButton>
    </Box>
  );
}
