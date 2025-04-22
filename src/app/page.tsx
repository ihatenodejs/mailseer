import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Key, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* i need to start using more than just cards... */}
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
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label className="mb-1">
                <Mail size={16} />
                Email
              </Label>
              <Input type="email" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="mb-1">
                <Key size={16} />
                Password
              </Label>
              <Input type="password" placeholder="Password" />
            </div>
            <Button className="w-full cursor-pointer">Login</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}