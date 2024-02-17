import { getDBPortfolio } from "@/lib/notion/db";
import CardView from "@/components/card-view";

export default async function Page() {
  const portfolio = await getDBPortfolio()

  return (
    <div>
      {portfolio.map((item, index) => (
        <CardView item={item} key={index}/>
      ))}
    </div>
  );
}
