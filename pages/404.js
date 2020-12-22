import { NextSeo } from "next-seo";
import Body from "../components/Container";

const NotFound = () => {
  return (
    <Body>
      <NextSeo 
        title="404 - Min Khant Kyaw"
        canonical="https://minkkyaw.com/404"
        description="Oops, You got the wrong URL"
        openGraph={{
            url:"https://minkkyaw.com/404",
            title="404 - Min Khant Kyaw",
            description:"Oops, You got the wrong URL"
        }}
      />
      <div>

      </div>
    </Body>
  );
};
