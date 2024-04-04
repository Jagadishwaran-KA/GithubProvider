"use client";

import { Appbar } from "@/components/Appbar";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const session = useSession();

  const image = session.data?.user?.image;

  return (
    <div>
      <Appbar />
      {session ? (
        <img
          className="w-14 h-14 rounded-full object-fit"
          src={image || ""}
          alt="image"
        />
      ) : (
        <div>
          <h1>Nothings</h1>
        </div>
      )}

      {JSON.stringify(session)}
    </div>
  );
}
