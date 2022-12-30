import { XMLParser } from "fast-xml-parser";

function parseXmlToJson<Type>(xml: string): Type {
  const parser = new XMLParser();
  return parser.parse(xml) as Type;
}

export default parseXmlToJson;
