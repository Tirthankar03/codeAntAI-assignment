import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CircleDot, Cog, Construction, Hammer, Laptop, Rocket, Shapes, Sparkles, Wrench } from 'lucide-react'

export default function WorkInProgress() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl border-none bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Vector Art Composition */}
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                <Shapes className="w-48 h-48 text-muted-foreground/20" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Construction className="w-24 h-24 text-primary" />
              </div>
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <Cog className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 text-primary/60" />
                <Wrench className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 text-primary/60" />
                <Hammer className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 text-primary/60" />
                <Laptop className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 text-primary/60" />
              </div>
              {/* Floating Particles */}
              <div className="absolute inset-0">
                <CircleDot className="absolute top-1/4 left-1/4 w-3 h-3 text-primary/40 animate-float" />
                <Sparkles className="absolute top-1/3 right-1/4 w-3 h-3 text-primary/40 animate-float-delayed" />
                <Rocket className="absolute bottom-1/4 right-1/3 w-3 h-3 text-primary/40 animate-float" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Work in Progress
              </h1>
              <p className="text-muted-foreground max-w-[600px] text-lg">
                We're currently crafting something amazing. Our team is working hard to bring you an exceptional experience.
                Stay tuned!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Notify Me
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              Expected completion: Q1 2024
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

