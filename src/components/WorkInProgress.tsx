import { Card, CardContent } from "@/components/ui/card";
import {
  CircleDot,
  Cog,
  Construction,
  Hammer,
  Laptop,
  Rocket,
  Shapes,
  Sparkles,
  Wrench,
} from "lucide-react";

export default function WorkInProgress() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <Card className="w-full max-w-3xl border-none outline-none shadow-none">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            {/* Vector Art Composition */}
            <div className="relative mx-auto h-64 w-64">
              <div className="absolute inset-0 flex animate-pulse items-center justify-center">
                <Shapes className="h-48 w-48 text-muted-foreground/20" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Construction className="h-24 w-24 text-primary" />
              </div>
              {/* Orbiting Elements */}
              <div className="animate-spin-slow absolute inset-0">
                <Cog className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 text-primary/60" />
                <Wrench className="absolute bottom-0 left-1/2 h-8 w-8 -translate-x-1/2 text-primary/60" />
                <Hammer className="absolute left-0 top-1/2 h-8 w-8 -translate-y-1/2 text-primary/60" />
                <Laptop className="absolute right-0 top-1/2 h-8 w-8 -translate-y-1/2 text-primary/60" />
              </div>
              {/* Floating Particles */}
              <div className="absolute inset-0">
                <CircleDot className="animate-float absolute left-1/4 top-1/4 h-3 w-3 text-primary/40" />
                <Sparkles className="animate-float-delayed absolute right-1/4 top-1/3 h-3 w-3 text-primary/40" />
                <Rocket className="animate-float absolute bottom-1/4 right-1/3 h-3 w-3 text-primary/40" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Work in Progress
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground">
                We're currently crafting something amazing. Our team is working
                hard to bring you an exceptional experience. Stay tuned!
              </p>
            </div>



          </div>
        </CardContent>
      </Card>
    </div>
  );
}
