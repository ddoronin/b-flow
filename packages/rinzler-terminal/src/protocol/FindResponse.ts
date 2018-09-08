import { Codec, proto, str, bson } from 'bytable-node';
import { DataViewReader } from 'bytable-client/lib/DataViewReader';
import { Response } from './Response';

@proto
export class FindResponse extends Response {
    @str
    id: string;

    @bson
    data: {};
}

export const findResponseReader = new DataViewReader(FindResponse);