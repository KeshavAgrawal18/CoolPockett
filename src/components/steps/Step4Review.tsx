import { useState } from "react";
import { useWizard } from "../../context/WizardContext";

import { Button } from "../ui/Button/Button";
import { ReviewCard } from "../review/ReviewCard";
import { ReviewRow } from "../review/ReviewRow";

import "../review/review.css";

export function Step4Review() {
  const { state, back, reset } = useWizard();

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1200));

    localStorage.removeItem("coolpockett-state");

    setLoading(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="review-success">
        <h3>Account created</h3>
        <Button onClick={reset}>Start again</Button>
      </div>
    );
  }

  const { basics, setup, details } = state;

  return (
    <div>
      <ReviewCard title="Account basics">
        <ReviewRow label="Name" value={basics.fullName} />
        <ReviewRow label="Email" value={basics.email} />
        <ReviewRow label="Phone" value={basics.phone} />
        <ReviewRow label="Country" value={basics.country} />
      </ReviewCard>

      <ReviewCard title="Account setup">
        <ReviewRow label="Type" value={setup.accountType} />
        {/* <ReviewRow label="Goal" value={setup.goal} /> */}
      </ReviewCard>

      {/* <ReviewCard title="Details"> */}
      {/* <ReviewRow label="DOB" value={details.dob} /> */}
      {/* <ReviewRow label="City" value={details.city} /> */}
      {/* <ReviewRow label="State" value={details.state} /> */}
      {/* </ReviewCard> */}

      <ReviewCard title="Account preview" highlight>
        <div className="preview-text">
          {/* CoolPockett {setup.goal} ({setup.accountType}) */}
        </div>

        <ul>
          <li>Instant spending notifications</li>
          <li>Budgeting tools included</li>
          <li>No monthly fees</li>
        </ul>
      </ReviewCard>
    </div>
  );
}
