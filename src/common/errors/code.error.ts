export enum ErrorEnum {
  UNKNOWN_ERROR = 'I-1000',
  VALIDATION_ERROR = 'I-1001',
  PERMISSION_ERROR = 'I-1002',
  FORBIDDEN_ERROR = 'I-1003',
  API_KEY_REQUIRED = 'I-1004',
  API_KEY_INVALID = 'I-1005',
  //
  ACCOUNT_NOT_FOUND = 'I-1101',
  CREATE_ACCOUNT_ERROR = 'I-1102',
  UPDATE_ACCOUNT_ERROR = 'I-1103',
  FIND_ACCOUNT_ERROR = 'I-1104',
  DELETE_ACCOUNT_ERROR = 'I-1105',
  ACCOUNT_WITH_SAME_EMAIL_ALREADY_EXISTS = 'I-1106',
  //
  HEALTH_PROFESSIONAL_NOT_FOUND = 'I-1201',
  CREATE_HEALTH_PROFESSIONAL_ERROR = 'I-1202',
  UPDATE_HEALTH_PROFESSIONAL_ERROR = 'I-1203',
  FIND_HEALTH_PROFESSIONAL_ERROR = 'I-1204',
  DELETE_HEALTH_PROFESSIONAL_ERROR = 'I-1205',
  HEALTH_PROFESSIONAL_WITH_SAME_DATA = 'I-1206',
  //
  KNOW_HOW_NOT_FOUND = 'I-1301',
  CREATE_KNOW_HOW_ERROR = 'I-1302',
  UPDATE_KNOW_HOW_ERROR = 'I-1303',
  FIND_KNOW_HOW_ERROR = 'I-1304',
  DELETE_KNOW_HOW_ERROR = 'I-1305',
  KNOW_HOW_WITH_SAME_DATA = 'I-1306',
  //
  HEALTH_PROFESSIONAL_HAS_KNOW_HOW_NOT_FOUND = 'I-1401',
  CREATE_HEALTH_PROFESSIONAL_HAS_KNOW_HOW_ERROR = 'I-1402',
  UPDATE_HEALTH_PROFESSIONAL_HAS_KNOW_HOW_ERROR = 'I-1403',
  FIND_HEALTH_PROFESSIONAL_HAS_KNOW_HOW_ERROR = 'I-1404',
  DELETE_HEALTH_PROFESSIONAL_HAS_KNOW_HOW_ERROR = 'I-1405',
  HEALTH_PROFESSIONAL_HAS_KNOW_HOW_WITH_SAME_DATA = 'I-1406',
  //
  HEALTH_PROFESSIONAL_HAS_PROFESSION_NOT_FOUND = 'I-1501',
  CREATE_HEALTH_PROFESSIONAL_HAS_PROFESSION_ERROR = 'I-1502',
  UPDATE_HEALTH_PROFESSIONAL_HAS_PROFESSION_ERROR = 'I-1503',
  FIND_HEALTH_PROFESSIONAL_HAS_PROFESSION_ERROR = 'I-1504',
  DELETE_HEALTH_PROFESSIONAL_HAS_PROFESSION_ERROR = 'I-1505',
  HEALTH_PROFESSIONAL_HAS_PROFESSION_WITH_SAME_DATA = 'I-1506',
  //
  PROFESSION_NOT_FOUND = 'I-1601',
  CREATE_PROFESSION_ERROR = 'I-1602',
  UPDATE_PROFESSION_ERROR = 'I-1603',
  FIND_PROFESSION_ERROR = 'I-1604',
  DELETE_PROFESSION_ERROR = 'I-1605',
  PROFESSION_WITH_SAME_DATA = 'I-1606',
  //
  STRUCTURE_NOT_FOUND = 'I-1701',
  CREATE_STRUCTURE_ERROR = 'I-1702',
  UPDATE_STRUCTURE_ERROR = 'I-1703',
  FIND_STRUCTURE_ERROR = 'I-1704',
  DELETE_STRUCTURE_ERROR = 'I-1705',
  STRUCTURE_WITH_SAME_DATA = 'I-1706',
  //
  PHARMACIST_INFORMATION_NOT_FOUND = 'I-1801',
  CREATE_PHARMACIST_INFORMATION_ERROR = 'I-1802',
  UPDATE_PHARMACIST_INFORMATION_ERROR = 'I-1803',
  FIND_PHARMACIST_INFORMATION_ERROR = 'I-1804',
  DELETE_PHARMACIST_INFORMATION_ERROR = 'I-1805',
  PHARMACIST_INFORMATION_WITH_SAME_DATA = 'I-1806',
  //
  HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_NOT_FOUND = 'I-1901',
  CREATE_HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_ERROR = 'I-1902',
  UPDATE_HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_ERROR = 'I-1903',
  FIND_HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_ERROR = 'I-1904',
  DELETE_HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_ERROR = 'I-1905',
  HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_WITH_SAME_DATA = 'I-1906',
}

