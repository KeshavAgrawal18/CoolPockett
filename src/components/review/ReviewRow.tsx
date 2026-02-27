type ReviewRowProps = {
  label: string;
  value?: string | number;
};

export function ReviewRow({ label, value }: ReviewRowProps) {
  return (
    <div className="review-row">
      <span className="review-label">{label}:</span>

      <span className="review-value">{value || "-"}</span>
    </div>
  );
}
