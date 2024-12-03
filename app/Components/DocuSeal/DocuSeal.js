import React from "react";
import { DocusealForm } from "@docuseal/react";

export default async function DocuSeal() {
  const res = await fetch("/product.json");
  const data = await res.json();
  return (
    <div className="app">
      <DocusealForm
        src="https://docuseal.com/d/LEVGR9rhZYf86M"
        email="signer@example.com"
      />
    </div>
  );
}
