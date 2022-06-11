// React
import * as React from 'react';

// Material ui
import Box, { BoxProps} from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// i18n
import { useTranslation } from 'react-i18next';

import { MAXWIDTH_COLUMN, NEW_RESV_MIDWIDTH, SMALL_MARGIN } from '../../../Constants/style';

const optionStyles = { minWidth: NEW_RESV_MIDWIDTH, maxWidth: MAXWIDTH_COLUMN }

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

const SelectPeriod = (props: {matches: boolean, period : any, setPeriod : Function}) => {
  const { period, setPeriod } = props;
  const { t } = useTranslation();
  const { matches } = props;

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };

  return (
    <Box 
      sx={{
        display: "flex",
        flexDirection: 'row',
        mt: SMALL_MARGIN
      }}
    >
      <Item>
        {
          matches &&
          <Typography sx={{lineHeight: '56px', height: '30px', fontWeight: "1000", mr: SMALL_MARGIN}}>
            {t('period')}:
          </Typography>
        }
      </Item>
      <Item>
        <Stack spacing={3}
          sx={optionStyles}
        >
          {/* TODO: make it better to show the code orz */}
          {
            !matches ?
              <FormControl sx={{ minWidth: NEW_RESV_MIDWIDTH }}>
                <InputLabel id="form-input-period">{t("period")}</InputLabel>
                  <Select
                    labelId="form-input-period"
                    id="form-input-period"
                    value={period}
                    label={t("period")}
                    onChange={handleChange}
                  >
                  <MenuItem value='full_day'  sx ={optionStyles}> {t('full_day')} </MenuItem>
                  <MenuItem value='morning'   sx ={optionStyles}> {t('morning')} </MenuItem>
                  <MenuItem value='afternoon' sx ={optionStyles}> {t('afternoon')} </MenuItem>
                  <MenuItem value='night'     sx ={optionStyles}> {t('night')} </MenuItem>
                </Select>
              </FormControl>
            :
            <FormControl sx={{ minWidth: NEW_RESV_MIDWIDTH }}>
              <Select
                value={period}
                onChange={handleChange}
              >
                <MenuItem value='full_day'  sx ={optionStyles}> {t('full_day')} </MenuItem>
                <MenuItem value='morning'   sx ={optionStyles}> {t('morning')} </MenuItem>
                <MenuItem value='afternoon' sx ={optionStyles}> {t('afternoon')} </MenuItem>
                <MenuItem value='night'     sx ={optionStyles}> {t('night')} </MenuItem>
              </Select>
            </FormControl>
          }
        </Stack>
      </Item>
    </Box>
  );
}

export default SelectPeriod;