import { getDBPortfolio } from "@/lib/notion/db";
import CardView from "@/components/card-view";

export default async function Page() {
  const portfolio = await getDBPortfolio()

  return (
    <div className="container mx-auto lg:max-w-4xl grid lg:grid-cols-3 lg:gap-4 md:max-w-md md:grid-cols-1 md:gap-2">
      {portfolio.map((item, index) => (
        <CardView item={item} key={index} />
    ))}
    </div>
  );
}
