// Material ui
import MenuItem from '@mui/material/MenuItem';

// i18n
import { useTranslation } from 'react-i18next';

// Constant
import { MAXWIDTH_COLUMN, NEW_RESV_MIDWIDTH } from '../../../Constants/style';

const PeriodItem = (props: {}) => {
  const { t } = useTranslation();

  return (
    <>
      <MenuItem value={'full_day'}  sx ={{minWidth: NEW_RESV_MIDWIDTH, maxWidth: MAXWIDTH_COLUMN}}>{t('full_day')}</MenuItem>
      <MenuItem value={'morning'}   sx ={{minWidth: NEW_RESV_MIDWIDTH, maxWidth: MAXWIDTH_COLUMN}}>{t('morning')}</MenuItem>
      <MenuItem value={'afternoon'} sx ={{minWidth: NEW_RESV_MIDWIDTH, maxWidth: MAXWIDTH_COLUMN}}>{t('afternoon')}</MenuItem>
      <MenuItem value={'night'}     sx ={{minWidth: NEW_RESV_MIDWIDTH, maxWidth: MAXWIDTH_COLUMN}}>{t('night')}</MenuItem>
    </>
  )
}

export default PeriodItem;