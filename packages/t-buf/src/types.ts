import { $$types } from './proto';

const _ = (t: string) => (o: any, propertyKey: string | symbol): void => {
    o[$$types] = o[$$types] || {};
    o[$$types][propertyKey] = t;
}

// Integer
export const uint8  = _('UInt8');
export const uint16 = _('UInt16BE');
export const uint32 = _('UInt32BE');

export const int8   = _('Int8');
export const int16  = _('Int16BE');
export const int32  = _('Int32BE');

// Float & Double
export const float  = _('FloatBE');
export const double  = _('DoubleBE');

// Boolean
export const boolean  = uint8;

// BSON
export const bson = _('BSON');

// String
export const string = _('String');

// alias
export const u8     = uint8;
export const u16    = uint16;
export const u32    = uint32;

export const i8     = int8;
export const i16    = int16;
export const i32    = int32;

export const f      = float;
export const d      = double;

export const bool   = boolean;

export const s      = string;

export const o      = bson;