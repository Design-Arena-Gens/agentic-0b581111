"use client";

import { FormEvent, useState } from "react";

const defaultName = "friend";

export default function PersonalGreeter() {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState(defaultName);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = name.trim();
    setDisplayName(trimmed.length > 0 ? trimmed : defaultName);
  };

  return (
    <section className="greeter">
      <form className="greeter-form" onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Personalize the hello</label>
        <div className="greeter-fields">
          <input
            id="nameInput"
            name="name"
            type="text"
            placeholder="Add your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-describedby="nameHelp"
          />
          <button type="submit">Update</button>
        </div>
        <p id="nameHelp" className="greeter-help">
          Press update or hit enter to refresh the greeting.
        </p>
      </form>

      <div className="greeter-preview" role="status" aria-live="polite">
        <span className="greeter-title">Your greeting:</span>
        <span className="greeter-message">Hi {displayName}, welcome in.</span>
      </div>
    </section>
  );
}
