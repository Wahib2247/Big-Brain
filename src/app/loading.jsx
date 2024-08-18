import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
export default function loading() {
  const words = `L o a d i n g . . .`;
  return <TextGenerateEffect words={words}/>;
}