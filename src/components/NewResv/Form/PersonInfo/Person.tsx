// React
import { useState } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// Material ui
import Box from '@mui/material/Box';

// Constants
import { SMALL_PADDING, TINY_MARGIN,  NEW_RESV_MIDWIDTH } from '../../Constants/style';

function Person() {
  return (
    <Box 
      sx={{
        width: '100%',
        minWidth: NEW_RESV_MIDWIDTH,
        p : SMALL_PADDING,
        mt : TINY_MARGIN,
        ml : TINY_MARGIN,
        mr : TINY_MARGIN,
        border: 3,
        borderColor: 'grey.100',
        borderRadius: 2
      }}
    >
    </Box>
  )
}

export default Person
