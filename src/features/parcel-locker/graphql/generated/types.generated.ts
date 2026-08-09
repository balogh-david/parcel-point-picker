export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: unknown; output: unknown; }
  DateTimeTz: { input: unknown; output: unknown; }
  IP: { input: unknown; output: unknown; }
  ProviderEnum: { input: unknown; output: unknown; }
  Upload: { input: unknown; output: unknown; }
  Void: { input: unknown; output: unknown; }
};

export type Address = {
  __typename?: 'Address';
  addressLine1: Scalars['String']['output'];
  addressLine2?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  country: CountryEnum;
  note?: Maybe<Scalars['String']['output']>;
  postalCode: Scalars['String']['output'];
  state?: Maybe<Scalars['String']['output']>;
};

export type AddressFieldEnum =
  | 'ADDRESS_LINE1'
  | 'ADDRESS_LINE2'
  | 'CITY'
  | 'COUNTRY'
  | 'EMAIL'
  | 'FIRST_NAME'
  | 'LANGUAGE'
  | 'LAST_NAME'
  | 'LOCATION'
  | 'PHONE'
  | 'POSTAL_CODE'
  | 'STATE';

export type AddressInput = {
  addressLine1: Scalars['String']['input'];
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  country: CountryEnum;
  note?: InputMaybe<Scalars['String']['input']>;
  postalCode: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
};

export type Callout = CalloutInterface & {
  __typename?: 'Callout';
  content: Scalars['String']['output'];
  variant: CalloutEnum;
};

export type CalloutEnum =
  | 'DANGER'
  | 'INFO'
  | 'SUCCESS'
  | 'WARNING';

export type CalloutInterface = {
  content: Scalars['String']['output'];
  variant: CalloutEnum;
};

export type CalloutLevelEnum =
  | 'OPERATOR'
  | 'PICKUP_POINT'
  | 'PROVIDER'
  | 'TYPE';

export type CountryEnum =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW';

export type CreateAddressInput = {
  address: CustomerAddressInput;
  sessionId: Scalars['ID']['input'];
};

export type CreateAndSetAddressInput = {
  address: CreateAddressInput;
  provider?: InputMaybe<Scalars['ProviderEnum']['input']>;
};

export type CreateSessionInput = {
  callouts?: InputMaybe<Array<SessionCalloutInput>>;
  currency?: InputMaybe<CurrencyEnum>;
  customer?: InputMaybe<SessionCustomerInput>;
  homeDelivery?: InputMaybe<SessionHomeDeliveryInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  language?: InputMaybe<LanguageEnum>;
  mode?: InputMaybe<ShipmentModeEnum>;
  origin?: InputMaybe<SessionOriginInput>;
  parcels?: InputMaybe<Array<SessionParcelInput>>;
  pickupPoint?: InputMaybe<SessionPickupPointInput>;
  price?: InputMaybe<Array<SessionPriceInput>>;
  sender?: InputMaybe<SessionSenderInput>;
  zones?: InputMaybe<Array<SessionZoneInput>>;
};

export type CurrencyEnum =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BOV'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHE'
  | 'CHF'
  | 'CHW'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'COU'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRU'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MXV'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLE'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STN'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'USN'
  | 'UYI'
  | 'UYU'
  | 'UZS'
  | 'VED'
  | 'VEF'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XCD'
  | 'XDR'
  | 'XOF'
  | 'XPF'
  | 'XSU'
  | 'XUA'
  | 'YER'
  | 'ZAR'
  | 'ZMW'
  | 'ZWL';

export type Customer = {
  __typename?: 'Customer';
  addresses?: Maybe<Array<CustomerAddress>>;
};

export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  address: Address;
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  recipient?: Maybe<CustomerRecipient>;
  referenceId?: Maybe<Scalars['String']['output']>;
};

