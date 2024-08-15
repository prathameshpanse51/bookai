import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const prices = [
  {
    api: "OpenAI",
    model: "GPT-3.5",
    pricePer1kTokens: "$0.002",
  },
  {
    api: "OpenAI",
    model: "GPT-4",
    pricePer1kTokens: "$0.03",
  },
  {
    api: "Together AI",
    model: "Llama-2-70b",
    pricePer1kTokens: "$0.0008",
  },
  {
    api: "Together AI",
    model: "Llama-2-13b",
    pricePer1kTokens: "$0.0006",
  },
];

export default function Price() {
  return (
    <>
      <section className="mx-4 md:mx-36 my-4 md:my-20">
        <h1 className="text-3xl md:text-4xl text-[#6366F1] font-semibold mb-4">
          API Pricing
        </h1>
        <p className="text-lg md:text-xl">
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </p>

        <Table className="text-lg mt-4">
          <TableHeader className="rounded">
            <TableRow className="bg-[#6366F1] hover:bg-[#6366F1]">
              <TableHead className="text-white rounded-tl-lg">API</TableHead>
              <TableHead className="text-white">Model</TableHead>
              <TableHead className="text-white rounded-tr-lg">
                Price per 1K tokens
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {prices.map((e, idx) => (
              <TableRow
                key={idx}
                className="even:bg-gray-100 odd:bg-white dark:odd:bg-transparent dark:even:bg-gray-900"
              >
                <TableCell className="font-medium">{e.api}</TableCell>
                <TableCell>{e.model}</TableCell>
                <TableCell>{e.pricePer1kTokens}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
}
