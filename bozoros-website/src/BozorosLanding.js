
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BozorosLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-red-200 text-black p-8">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src="/bozoros-logo.png"
          alt="Bozoros Logo"
          className="mx-auto w-40 mb-6 drop-shadow-xl"
        />
        <h1 className="text-5xl font-bold mb-4">Bozoros</h1>
        <p className="text-xl mb-6 italic">
          The masked meme hero crypto never saw coming.
        </p>
        <div className="flex justify-center gap-4 mb-10">
          <Button className="bg-black text-white hover:bg-gray-800">Join the Cult</Button>
          <Button variant="outline">Read the Whitepaper</Button>
        </div>

        <Card className="bg-white rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">What is Bozoros?</h2>
            <p>
              Bozoros is a meme coin concept born from chaos, crafted for the degen
dreamers and market clowns. No promises, just pure meme magic.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Roadmap</h2>
            <ul className="list-disc text-left list-inside">
              <li>Q1: Bozoros is born from the meme void.</li>
              <li>Q2: Meme storm across Twitter and Discord.</li>
              <li>Q3: Token launch if cult demands it.</li>
              <li>Q4: Bozoros to the moon (or the circus).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Join the Community</h2>
            <p>
              Want to be part of the madness? Follow us on social media and
              become a Bozoros cultist.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <Button variant="outline">Twitter</Button>
              <Button variant="outline">Telegram</Button>
              <Button variant="outline">Discord</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
