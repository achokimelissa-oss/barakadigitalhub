import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Baraka Digital Hub</title>
        <meta
          name="description"
          content="The requested page could not be found. Return to Baraka Digital Hub to explore AI data services, impact, and contact options."
        />
      </Helmet>
      <section className="section-block">
        <div className="text-block">
          <h3>Page not found</h3>
          <p>The requested page does not exist. Use the navigation menu to return home.</p>
        </div>
      </section>
    </>
  );
}

export default NotFound;
