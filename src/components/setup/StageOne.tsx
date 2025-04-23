import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

interface StageOneProps {
  setStage: (stage: number) => void
}

export default function Home({ setStage }: StageOneProps) {
  return (
    <Card className="w-96">
      <CardHeader>
        <div className="flex flex-col items-center justify-center gap-2">
          <CardTitle className="flex items-center justify-center text-3xl font-bold">
            <div className="flex items-center gap-2">
              <Mail size={32} />
              Mailseer
            </div>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <h1 className="text-2xl font-bold mb-3">Step One</h1>
        <p className="text-sm text-muted-foreground">
          Welcome to Mailseer! This is the first step of the setup process.
        </p>
        <p className="text-sm text-muted-foreground mt-4 mb-8">
          We&apos;ll guide you through the installation process from here.
        </p>
        <Button className="w-full cursor-pointer" onClick={() => setStage(2)}>
          Continue
        </Button>
      </CardContent>
    </Card>
  )
}