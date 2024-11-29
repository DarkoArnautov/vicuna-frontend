import { portfolioData } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PortfolioData = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {" "}
      {portfolioData.map((item, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle className="text-lg font-light">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">{item.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
