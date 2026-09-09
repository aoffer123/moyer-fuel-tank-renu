"use client";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn-solid mt-6">
      Print this form
    </button>
  );
}
