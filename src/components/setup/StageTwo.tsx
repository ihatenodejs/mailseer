import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Key, Mail } from "lucide-react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

interface StageTwoProps {
  setStage: (stage: number) => void
}

export default function Home({ setStage }: StageTwoProps) {
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
        <h1 className="text-2xl font-bold mb-3">Step Two</h1>
        <p className="text-sm text-muted-foreground">
          Let's setup the first admin account.
        </p>

        <div className="flex flex-col gap-2 mt-6">
          <Label className="mb-1">
            <Mail size={16} />
            Email
          </Label>
          <Input type="email" placeholder="Email" />
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <Label className="mb-1">
            <Key size={16} />
            Password
          </Label>
          <Input type="password" placeholder="Password" />
        </div>

        <div className="flex flex-col gap-2 mt-4 mb-8">
          <Label className="mb-1">
            <Key size={16} />
            Confirm Password
          </Label>
          <Input type="password" placeholder="Confirm Password" />
        </div>

        <Button className="w-full cursor-pointer" onClick={() => setStage(3)}>
          Continue
        </Button>
      </CardContent>
    </Card>
  )
}