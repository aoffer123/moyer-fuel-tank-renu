"use client";

import { PrinterIcon } from "@phosphor-icons/react";

export default function PrintButton({
  pdfPath,
  className = "",
}: {
  pdfPath: string;
  className?: string;
}) {
  const handlePrint = () => {
    // Load the PDF in a hidden iframe, then open the browser's print dialog
    const existing = document.getElementById("pdf-print-frame");
    if (existing) existing.remove();

    const iframe = document.createElement("iframe");
    iframe.id = "pdf-print-frame";
    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";
    iframe.src = pdfPath;

    iframe.onload = () => {
      try {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
      } catch {
        // Fallback: open the PDF in a new tab so they can print from there
        window.open(pdfPath, "_blank", "noopener,noreferrer");
      }
    };

    document.body.appendChild(iframe);
  };

  return (
    <button type="button" onClick={handlePrint} className={className}>
      <PrinterIcon size={20} weight="bold" />
      Print Form
    </button>
  );
}
