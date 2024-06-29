'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LucideFacebook, LucideGithub, LucideInfo, LucideLogIn } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function PageAuth() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <h1 className="font-bold tracking-wide text-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400 from-20% to-80% mt-32">SIGMA</h1>
      <p>The debateco.re tournament planner.</p>

      <Tabs defaultValue="debateco.re" className="max-w-2xl pt-8">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="debateco.re">{"debateco.re"}</TabsTrigger>
          <TabsTrigger value="self-hosted">{"self-hosted"}</TabsTrigger>
        </TabsList>

        <TabsContent value="debateco.re">
          <Card>
            <CardHeader>
              <CardTitle>Negotiated instance</CardTitle>
              <CardDescription>
                Use this if you work with the project developers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-row gap-2">
              <Link href={"/dashboard"} onClick={() => toast.success("Logged in successfully")}>
                <Button>Log in w/ password</Button>
              </Link>
              <Button variant={"secondary"} disabled>{<LucideFacebook />}</Button>
              <Button variant={"secondary"} disabled>{<LucideGithub />}</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="self-hosted">
          <Card>
            <CardHeader>
              <CardTitle>Self-hosted instance</CardTitle>
              <CardDescription>
                Use this if your tournament has their own IT team.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <div className="flex flex-row items-center">
                  {/* <div className="block w-2 h-2 rounded-full bg-emerald-400 mr-1 relative">
                    <div className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div> */}
                  <div className="block w-2 h-2 rounded-full bg-neutral-400 mr-1 relative">
                    <div className="absolute w-2 h-2 rounded-full bg-neutral-400 animate-ping" />
                  </div>
                  <Label htmlFor="hostname">Hostname</Label>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <LucideInfo className="scale-[.6]" />
                    </HoverCardTrigger>
                    <HoverCardContent className="min-w-56 w-fit max-w-md">
                      <p className="text-lg font-semibold text-center pb-2">{"What's a hostname?"}</p>
                      <p className="text-sm text-pretty">
                        {"The tournament planner needs a connection to a server - if your team hosts the server themselves, then this website needs information on how to use it. This should be given to you by the IT person at your tournament."}
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <Input id="hostname" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-row gap-2">
              <Button>Log in w/ password</Button>
              <Button variant={'secondary'} disabled>{<LucideFacebook />}</Button>
              <Button variant={'secondary'} disabled>{<LucideGithub />}</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

    </div>
  )
}
