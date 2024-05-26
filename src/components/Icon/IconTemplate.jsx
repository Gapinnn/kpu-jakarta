import parser from "html-react-parser";

export default function IconTemplate({ icon }) {
  return parser(icon);
}
