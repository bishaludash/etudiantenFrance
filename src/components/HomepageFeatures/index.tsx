import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Comprehensive Resources",
    Svg: require("@site/static/img/undraw_search.svg").default,
    description: (
      <>
        We have a curated wealth of information for international students,
        covering everything from visa processes and accommodation options to
        cultural insights and local tips.
      </>
    ),
  },
  {
    title: "Practical Guidance",
    Svg: require("@site/static/img/undraw_solution_mindset.svg").default,
    description: (
      <>
        Navigating a new educational system, culture, and a foreign language can
        be overwhelming. Our practical guides and articles aim to simplify the
        process, offering step-by-step instructions.
      </>
    ),
  },
  {
    title: "Events and Networking",
    Svg: require("@site/static/img/undraw_events.svg").default,
    description: (
      <>
        Stay informed about events and Networking opportunities designed to
        enhance your academic and social experience.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
