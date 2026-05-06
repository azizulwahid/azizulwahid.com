const technologies = [
  "AWS",
  "Azure",
  "Kubernetes",
  "Docker",
  "Kafka",
  "Snowflake",
  "Airflow",
  "dbt",
  "Python",
  "JavaScript",
  "GraphQL",
  "Terraform",
  "AWS CDK",
  "Git"
];

export default function Work() {
  return (
    <section>
      <p>
        I&apos;ve worked with cloud and data engineering tools including{" "}
        {technologies.slice(0, -1).join(", ")}, and{" "}
        {technologies[technologies.length - 1]}.
      </p>
      <p>
        The work I enjoy most sits where infrastructure, data quality, and
        product needs meet: making pipelines easier to trust, cloud systems
        easier to operate, and engineering decisions easier to explain.
      </p>
    </section>
  );
}
