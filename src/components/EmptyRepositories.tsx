import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitFork, Plus } from 'lucide-react'

export default function EmptyRepositories() {
  return (
    <Card className="w-full max-w-md border-none shadow-none">
      <CardContent className="flex flex-col items-center justify-center space-y-4 p-8">
        <div className="rounded-full bg-muted p-6">
          <GitFork className="h-12 w-12 text-muted-foreground" />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="text-2xl font-semibold tracking-tight">No repositories found</h3>
          <p className="text-sm text-muted-foreground">
            Get started by creating a new repository or importing an existing one.
          </p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-[#1570EF] hover:bg-[#1067e1] text-white"   >
            <Plus className="mr-2 h-4 w-4" />
            New Repository
          </Button>
          <Button variant="outline">Import Repository</Button>
        </div>
      </CardContent>
    </Card>
  )
}

