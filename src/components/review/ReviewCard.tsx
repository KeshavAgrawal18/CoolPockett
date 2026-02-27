import React from "react";

type ReviewCardProps = {
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
};

export function ReviewCard({
  title,
  children,
  highlight = false,
}: ReviewCardProps) {
  return (
    <div className={`review-card ${highlight ? "review-card-highlight" : ""}`}>
      <div className="review-card-title">{title}</div>

      <div className="review-card-body">{children}</div>
    </div>
  );
}