export const errorToMessageDefinition = {
  [ErrorEnum.UNKNOWN_ERROR]: 'An unknown error as occurred',
  [ErrorEnum.VALIDATION_ERROR]: 'Input validation error',
  [ErrorEnum.PERMISSION_ERROR]: 'Missing required permissions',
  [ErrorEnum.FORBIDDEN_ERROR]: 'You cannot perform this action',
  [ErrorEnum.API_KEY_REQUIRED]: 'API key is required',
  [ErrorEnum.API_KEY_INVALID]: 'API key is invalid',
  //
  [ErrorEnum.ACCOUNT_NOT_FOUND]: 'Account not found',
  [ErrorEnum.CREATE_ACCOUNT_ERROR]:
    'An error as occurred during account creation',
  [ErrorEnum.UPDATE_ACCOUNT_ERROR]:
    'An error as occurred during account updating',
  [ErrorEnum.FIND_ACCOUNT_ERROR]: 'An error occurred while retrieving accounts',
  [ErrorEnum.DELETE_ACCOUNT_ERROR]: 'An error occurred while deleting account',
  [ErrorEnum.ACCOUNT_WITH_SAME_EMAIL_ALREADY_EXISTS]:
    'A account with the same email already exists',
  //
  [ErrorEnum.HEALTH_PROFESSIONAL_NOT_FOUND]: 'Health professional not found',
  [ErrorEnum.CREATE_HEALTH_PROFESSIONAL_ERROR]:
    'An error as occurred during health professional creation',
  [ErrorEnum.UPDATE_HEALTH_PROFESSIONAL_ERROR]:
    'An error as occurred during health professional updating',
  [ErrorEnum.FIND_HEALTH_PROFESSIONAL_ERROR]:
    'An error occurred while retrieving health professionals',
  [ErrorEnum.DELETE_HEALTH_PROFESSIONAL_ERROR]:
    'An error occurred while deleting health professional',
  [ErrorEnum.HEALTH_PROFESSIONAL_WITH_SAME_DATA]:
    'A health professional with the same data already exists',
  //
  [ErrorEnum.KNOW_HOW_NOT_FOUND]: 'Know-how not found',
  [ErrorEnum.CREATE_KNOW_HOW_ERROR]:
    'An error as occurred during know-how creation',
  [ErrorEnum.UPDATE_KNOW_HOW_ERROR]:
    'An error as occurred during know-how updating',
  [ErrorEnum.FIND_KNOW_HOW_ERROR]:
    'An error occurred while retrieving know-hows',
  [ErrorEnum.DELETE_KNOW_HOW_ERROR]:
    'An error occurred while deleting know-how',
  [ErrorEnum.KNOW_HOW_WITH_SAME_DATA]:
    'A know-how with the same data already exists',
  //
  [ErrorEnum.HEALTH_PROFESSIONAL_HAS_KNOW_HOW_NOT_FOUND]:
    'Health professional has know-how not found',
  [ErrorEnum.CREATE_HEALTH_PROFESSIONAL_HAS_KNOW_HOW_ERROR]:
    'An error as occurred during health professional has know-how creation',
  [ErrorEnum.UPDATE_HEALTH_PROFESSIONAL_HAS_KNOW_HOW_ERROR]:
    'An error as occurred during health professional has know-how updating',
  [ErrorEnum.FIND_HEALTH_PROFESSIONAL_HAS_KNOW_HOW_ERROR]:
    'An error occurred while retrieving health professional has know-hows',
  [ErrorEnum.DELETE_HEALTH_PROFESSIONAL_HAS_KNOW_HOW_ERROR]:
    'An error occurred while deleting health professional has know-how',
  [ErrorEnum.HEALTH_PROFESSIONAL_HAS_KNOW_HOW_WITH_SAME_DATA]:
    'A health professional has know-how with the same data already exists',
  //
  [ErrorEnum.HEALTH_PROFESSIONAL_HAS_PROFESSION_NOT_FOUND]:
    'Health professional has profession not found',
  [ErrorEnum.CREATE_HEALTH_PROFESSIONAL_HAS_PROFESSION_ERROR]:
    'An error as occurred during health professional has profession creation',
  [ErrorEnum.UPDATE_HEALTH_PROFESSIONAL_HAS_PROFESSION_ERROR]:
    'An error as occurred during health professional has profession updating',
  [ErrorEnum.FIND_HEALTH_PROFESSIONAL_HAS_PROFESSION_ERROR]:
    'An error occurred while retrieving health professional has professions',
  [ErrorEnum.DELETE_HEALTH_PROFESSIONAL_HAS_PROFESSION_ERROR]:
    'An error occurred while deleting health professional has profession',
  [ErrorEnum.HEALTH_PROFESSIONAL_HAS_PROFESSION_WITH_SAME_DATA]:
    'A health professional has profession with the same data already exists',
  //
  [ErrorEnum.PROFESSION_NOT_FOUND]: 'Profession not found',
  [ErrorEnum.CREATE_PROFESSION_ERROR]:
    'An error as occurred during profession creation',
  [ErrorEnum.UPDATE_PROFESSION_ERROR]:
    'An error as occurred during profession updating',
  [ErrorEnum.FIND_PROFESSION_ERROR]:
    'An error occurred while retrieving professions',
  [ErrorEnum.DELETE_PROFESSION_ERROR]:
    'An error occurred while deleting profession',
  [ErrorEnum.PROFESSION_WITH_SAME_DATA]:
    'A profession with the same data already exists',
  //
  [ErrorEnum.STRUCTURE_NOT_FOUND]: 'Structure not found',
  [ErrorEnum.CREATE_STRUCTURE_ERROR]:
    'An error as occurred during structure creation',
  [ErrorEnum.UPDATE_STRUCTURE_ERROR]:
    'An error as occurred during structure updating',
  [ErrorEnum.FIND_STRUCTURE_ERROR]:
    'An error occurred while retrieving structures',
  [ErrorEnum.DELETE_STRUCTURE_ERROR]:
    'An error occurred while deleting structure',
  [ErrorEnum.STRUCTURE_WITH_SAME_DATA]:
    'A structure with the same data already exists',
  //
  [ErrorEnum.PHARMACIST_INFORMATION_NOT_FOUND]:
    'Pharmacist information not found',
  [ErrorEnum.CREATE_PHARMACIST_INFORMATION_ERROR]:
    'An error as occurred during pharmacist information creation',
  [ErrorEnum.UPDATE_PHARMACIST_INFORMATION_ERROR]:
    'An error as occurred during pharmacist information updating',
  [ErrorEnum.FIND_PHARMACIST_INFORMATION_ERROR]:
    'An error occurred while retrieving pharmacist informations',
  [ErrorEnum.DELETE_PHARMACIST_INFORMATION_ERROR]:
    'An error occurred while deleting pharmacist information',
  [ErrorEnum.PHARMACIST_INFORMATION_WITH_SAME_DATA]:
    'A pharmacist information with the same data already exists',
  //
  [ErrorEnum.HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_NOT_FOUND]:
    'Health professional has pharmacist information not found',
  [ErrorEnum.CREATE_HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_ERROR]:
    'An error as occurred during health professional has pharmacist information creation',
  [ErrorEnum.UPDATE_HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_ERROR]:
    'An error as occurred during health professional has pharmacist information updating',
  [ErrorEnum.FIND_HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_ERROR]:
    'An error occurred while retrieving health professional has pharmacist informations',
  [ErrorEnum.DELETE_HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_ERROR]:
    'An error occurred while deleting health professional has pharmacist information',
  [ErrorEnum.HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_WITH_SAME_DATA]:
    'A health professional has pharmacist information with the same data already exists',
};

export const errorToMessage = (error: ErrorEnum): string => {
  const check = errorToMessageDefinition[error];
  if (!check) return ErrorEnum[error];
  return check;
};
