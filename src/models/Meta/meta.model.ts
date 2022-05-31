import { serializable, alias, primitive } from "serializr";

export class MetaModel {
    @serializable(alias('id', primitive()))
	value?: number | string;

    @serializable(alias('name', primitive()))
    label?: string;
}