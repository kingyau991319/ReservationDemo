// React
import { useState } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// Material ui
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Box, { BoxProps} from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// Constants
import { MAXWIDTH_COLUMN, NEW_RESV_MIDWIDTH, SMALL_MARGIN } from '../../../Constants/style';

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        pl : 1,
        ...sx,
      }}
      {...other}
    />
  );
}

const DatePickers = (props: {matches: boolean}) => {
  const [value, setValue] = useState<Date | null>(tomorrow);
  const { t } = useTranslation();
  const { matches } = props;

  // TODO: tranlsation for datepicker
  return (
    <Box 
    sx={{
      display: "flex",
      flexDirection: 'row',
      mt: SMALL_MARGIN
    }}
  >
    <Item>
      {matches 
        && <Typography sx={{lineHeight: '56px', height: '30px', fontWeight: "1000", mr: SMALL_MARGIN}}>
          {t('date')}:
        </Typography>
      }
    </Item>
    <Item>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}
          sx={{
            maxWidth: MAXWIDTH_COLUMN,
            minWidth: NEW_RESV_MIDWIDTH,
          }}
        >
          <DatePicker
            disablePast
            // TODO: default is tomorrow
            // TODO: past date validation
            label={matches ? '' : t("booking_date")}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
        
      </LocalizationProvider>
    </Item>
  </Box>

  );
}

export default DatePickers; 