export type CustomerAddressInput = {
  address: AddressInput;
  label?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  recipient?: InputMaybe<CustomerRecipientInput>;
  referenceId?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerRecipient = {
  __typename?: 'CustomerRecipient';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  language?: Maybe<LanguageEnum>;
  lastName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type CustomerRecipientInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<LanguageEnum>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type DateRangeFilter = {
  end?: InputMaybe<Scalars['Date']['input']>;
  start?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeRange = {
  __typename?: 'DateTimeRange';
  end?: Maybe<Scalars['DateTimeTz']['output']>;
  start?: Maybe<Scalars['DateTimeTz']['output']>;
};

export type DateTimeRangeFilter = {
  end?: InputMaybe<Scalars['DateTimeTz']['input']>;
  start?: InputMaybe<Scalars['DateTimeTz']['input']>;
};

export type DayEnum =
  | 'FRIDAY'
  | 'MONDAY'
  | 'SATURDAY'
  | 'SUNDAY'
  | 'THURSDAY'
  | 'TUESDAY'
  | 'WEDNESDAY';

export type DeleteAddressInput = {
  addressId: Scalars['ID']['input'];
  sessionId: Scalars['ID']['input'];
};

export type Dimension = {
  __typename?: 'Dimension';
  height: Scalars['Float']['output'];
  length: Scalars['Float']['output'];
  width: Scalars['Float']['output'];
};

export type DimensionInput = {
  height: Scalars['Float']['input'];
  length: Scalars['Float']['input'];
  width: Scalars['Float']['input'];
};

export type FloatRange = {
  __typename?: 'FloatRange';
  end: Scalars['Float']['output'];
  start: Scalars['Float']['output'];
};

export type FloatRangeFilter = {
  end?: InputMaybe<Scalars['Float']['input']>;
  start?: InputMaybe<Scalars['Float']['input']>;
};

export type IntRangeFilter = {
  end?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Intercom = {
  __typename?: 'Intercom';
  apiBase: Scalars['String']['output'];
  appId: Scalars['String']['output'];
  intercomUserJwt?: Maybe<Scalars['String']['output']>;
};

export type KeyValue = {
  __typename?: 'KeyValue';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type KeyValueInput = {
  key: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type LanguageEnum =
  | 'AA'
  | 'AB'
  | 'AE'
  | 'AF'
  | 'AK'
  | 'AM'
  | 'AN'
  | 'AR'
  | 'AS'
  | 'AV'
  | 'AY'
  | 'AZ'
  | 'BA'
  | 'BE'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BR'
  | 'BS'
  | 'CA'
  | 'CE'
  | 'CH'
  | 'CO'
  | 'CR'
  | 'CS'
  | 'CU'
  | 'CV'
  | 'CY'
  | 'DA'
  | 'DE'
  | 'DV'
  | 'DZ'
  | 'EE'
  | 'EL'
  | 'EN'
  | 'EO'
  | 'ES'
  | 'ET'
  | 'EU'
  | 'FA'
  | 'FF'
  | 'FI'
  | 'FJ'
  | 'FO'
  | 'FR'
  | 'FY'
  | 'GA'
  | 'GD'
  | 'GL'
  | 'GN'
  | 'GU'
  | 'GV'
  | 'HA'
  | 'HE'
  | 'HI'
  | 'HO'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'HY'
  | 'HZ'
  | 'IA'
  | 'ID'
  | 'IE'
  | 'IG'
  | 'II'
  | 'IK'
  | 'IO'
  | 'IS'
  | 'IT'
  | 'IU'
  | 'JA'
  | 'JV'
  | 'KA'
  | 'KG'
  | 'KI'
  | 'KJ'
  | 'KK'
  | 'KL'
  | 'KM'
  | 'KN'
  | 'KO'
  | 'KR'
  | 'KS'
  | 'KU'
  | 'KV'
  | 'KW'
  | 'KY'
  | 'LA'
  | 'LB'
  | 'LG'
  | 'LI'
  | 'LN'
  | 'LO'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'MG'
  | 'MH'
  | 'MI'
  | 'MK'
  | 'ML'
  | 'MN'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MY'
  | 'NA'
  | 'NB'
  | 'ND'
  | 'NE'
  | 'NG'
  | 'NL'
  | 'NN'
  | 'NO'
  | 'NR'
  | 'NV'
  | 'NY'
  | 'OC'
  | 'OJ'
  | 'OM'
  | 'OR'
  | 'OS'
  | 'PA'
  | 'PI'
  | 'PL'
  | 'PS'
  | 'PT'
  | 'QU'
  | 'RM'
  | 'RN'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SI'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SQ'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SU'
  | 'SV'
  | 'SW'
  | 'TA'
  | 'TE'
  | 'TG'
  | 'TH'
  | 'TI'
  | 'TK'
  | 'TL'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TS'
  | 'TT'
  | 'TW'
  | 'TY'
  | 'UG'
  | 'UK'
  | 'UR'
  | 'UZ'
  | 'VE'
  | 'VI'
  | 'VO'
  | 'WA'
  | 'WO'
  | 'XH'
  | 'YI'
  | 'YO'
  | 'ZA'
  | 'ZH'
  | 'ZU';

export type LocalizedStringInput = {
  language: LanguageEnum;
  value: Scalars['String']['input'];
};

export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Merchant = {
  __typename?: 'Merchant';
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Money = {
  __typename?: 'Money';
  amount: Scalars['Float']['output'];
  currency: CurrencyEnum;
};

export type MoneyInput = {
  amount: Scalars['Float']['input'];
  currency: CurrencyEnum;
};

export type MoneyOrMoneyRange = Money | MoneyRange;

export type MoneyRange = {
  __typename?: 'MoneyRange';
  amount: FloatRange;
  currency: CurrencyEnum;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAddress: CustomerAddress;
  createAndSetAddress: SessionAddress;
  createSession: Session;
  deleteAddress?: Maybe<Scalars['Void']['output']>;
  deleteAndUnsetAddress: Session;
  ping: Scalars['String']['output'];
  register: Registration;
  setAddress: Session;
  setGuestAddress: Session;
  setHomeDeliveryProvider: Session;
  setPickupPoint: Session;
  updateAddress: CustomerAddress;
  updateAndSetAddress: SessionAddress;
};


export type MutationCreateAddressArgs = {
  input: CreateAddressInput;
};


export type MutationCreateAndSetAddressArgs = {
  input: CreateAndSetAddressInput;
};


export type MutationCreateSessionArgs = {
  input: CreateSessionInput;
  merchantId: Scalars['ID']['input'];
};


export type MutationDeleteAddressArgs = {
  input: DeleteAddressInput;
};


export type MutationDeleteAndUnsetAddressArgs = {
  input: DeleteAddressInput;
};


export type MutationRegisterArgs = {
  merchant: RegisterMerchantInput;
  token?: InputMaybe<Scalars['String']['input']>;
  user: RegisterUserInput;
};


export type MutationSetAddressArgs = {
  input: SetAddressInput;
};


export type MutationSetGuestAddressArgs = {
  input: SetGuestAddressInput;
};


export type MutationSetHomeDeliveryProviderArgs = {
  input: SetHomeDeliveryProviderInput;
};


export type MutationSetPickupPointArgs = {
  input: SetPickupPointInput;
};


export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationUpdateAndSetAddressArgs = {
  input: UpdateAndSetAddressInput;
};

export type OpeningHour = {
  __typename?: 'OpeningHour';
  day: DayEnum;
  end: Time;
  start: Time;
};

export type OpeningHourInput = {
  day: DayEnum;
  end: TimeInput;
  start: TimeInput;
};

export type Operator = {
  __typename?: 'Operator';
  icon?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  operator: OperatorEnum;
};

export type OperatorEnum =
  | 'ALLWYN'
  | 'ALZA_BOX'
  | 'AVANTI'
  | 'AVEC'
  | 'AVIA'
  | 'BILLA'
  | 'BIZ'
  | 'BP'
  | 'BUDNI'
  | 'CESKA_POSTA'
  | 'COOP'
  | 'CORNER'
  | 'CUSTOM'
  | 'CZ_POST'
  | 'DHL'
  | 'DISKA'
  | 'DPD'
  | 'ECONT'
  | 'EURONICS'
  | 'EXPRESS_ONE'
  | 'FED_EX'
  | 'FOX_POST'
  | 'GENIKI'
  | 'GLS'
  | 'HERMES'
  | 'HR_POST'
  | 'INTERSPORT'
  | 'IN_POST'
  | 'KAUFLAND'
  | 'KKIOSK'
  | 'LIDL'
  | 'MEDIA_MARKT'
  | 'MOL'
  | 'MPL'
  | 'MYFLEXBOX'
  | 'NKD'
  | 'OMV'
  | 'ONE'
  | 'OTHER'
  | 'OX_POINT'
  | 'PACKETA'
  | 'PAGRO'
  | 'PATRONBOLT'
  | 'PLAYERSROOM'
  | 'PLAYMAX'
  | 'POST_NORD'
  | 'POST_N_L'
  | 'PPL'
  | 'RAIFFEISEN'
  | 'REAL'
  | 'RELAY_INMEDIO'
  | 'ROBOT_GURU'
  | 'SAME_DAY'
  | 'SATURN'
  | 'SEUR'
  | 'SHELL'
  | 'SK_POST'
  | 'SPAR'
  | 'SPEEDEX'
  | 'SPORTFACTORY'
  | 'SPRING'
  | 'SPRINTER'
  | 'TAMBURI'
  | 'TNT'
  | 'TRANS_SPED'
  | 'TWO_TWO_ZERO_VOLT'
  | 'UPS'
  | 'WOLT';

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export type OrderByRelationAggregateFunction =
  /** Amount of items. */
  | 'COUNT';

/** Aggregate functions when ordering by a relation that may specify a column. */
export type OrderByRelationWithColumnAggregateFunction =
  /** Average. */
  | 'AVG'
  /** Amount of items. */
  | 'COUNT'
  /** Maximum. */
  | 'MAX'
  /** Minimum. */
  | 'MIN'
  /** Sum. */
  | 'SUM';

export type OrderDirectionEnum =
  | 'ASC'
  | 'DESC';

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']['output']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']['output']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** Number of items per page. */
  perPage: Scalars['Int']['output'];
  /** Number of total available items. */
  total: Scalars['Int']['output'];
};

export type PartialAddress = {
  __typename?: 'PartialAddress';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<CountryEnum>;
  note?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type PartialAddressInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<CountryEnum>;
  note?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentMethodEnum =
  | 'CARD'
  | 'CASH';

export type PickupPoint = {
  __typename?: 'PickupPoint';
  address: Address;
  callouts?: Maybe<Array<Callout>>;
  cashOnDelivery?: Maybe<Array<PaymentMethodEnum>>;
  distance: Scalars['Int']['output'];
  extra?: Maybe<Array<KeyValue>>;
  hasWheelchairAccess?: Maybe<Scalars['Boolean']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  isAvailable: Scalars['Boolean']['output'];
  isCustom: Scalars['Boolean']['output'];
  isOpen: Scalars['Boolean']['output'];
  isOpenTwentyFourSeven: Scalars['Boolean']['output'];
  load?: Maybe<Scalars['Float']['output']>;
  location: Location;
  name: Scalars['String']['output'];
  openingHours: Array<OpeningHour>;
  operator?: Maybe<Operator>;
  phone?: Maybe<Scalars['String']['output']>;
  pid: Scalars['Int']['output'];
  price?: Maybe<Money>;
  provider?: Maybe<Provider>;
  referenceId: Scalars['ID']['output'];
  requiredAddressFields?: Maybe<Array<AddressFieldEnum>>;
  tags?: Maybe<Array<PickupPointTag>>;
  type?: Maybe<PickupPointTypeEnum>;
};


export type PickupPointCalloutsArgs = {
  levels?: InputMaybe<Array<CalloutLevelEnum>>;
};


export type PickupPointDistanceArgs = {
  location: LocationInput;
};


export type PickupPointIsOpenArgs = {
  timestamp?: InputMaybe<Scalars['DateTimeTz']['input']>;
};


export type PickupPointOpeningHoursArgs = {
  timezone?: InputMaybe<TimezoneEnum>;
};

export type PickupPointBoundingBoxFilterInput = {
  northEast: LocationInput;
  southWest: LocationInput;
};

export type PickupPointCallout = CalloutInterface & {
  __typename?: 'PickupPointCallout';
  content: Scalars['String']['output'];
  operator?: Maybe<OperatorEnum>;
  pickupPointId?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['ProviderEnum']['output']>;
  type?: Maybe<PickupPointTypeEnum>;
  variant: CalloutEnum;
};

export type PickupPointDistanceFilterInput = {
  distance: Scalars['Int']['input'];
  location: LocationInput;
};

export type PickupPointFilterInput = {
  boundingBox?: InputMaybe<PickupPointBoundingBoxFilterInput>;
  cashOnDelivery?: InputMaybe<Array<PaymentMethodEnum>>;
  country?: InputMaybe<CountryEnum>;
  distance?: InputMaybe<PickupPointDistanceFilterInput>;
  hasWheelchairAccess?: InputMaybe<Scalars['Boolean']['input']>;
  isCustom?: InputMaybe<Scalars['Boolean']['input']>;
  isOpenTwentyFourSeven?: InputMaybe<Scalars['Boolean']['input']>;
  operators?: InputMaybe<Array<PickupPointOperatorFilterInput>>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  providers?: InputMaybe<Array<PickupPointProviderFilterInput>>;
  search?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Array<Scalars['ID']['input']>>>;
  type?: InputMaybe<Array<PickupPointTypeEnum>>;
};

export type PickupPointOperatorFilterInput = {
  operator: OperatorEnum;
  type?: InputMaybe<Array<PickupPointTypeEnum>>;
};

/** A paginated list of PickupPoint items. */
export type PickupPointPaginator = {
  __typename?: 'PickupPointPaginator';
  /** A list of PickupPoint items. */
  data: Array<PickupPoint>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type PickupPointProviderFilterInput = {
  provider: Scalars['ProviderEnum']['input'];
  type?: InputMaybe<Array<PickupPointTypeEnum>>;
};

export type PickupPointSortEnum =
  | 'DISTANCE'
  | 'PRICE';

export type PickupPointSortInput = {
  direction?: InputMaybe<OrderDirectionEnum>;
  field: PickupPointSortEnum;
  location?: InputMaybe<LocationInput>;
};

export type PickupPointTag = {
  __typename?: 'PickupPointTag';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type PickupPointTagInput = {
  localizations?: InputMaybe<Array<LocalizedStringInput>>;
  name: Scalars['String']['input'];
};

export type PickupPointTypeEnum =
  | 'LOCKER'
  | 'POST_OFFICE'
  | 'SHOP';

export type Provider = {
  __typename?: 'Provider';
  icon?: Maybe<Scalars['String']['output']>;
  information?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  provider: Scalars['ProviderEnum']['output'];
};

export type Query = {
  __typename?: 'Query';
  addresses: Array<CustomerAddress>;
  intercom?: Maybe<Intercom>;
  ping: Scalars['String']['output'];
  session?: Maybe<Session>;
  what3words?: Maybe<What3WordSquare>;
};


export type QueryAddressesArgs = {
  sessionId: Scalars['ID']['input'];
};


export type QuerySessionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWhat3wordsArgs = {
  words: Scalars['String']['input'];
};

export type RegisterMerchantInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type RegisterUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Registration = {
  __typename?: 'Registration';
  merchant: Merchant;
  token: Token;
  user: User;
};

export type Session = {
  __typename?: 'Session';
  analytics: SessionAnalytics;
  currency?: Maybe<CurrencyEnum>;
  homeDelivery: SessionHomeDelivery;
  id: Scalars['ID']['output'];
  isGuest: Scalars['Boolean']['output'];
  language?: Maybe<LanguageEnum>;
  pickupPoint: SessionPickupPoint;
  sdk: Scalars['String']['output'];
  themes: Array<Theme>;
};

export type SessionAddress = {
  __typename?: 'SessionAddress';
  address: CustomerAddress;
  session: Session;
};

export type SessionAnalytics = {
  __typename?: 'SessionAnalytics';
  anonymousId?: Maybe<Scalars['ID']['output']>;
  merchantId: Scalars['ID']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
};

export type SessionCalloutInput = {
  content: Scalars['String']['input'];
  operator?: InputMaybe<OperatorEnum>;
  pickupPointId?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['ProviderEnum']['input']>;
  type?: InputMaybe<PickupPointTypeEnum>;
  variant?: CalloutEnum;
};

export type SessionCustomerAddressInput = {
  address: AddressInput;
  label?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  recipient?: InputMaybe<CustomerRecipientInput>;
  referenceId?: InputMaybe<Scalars['String']['input']>;
};

export type SessionCustomerInput = {
  addresses?: InputMaybe<Array<SessionCustomerAddressInput>>;
  referenceId?: InputMaybe<Scalars['String']['input']>;
};

export type SessionHomeDelivery = {
  __typename?: 'SessionHomeDelivery';
  alwaysConfirmRecipient?: Maybe<Scalars['Boolean']['output']>;
  customer?: Maybe<Customer>;
  enabled: Scalars['Boolean']['output'];
  information?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['Boolean']['output']>;
  providers?: Maybe<Array<SessionHomeDeliveryProvider>>;
  recipient?: Maybe<CustomerRecipient>;
  selected?: Maybe<SessionHomeDeliveryAddress>;
  title?: Maybe<Scalars['String']['output']>;
};


export type SessionHomeDeliveryProvidersArgs = {
  filter?: InputMaybe<SessionHomeDeliveryProviderFilterInput>;
};

export type SessionHomeDeliveryAddress = {
  __typename?: 'SessionHomeDeliveryAddress';
  address: CustomerAddress;
  providers?: Maybe<Array<SessionHomeDeliveryAddressProvider>>;
  selected?: Maybe<SessionHomeDeliveryAddressProvider>;
};

export type SessionHomeDeliveryAddressProvider = {
  __typename?: 'SessionHomeDeliveryAddressProvider';
  price?: Maybe<Money>;
  provider: Provider;
  requiredAddressFields?: Maybe<Array<AddressFieldEnum>>;
  selected: Scalars['Boolean']['output'];
};

export type SessionHomeDeliveryInput = {
  callouts?: InputMaybe<Array<SessionCalloutInput>>;
  dropOffAt?: InputMaybe<Scalars['DateTimeTz']['input']>;
  enabled: Scalars['Boolean']['input'];
  location?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Array<SessionPriceInput>>;
  providers?: InputMaybe<Array<Scalars['ProviderEnum']['input']>>;
  recipient?: InputMaybe<CustomerRecipientInput>;
  zones?: InputMaybe<Array<SessionHomeDeliveryZoneInput>>;
};

export type SessionHomeDeliveryProvider = {
  __typename?: 'SessionHomeDeliveryProvider';
  callouts?: Maybe<Array<Callout>>;
  price?: Maybe<MoneyOrMoneyRange>;
  provider: Provider;
  requiredAddressFields?: Maybe<Array<AddressFieldEnum>>;
};


export type SessionHomeDeliveryProviderCalloutsArgs = {
  levels?: InputMaybe<Array<CalloutLevelEnum>>;
};

export type SessionHomeDeliveryProviderFilterInput = {
  country: CountryEnum;
  postalCode: Scalars['String']['input'];
  provider?: InputMaybe<Scalars['ProviderEnum']['input']>;
};

export type SessionHomeDeliveryZoneInput = {
  countries: Array<CountryEnum>;
  providers: Array<Scalars['ProviderEnum']['input']>;
};

export type SessionOriginInput = {
  address?: InputMaybe<AddressInput>;
  location?: InputMaybe<LocationInput>;
  pickupPointId?: InputMaybe<Scalars['ID']['input']>;
};

export type SessionParcelInput = {
  cashOnDelivery?: InputMaybe<MoneyInput>;
  dimensions: DimensionInput;
  insurance?: InputMaybe<MoneyInput>;
  value?: InputMaybe<MoneyInput>;
  weight: Scalars['Float']['input'];
};

export type SessionPickupPoint = {
  __typename?: 'SessionPickupPoint';
  alwaysConfirmRecipient?: Maybe<Scalars['Boolean']['output']>;
  custom: SessionPickupPointCustom;
  customer?: Maybe<Customer>;
  enabled: Scalars['Boolean']['output'];
  information?: Maybe<Scalars['String']['output']>;
  merchant: Merchant;
  operators?: Maybe<Array<SessionPickupPointOperator>>;
  pickupPoint?: Maybe<PickupPoint>;
  pickupPointByPid?: Maybe<PickupPoint>;
  pickupPoints: SessionPickupPointList;
  providers?: Maybe<Array<SessionPickupPointProvider>>;
  recipient?: Maybe<CustomerRecipient>;
  selected?: Maybe<PickupPoint>;
  tags?: Maybe<Array<Array<PickupPointTag>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type SessionPickupPointPickupPointArgs = {
  id: Scalars['ID']['input'];
};


export type SessionPickupPointPickupPointByPidArgs = {
  id: Scalars['Int']['input'];
};


export type SessionPickupPointPickupPointsArgs = {
  filters?: InputMaybe<PickupPointFilterInput>;
  sortBy?: InputMaybe<PickupPointSortInput>;
};

export type SessionPickupPointCustom = {
  __typename?: 'SessionPickupPointCustom';
  enabled: Scalars['Boolean']['output'];
  information?: Maybe<Scalars['String']['output']>;
  price?: Maybe<MoneyRange>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SessionPickupPointCustomAllowInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  referenceId?: InputMaybe<Scalars['ID']['input']>;
};

export type SessionPickupPointCustomInput = {
  allowlist?: InputMaybe<Array<SessionPickupPointCustomAllowInput>>;
  enabled: Scalars['Boolean']['input'];
};

export type SessionPickupPointDisallowInput = {
  hide?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  operator?: InputMaybe<OperatorEnum>;
  provider?: InputMaybe<Scalars['ProviderEnum']['input']>;
  referenceId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<PickupPointTypeEnum>;
};

export type SessionPickupPointInput = {
  callouts?: InputMaybe<Array<SessionCalloutInput>>;
  custom?: InputMaybe<SessionPickupPointCustomInput>;
  disallow?: InputMaybe<Array<SessionPickupPointDisallowInput>>;
  enabled: Scalars['Boolean']['input'];
  price?: InputMaybe<Array<SessionPickupPointPriceInput>>;
  providers?: InputMaybe<Array<SessionPickupPointProviderInput>>;
  recipient?: InputMaybe<CustomerRecipientInput>;
  tags?: InputMaybe<Array<SessionPickupPointTagInput>>;
  zones?: InputMaybe<Array<SessionPickupPointZoneInput>>;
};

export type SessionPickupPointList = {
  __typename?: 'SessionPickupPointList';
  map: SessionPickupPointListMap;
  points: PickupPointPaginator;
  recommended?: Maybe<Array<PickupPoint>>;
};


export type SessionPickupPointListPointsArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type SessionPickupPointListMap = {
  __typename?: 'SessionPickupPointListMap';
  common: Array<Scalars['Int']['output']>;
  custom: Array<SessionPickupPointListMapCustom>;
  disallowed: Array<Scalars['Int']['output']>;
};

export type SessionPickupPointListMapCustom = {
  __typename?: 'SessionPickupPointListMapCustom';
  icn?: Maybe<Scalars['String']['output']>;
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
  pid: Scalars['Int']['output'];
};

export type SessionPickupPointOperator = {
  __typename?: 'SessionPickupPointOperator';
  callouts?: Maybe<Array<PickupPointCallout>>;
  operator: Operator;
  pickupPointTypes?: Maybe<Array<PickupPointTypeEnum>>;
  price?: Maybe<MoneyRange>;
};


export type SessionPickupPointOperatorCalloutsArgs = {
  levels?: InputMaybe<Array<CalloutLevelEnum>>;
};

export type SessionPickupPointPriceInput = {
  countries?: InputMaybe<Array<CountryEnum>>;
  pickupPointType?: InputMaybe<PickupPointTypeEnum>;
  price: MoneyInput;
  provider?: InputMaybe<Scalars['ProviderEnum']['input']>;
};

export type SessionPickupPointProvider = {
  __typename?: 'SessionPickupPointProvider';
  callouts?: Maybe<Array<PickupPointCallout>>;
  pickupPointTypes?: Maybe<Array<PickupPointTypeEnum>>;
  price?: Maybe<MoneyRange>;
  provider: Provider;
};


export type SessionPickupPointProviderCalloutsArgs = {
  levels?: InputMaybe<Array<CalloutLevelEnum>>;
};

export type SessionPickupPointProviderInput = {
  pickupPointTypes?: InputMaybe<Array<PickupPointTypeEnum>>;
  provider: Scalars['ProviderEnum']['input'];
};

export type SessionPickupPointTagInput = {
  hide?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  referenceId?: InputMaybe<Scalars['ID']['input']>;
  tags?: InputMaybe<Array<PickupPointTagInput>>;
};

export type SessionPickupPointZoneInput = {
  countries: Array<CountryEnum>;
  providers: Array<Scalars['ProviderEnum']['input']>;
};

export type SessionPriceInput = {
  countries?: InputMaybe<Array<CountryEnum>>;
  price: MoneyInput;
  provider?: InputMaybe<Scalars['ProviderEnum']['input']>;
};

export type SessionSenderInput = {
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type SessionZoneInput = {
  countries: Array<CountryEnum>;
  providers: Array<Scalars['ProviderEnum']['input']>;
};

export type SetAddressInput = {
  addressId: Scalars['ID']['input'];
  provider?: InputMaybe<Scalars['ProviderEnum']['input']>;
  sessionId: Scalars['ID']['input'];
};

export type SetGuestAddressInput = {
  address: CustomerAddressInput;
  provider?: InputMaybe<Scalars['ProviderEnum']['input']>;
  sessionId: Scalars['ID']['input'];
};

export type SetHomeDeliveryProviderInput = {
  provider: Scalars['ProviderEnum']['input'];
  sessionId: Scalars['ID']['input'];
};

export type SetPickupPointInput = {
  pickupPointId: Scalars['ID']['input'];
  recipient?: InputMaybe<CustomerRecipientInput>;
  sessionId: Scalars['ID']['input'];
};

export type ShipmentModeEnum =
  | 'RECIPIENT_TO_SENDER'
  | 'SENDER_TO_RECIPIENT'
  | 'THIRD_PARTY_TO_THIRD_PARTY';

/** Directions for ordering a list of records. */
export type SortOrder =
  /** Sort records in ascending order. */
  | 'ASC'
  /** Sort records in descending order. */
  | 'DESC';

export type SubscriptionPlanEnum =
  | 'BASIC'
  | 'CUSTOM'
  | 'FREE'
  | 'PREMIUM'
  | 'PROFESSIONAL';

export type Theme = {
  __typename?: 'Theme';
  handle: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  url: Scalars['String']['output'];
};

export type Time = {
  __typename?: 'Time';
  hour: Scalars['Int']['output'];
  minute: Scalars['Int']['output'];
};

export type TimeInput = {
  hour: Scalars['Int']['input'];
  minute: Scalars['Int']['input'];
};

export type TimezoneEnum =
  | 'AFRICA_ABIDJAN'
  | 'AFRICA_ALGIERS'
  | 'AFRICA_BISSAU'
  | 'AFRICA_CAIRO'
  | 'AFRICA_CASABLANCA'
  | 'AFRICA_CEUTA'
  | 'AFRICA_EL_AAIUN'
  | 'AFRICA_JOHANNESBURG'
  | 'AFRICA_JUBA'
  | 'AFRICA_KHARTOUM'
  | 'AFRICA_LAGOS'
  | 'AFRICA_MAPUTO'
  | 'AFRICA_MONROVIA'
  | 'AFRICA_NAIROBI'
  | 'AFRICA_NDJAMENA'
  | 'AFRICA_SAO_TOME'
  | 'AFRICA_TRIPOLI'
  | 'AFRICA_TUNIS'
  | 'AFRICA_WINDHOEK'
  | 'AMERICA_ADAK'
  | 'AMERICA_ANCHORAGE'
  | 'AMERICA_ARAGUAINA'
  | 'AMERICA_ARGENTINA_BUENOS_AIRES'
  | 'AMERICA_ARGENTINA_CATAMARCA'
  | 'AMERICA_ARGENTINA_CORDOBA'
  | 'AMERICA_ARGENTINA_JUJUY'
  | 'AMERICA_ARGENTINA_LA_RIOJA'
  | 'AMERICA_ARGENTINA_MENDOZA'
  | 'AMERICA_ARGENTINA_RIO_GALLEGOS'
  | 'AMERICA_ARGENTINA_SALTA'
  | 'AMERICA_ARGENTINA_SAN_JUAN'
  | 'AMERICA_ARGENTINA_SAN_LUIS'
  | 'AMERICA_ARGENTINA_TUCUMAN'
  | 'AMERICA_ARGENTINA_USHUAIA'
  | 'AMERICA_ASUNCION'
  | 'AMERICA_BAHIA'
  | 'AMERICA_BAHIA_BANDERAS'
  | 'AMERICA_BARBADOS'
  | 'AMERICA_BELEM'
  | 'AMERICA_BELIZE'
  | 'AMERICA_BOA_VISTA'
  | 'AMERICA_BOGOTA'
  | 'AMERICA_BOISE'
  | 'AMERICA_CAMBRIDGE_BAY'
  | 'AMERICA_CAMPO_GRANDE'
  | 'AMERICA_CANCUN'
  | 'AMERICA_CARACAS'
  | 'AMERICA_CAYENNE'
  | 'AMERICA_CHICAGO'
  | 'AMERICA_CHIHUAHUA'
  | 'AMERICA_CIUDAD_JUAREZ'
  | 'AMERICA_COSTA_RICA'
  | 'AMERICA_CUIABA'
  | 'AMERICA_DANMARKSHAVN'
  | 'AMERICA_DAWSON'
  | 'AMERICA_DAWSON_CREEK'
  | 'AMERICA_DENVER'
  | 'AMERICA_DETROIT'
  | 'AMERICA_EDMONTON'
  | 'AMERICA_EIRUNEPE'
  | 'AMERICA_EL_SALVADOR'
  | 'AMERICA_FORTALEZA'
  | 'AMERICA_FORT_NELSON'
  | 'AMERICA_GLACE_BAY'
  | 'AMERICA_GOOSE_BAY'
  | 'AMERICA_GRAND_TURK'
  | 'AMERICA_GUATEMALA'
  | 'AMERICA_GUAYAQUIL'
  | 'AMERICA_GUYANA'
  | 'AMERICA_HALIFAX'
  | 'AMERICA_HAVANA'
  | 'AMERICA_HERMOSILLO'
  | 'AMERICA_INDIANA_INDIANAPOLIS'
  | 'AMERICA_INDIANA_KNOX'
  | 'AMERICA_INDIANA_MARENGO'
  | 'AMERICA_INDIANA_PETERSBURG'
  | 'AMERICA_INDIANA_TELL_CITY'
  | 'AMERICA_INDIANA_VEVAY'
  | 'AMERICA_INDIANA_VINCENNES'
  | 'AMERICA_INDIANA_WINAMAC'
  | 'AMERICA_INUVIK'
  | 'AMERICA_IQALUIT'
  | 'AMERICA_JAMAICA'
  | 'AMERICA_JUNEAU'
  | 'AMERICA_KENTUCKY_LOUISVILLE'
  | 'AMERICA_KENTUCKY_MONTICELLO'
  | 'AMERICA_LA_PAZ'
  | 'AMERICA_LIMA'
  | 'AMERICA_LOS_ANGELES'
  | 'AMERICA_MACEIO'
  | 'AMERICA_MANAGUA'
  | 'AMERICA_MANAUS'
  | 'AMERICA_MARTINIQUE'
  | 'AMERICA_MATAMOROS'
  | 'AMERICA_MAZATLAN'
  | 'AMERICA_MENOMINEE'
  | 'AMERICA_MERIDA'
  | 'AMERICA_METLAKATLA'
  | 'AMERICA_MEXICO_CITY'
  | 'AMERICA_MIQUELON'
  | 'AMERICA_MONCTON'
  | 'AMERICA_MONTERREY'
  | 'AMERICA_MONTEVIDEO'
  | 'AMERICA_NEW_YORK'
  | 'AMERICA_NOME'
  | 'AMERICA_NORONHA'
  | 'AMERICA_NORTH_DAKOTA_BEULAH'
  | 'AMERICA_NORTH_DAKOTA_CENTER'
  | 'AMERICA_NORTH_DAKOTA_NEW_SALEM'
  | 'AMERICA_NUUK'
  | 'AMERICA_OJINAGA'
  | 'AMERICA_PANAMA'
  | 'AMERICA_PARAMARIBO'
  | 'AMERICA_PHOENIX'
  | 'AMERICA_PORTAU_PRINCE'
  | 'AMERICA_PORTO_VELHO'
  | 'AMERICA_PUERTO_RICO'
  | 'AMERICA_PUNTA_ARENAS'
  | 'AMERICA_RANKIN_INLET'
  | 'AMERICA_RECIFE'
  | 'AMERICA_REGINA'
  | 'AMERICA_RESOLUTE'
  | 'AMERICA_RIO_BRANCO'
  | 'AMERICA_SANTAREM'
  | 'AMERICA_SANTIAGO'
  | 'AMERICA_SANTO_DOMINGO'
  | 'AMERICA_SAO_PAULO'
  | 'AMERICA_SCORESBYSUND'
  | 'AMERICA_SITKA'
  | 'AMERICA_ST_JOHNS'
  | 'AMERICA_SWIFT_CURRENT'
  | 'AMERICA_TEGUCIGALPA'
  | 'AMERICA_THULE'
  | 'AMERICA_TIJUANA'
  | 'AMERICA_TORONTO'
  | 'AMERICA_VANCOUVER'
  | 'AMERICA_WHITEHORSE'
  | 'AMERICA_WINNIPEG'
  | 'AMERICA_YAKUTAT'
  | 'ANTARCTICA_CASEY'
  | 'ANTARCTICA_DAVIS'
  | 'ANTARCTICA_MACQUARIE'
  | 'ANTARCTICA_MAWSON'
  | 'ANTARCTICA_PALMER'
  | 'ANTARCTICA_ROTHERA'
  | 'ANTARCTICA_TROLL'
  | 'ASIA_ALMATY'
  | 'ASIA_AMMAN'
  | 'ASIA_ANADYR'
  | 'ASIA_AQTAU'
  | 'ASIA_AQTOBE'
  | 'ASIA_ASHGABAT'
  | 'ASIA_ATYRAU'
  | 'ASIA_BAGHDAD'
  | 'ASIA_BAKU'
  | 'ASIA_BANGKOK'
  | 'ASIA_BARNAUL'
  | 'ASIA_BEIRUT'
  | 'ASIA_BISHKEK'
  | 'ASIA_CHITA'
  | 'ASIA_CHOIBALSAN'
  | 'ASIA_COLOMBO'
  | 'ASIA_DAMASCUS'
  | 'ASIA_DHAKA'
  | 'ASIA_DILI'
  | 'ASIA_DUBAI'
  | 'ASIA_DUSHANBE'
  | 'ASIA_FAMAGUSTA'
  | 'ASIA_GAZA'
  | 'ASIA_HEBRON'
  | 'ASIA_HONG_KONG'
  | 'ASIA_HOVD'
  | 'ASIA_HO_CHI_MINH'
  | 'ASIA_IRKUTSK'
  | 'ASIA_JAKARTA'
  | 'ASIA_JAYAPURA'
  | 'ASIA_JERUSALEM'
  | 'ASIA_KABUL'
  | 'ASIA_KAMCHATKA'
  | 'ASIA_KARACHI'
  | 'ASIA_KATHMANDU'
  | 'ASIA_KHANDYGA'
  | 'ASIA_KOLKATA'
  | 'ASIA_KRASNOYARSK'
  | 'ASIA_KUCHING'
  | 'ASIA_MACAU'
  | 'ASIA_MAGADAN'
  | 'ASIA_MAKASSAR'
  | 'ASIA_MANILA'
  | 'ASIA_NICOSIA'
  | 'ASIA_NOVOKUZNETSK'
  | 'ASIA_NOVOSIBIRSK'
  | 'ASIA_OMSK'
  | 'ASIA_ORAL'
  | 'ASIA_PONTIANAK'
  | 'ASIA_PYONGYANG'
  | 'ASIA_QATAR'
  | 'ASIA_QOSTANAY'
  | 'ASIA_QYZYLORDA'
  | 'ASIA_RIYADH'
  | 'ASIA_SAKHALIN'
  | 'ASIA_SAMARKAND'
  | 'ASIA_SEOUL'
  | 'ASIA_SHANGHAI'
  | 'ASIA_SINGAPORE'
  | 'ASIA_SREDNEKOLYMSK'
  | 'ASIA_TAIPEI'
  | 'ASIA_TASHKENT'
  | 'ASIA_TBILISI'
  | 'ASIA_TEHRAN'
  | 'ASIA_THIMPHU'
  | 'ASIA_TOKYO'
  | 'ASIA_TOMSK'
  | 'ASIA_ULAANBAATAR'
  | 'ASIA_URUMQI'
  | 'ASIA_UST_NERA'
  | 'ASIA_VLADIVOSTOK'
  | 'ASIA_YAKUTSK'
  | 'ASIA_YANGON'
  | 'ASIA_YEKATERINBURG'
  | 'ASIA_YEREVAN'
  | 'ATLANTIC_AZORES'
  | 'ATLANTIC_BERMUDA'
  | 'ATLANTIC_CANARY'
  | 'ATLANTIC_CAPE_VERDE'
  | 'ATLANTIC_FAROE'
  | 'ATLANTIC_MADEIRA'
  | 'ATLANTIC_SOUTH_GEORGIA'
  | 'ATLANTIC_STANLEY'
  | 'AUSTRALIA_ADELAIDE'
  | 'AUSTRALIA_BRISBANE'
  | 'AUSTRALIA_BROKEN_HILL'
  | 'AUSTRALIA_DARWIN'
  | 'AUSTRALIA_EUCLA'
  | 'AUSTRALIA_HOBART'
  | 'AUSTRALIA_LINDEMAN'
  | 'AUSTRALIA_LORD_HOWE'
  | 'AUSTRALIA_MELBOURNE'
  | 'AUSTRALIA_PERTH'
  | 'AUSTRALIA_SYDNEY'
  | 'EUROPE_ANDORRA'
  | 'EUROPE_ASTRAKHAN'
  | 'EUROPE_ATHENS'
  | 'EUROPE_BELGRADE'
  | 'EUROPE_BERLIN'
  | 'EUROPE_BRUSSELS'
  | 'EUROPE_BUCHAREST'
  | 'EUROPE_BUDAPEST'
  | 'EUROPE_CHISINAU'
  | 'EUROPE_DUBLIN'
  | 'EUROPE_GIBRALTAR'
  | 'EUROPE_HELSINKI'
  | 'EUROPE_ISTANBUL'
  | 'EUROPE_KALININGRAD'
  | 'EUROPE_KIROV'
  | 'EUROPE_KYIV'
  | 'EUROPE_LISBON'
  | 'EUROPE_LONDON'
  | 'EUROPE_MADRID'
  | 'EUROPE_MALTA'
  | 'EUROPE_MINSK'
  | 'EUROPE_MOSCOW'
  | 'EUROPE_PARIS'
  | 'EUROPE_PRAGUE'
  | 'EUROPE_RIGA'
  | 'EUROPE_ROME'
  | 'EUROPE_SAMARA'
  | 'EUROPE_SARATOV'
  | 'EUROPE_SIMFEROPOL'
  | 'EUROPE_SOFIA'
  | 'EUROPE_TALLINN'
  | 'EUROPE_TIRANE'
  | 'EUROPE_ULYANOVSK'
  | 'EUROPE_VIENNA'
  | 'EUROPE_VILNIUS'
  | 'EUROPE_VOLGOGRAD'
  | 'EUROPE_WARSAW'
  | 'EUROPE_ZURICH'
  | 'INDIAN_CHAGOS'
  | 'INDIAN_MALDIVES'
  | 'INDIAN_MAURITIUS'
  | 'PACIFIC_APIA'
  | 'PACIFIC_AUCKLAND'
  | 'PACIFIC_BOUGAINVILLE'
  | 'PACIFIC_CHATHAM'
  | 'PACIFIC_EASTER'
  | 'PACIFIC_EFATE'
  | 'PACIFIC_FAKAOFO'
  | 'PACIFIC_FIJI'
  | 'PACIFIC_GALAPAGOS'
  | 'PACIFIC_GAMBIER'
  | 'PACIFIC_GUADALCANAL'
  | 'PACIFIC_GUAM'
  | 'PACIFIC_HONOLULU'
  | 'PACIFIC_KANTON'
  | 'PACIFIC_KIRITIMATI'
  | 'PACIFIC_KOSRAE'
  | 'PACIFIC_KWAJALEIN'
  | 'PACIFIC_MARQUESAS'
  | 'PACIFIC_NAURU'
  | 'PACIFIC_NIUE'
  | 'PACIFIC_NORFOLK'
  | 'PACIFIC_NOUMEA'
  | 'PACIFIC_PAGO_PAGO'
  | 'PACIFIC_PALAU'
  | 'PACIFIC_PITCAIRN'
  | 'PACIFIC_PORT_MORESBY'
  | 'PACIFIC_RAROTONGA'
  | 'PACIFIC_TAHITI'
  | 'PACIFIC_TARAWA'
  | 'PACIFIC_TONGATAPU';

export type Token = {
  __typename?: 'Token';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Specify if you want to include or exclude trashed results from a query. */
export type Trashed =
  /** Only return trashed results. */
  | 'ONLY'
  /** Return both trashed and non-trashed results. */
  | 'WITH'
  /** Only return non-trashed results. */
  | 'WITHOUT';

export type UpdateAddressInput = {
  address: CustomerAddressInput;
  addressId: Scalars['ID']['input'];
  sessionId: Scalars['ID']['input'];
};

export type UpdateAndSetAddressInput = {
  address: UpdateAddressInput;
  provider?: InputMaybe<Scalars['ProviderEnum']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type What3WordSquare = {
  __typename?: 'What3WordSquare';
  address: Address;
  location: Location;
};
