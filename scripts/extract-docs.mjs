import { mkdir, readFile, writeFile } from "node:fs/promises";
import { PDFParse } from "pdf-parse";

const targets = [
  {
    input: "docs/서비스경험디자인기사_출제기준(2025.7.12028.12.31).pdf",
    output: "docs/extracted/exam-guideline.txt",
  },
  {
    input: "docs/2025_서비스경험디자인이론서(개정판)_한국디자인진흥원.pdf",
    output: "docs/extracted/theory-book.txt",
  },
  {
    input: "docs/221228_2020-2022_서비스경험디자인_기사_기출문제_한국디자인진흥원.pdf",
    output: "docs/extracted/past-exams.txt",
  },
];

await mkdir("docs/extracted", { recursive: true });

for (const target of targets) {
  const data = await readFile(target.input);
  const parser = new PDFParse({ data });

  try {
    const result = await parser.getText();
    await writeFile(target.output, result.text, "utf8");
    console.log(`Extracted ${target.output}`);
  } finally {
    await parser.destroy();
  }
}
