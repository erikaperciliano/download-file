
import { parse } from "json2csv";
export const toCsv = (data: object[]) => parse(data);
