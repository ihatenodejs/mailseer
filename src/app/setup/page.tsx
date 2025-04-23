"use client"

import { useState } from "react"
import StageOne from "@/components/setup/StageOne"
import StageTwo from "@/components/setup/StageTwo"

export default function Home() {
  const [stage, setStage] = useState(1)

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {stage === 1 && <StageOne setStage={setStage} />}
      {stage === 2 && <StageTwo setStage={setStage} />}
    </div>
  )
}