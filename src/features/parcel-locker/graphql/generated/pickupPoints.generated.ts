/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type * as Types from './types.generated';

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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

export type DayEnum =
  | 'FRIDAY'
  | 'MONDAY'
  | 'SATURDAY'
  | 'SUNDAY'
  | 'THURSDAY'
  | 'TUESDAY'
  | 'WEDNESDAY';

export type LocationInput = {
  latitude: number;
  longitude: number;
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

export type OrderDirectionEnum =
  | 'ASC'
  | 'DESC';

export type PaymentMethodEnum =
  | 'CARD'
  | 'CASH';

export type PickupPointBoundingBoxFilterInput = {
  northEast: LocationInput;
  southWest: LocationInput;
};

export type PickupPointDistanceFilterInput = {
  distance: number;
  location: LocationInput;
};

export type PickupPointFilterInput = {
  boundingBox?: PickupPointBoundingBoxFilterInput | null | undefined;
  cashOnDelivery?: Array<PaymentMethodEnum> | null | undefined;
  country?: CountryEnum | null | undefined;
  distance?: PickupPointDistanceFilterInput | null | undefined;
  hasWheelchairAccess?: boolean | null | undefined;
  isCustom?: boolean | null | undefined;
  isOpenTwentyFourSeven?: boolean | null | undefined;
  operators?: Array<PickupPointOperatorFilterInput> | null | undefined;
  postalCode?: string | null | undefined;
  providers?: Array<PickupPointProviderFilterInput> | null | undefined;
  search?: string | null | undefined;
  tags?: Array<Array<string | number>> | null | undefined;
  type?: Array<PickupPointTypeEnum> | null | undefined;
};

export type PickupPointOperatorFilterInput = {
  operator: OperatorEnum;
  type?: Array<PickupPointTypeEnum> | null | undefined;
};

export type PickupPointProviderFilterInput = {
  provider: unknown;
  type?: Array<PickupPointTypeEnum> | null | undefined;
};

export type PickupPointSortEnum =
  | 'DISTANCE'
  | 'PRICE';

export type PickupPointSortInput = {
  direction?: OrderDirectionEnum | null | undefined;
  field: PickupPointSortEnum;
  location?: LocationInput | null | undefined;
};

export type PickupPointTypeEnum =
  | 'LOCKER'
  | 'POST_OFFICE'
  | 'SHOP';

export type PickupPointsInAreaQueryVariables = Exact<{
  sessionId: string | number;
  filters?: Types.PickupPointFilterInput | null | undefined;
  sortBy?: Types.PickupPointSortInput | null | undefined;
  first: number;
  page?: number | null | undefined;
}>;


export type PickupPointsInAreaQuery = { session: { pickupPoint: { pickupPoints: { points: { paginatorInfo: { lastPage: number }, data: Array<{ id: string, name: string, type: Types.PickupPointTypeEnum | null, isOpenTwentyFourSeven: boolean, location: { latitude: number, longitude: number }, address: { city: string, postalCode: string, addressLine1: string, addressLine2: string | null }, openingHours: Array<{ day: Types.DayEnum, start: { hour: number, minute: number }, end: { hour: number, minute: number } }> }> } } } } | null };


export const PickupPointsInAreaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PickupPointsInArea"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sessionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PickupPointFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PickupPointSortInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"session"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sessionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pickupPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pickupPoints"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"points"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}}]}},{"kind":"Field","name":{"kind":"Name","value":"openingHours"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"day"}},{"kind":"Field","name":{"kind":"Name","value":"start"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hour"}},{"kind":"Field","name":{"kind":"Name","value":"minute"}}]}},{"kind":"Field","name":{"kind":"Name","value":"end"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hour"}},{"kind":"Field","name":{"kind":"Name","value":"minute"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isOpenTwentyFourSeven"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PickupPointsInAreaQuery, PickupPointsInAreaQueryVariables>;