"use client";

import { createCheckoutSession } from "@/app/actions/actions";
import H1 from "@/components/h1";
import { Button } from "@/components/ui/button";

export default function Page({ searchParams }) {
  return (
    <main className="flex flex-col items-center space-y-10">
      <H1>PetSoft access requires payment</H1>

      {!searchParams.success && (
        <Button
          onClick={async () => {
            await createCheckoutSession();
          }}
        >
          Buy lifetime access for $299
        </Button>
      )}

      {searchParams.success && (
        <p className="text-sm text-green-700">
          Payment successful! You now have lifetime access to PetSoft.
        </p>
      )}

      {searchParams.cancelled && (
        <p className="text-sm text-red-700">
          Payment cancelled. You can try again.
        </p>
      )}
    </main>
  );
}
