import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "../components/ui/dialog";
import { CircleAlert } from "lucide-react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Chords from "./LandingComp/Chords";
import { Badge } from "./ui/badge";
import packageJson from '../../package.json';

const contributors = [
  {
    name: "Deasy Rosanti Nurjannah, M.T., CBEc.",
    github: "-",
    avatar: "/assets/budeasy.jpeg",
  },
  {
    name: "Iwan Kustiawan, Ph.D.",
    github: "-",
    avatar: "/assets/iwan.jpeg",
  },
  {
    name: "Dr. Jajat Darajat, M.Kes., AIFO.",
    github: "-",
    avatar: "/assets/jajat.jpg",
  },
  
];

export default function Contributors() {
  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <CircleAlert className="h-5 w-5" />
                <span className="sr-only">Lihat Kontributor</span>
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Kontributor</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="sm:max-w-[425px] md:max-w-[570px] lg:max-w-[650px]">
        <DialogTitle className="sr-only">Kontributor</DialogTitle>
        <Card className="border-none">
          <CardHeader className="p-0 mb-2">
            <CardTitle className="font-bold items-center gap-2 flex mb-1">
              <Chords />
              <Badge className="text-xs bg-muted-foreground">v{packageJson.version}</Badge>
            </CardTitle>
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl font-semibold">Kontributor</p>
            </div>
          </CardHeader>
          <Separator className="mb-4" />
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
              {contributors.map((contributor) => (
                <Link
                  key={contributor.github}
                  href={`https://github.com/${contributor.github}`}
                  target="_blank"
                  className="group flex justify-center"
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex flex-col items-center space-y-3 transition-transform duration-200 ease-in-out transform group-hover:scale-105">
                          <Avatar className="h-24 w-24 border-2 border-transparent group-hover:border-primary">
                            <AvatarImage
                              src={contributor.avatar}
                              alt={contributor.name}
                            />
                            <AvatarFallback>
                              {contributor.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <p className="text-sm font-medium text-center group-hover:text-primary transition-colors duration-200">
                            {contributor.name}
                          </p>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{contributor.name}</p>
                        <p className="text-xs text-muted-foreground">
                          @{contributor.github}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
