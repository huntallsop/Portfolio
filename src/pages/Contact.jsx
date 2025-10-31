export default function Contact() {
  return (
    <>
      <section>
        <h1 className="section-title">Let's build something meaningful</h1>
        <p className="section-subtitle">
          Tell me about your product, your team, and the impact you're looking to create. I'll review and follow up quickly to schedule a conversation.
        </p>
      </section>

      <form className="contact-form" action="#" method="post">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" placeholder="Jane Doe" required />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="you@company.com" required />

        <label htmlFor="company">Company</label>
        <input id="company" type="text" name="company" placeholder="Your organization" />

        <label htmlFor="details">Project details</label>
        <textarea id="details" name="details" placeholder="Share objectives, scope, and timing"></textarea>

        <button className="button button--primary" type="submit">
          Submit inquiry
        </button>
      </form>
    </>
  );
}
