"use server";

import prisma from "@/lib/db";
import { sleep } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export async function addPet(formData) {
  await sleep(2000);
  await prisma.pet.create({
    data: {
      name: formData.get("name"),
      ownerName: formData.get("ownerName"),
      age: parseInt(formData.get("age")),
      imageUrl:
        formData.get("imageUrl") ||
        "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png",
      notes: formData.get("notes"),
    },
  });

  revalidatePath("/app", "layout");
}
