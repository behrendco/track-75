import { getQuote } from "@/lib/utils";
import MaxWidthWrapper from "@/components/max-width-wrapper";

export default async function Inspiration() {
    const { quote, author } = await getQuote();

    return (
        <MaxWidthWrapper className="mt-2 py-6 w-full">
            <h1 className="text-lg text-white">"{quote}"</h1>
            <h2 className="text-md text-white mt-2">&ndash; {author}</h2>
        </MaxWidthWrapper>
    );
}