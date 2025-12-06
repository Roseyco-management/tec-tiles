"use client"

import { useState } from "react"
import Link from "next/link"
import { Calculator, Info, Plus, Trash2, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

interface Room {
  id: string
  name: string
  length: string
  width: string
}

export default function CalculatorPage() {
  const [rooms, setRooms] = useState<Room[]>([
    { id: "1", name: "Room 1", length: "", width: "" },
  ])
  const [wastePercentage, setWastePercentage] = useState("10")
  // tileSize state reserved for future preset tile size feature
  void useState("custom")

  const addRoom = () => {
    setRooms([
      ...rooms,
      { id: Date.now().toString(), name: `Room ${rooms.length + 1}`, length: "", width: "" },
    ])
  }

  const removeRoom = (id: string) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter((room) => room.id !== id))
    }
  }

  const updateRoom = (id: string, field: keyof Room, value: string) => {
    setRooms(
      rooms.map((room) =>
        room.id === id ? { ...room, [field]: value } : room
      )
    )
  }

  // Calculate area for each room
  const roomCalculations = rooms.map((room) => {
    const length = parseFloat(room.length) || 0
    const width = parseFloat(room.width) || 0
    const area = length * width
    return { ...room, area }
  })

  // Total calculations
  const totalArea = roomCalculations.reduce((sum, room) => sum + room.area, 0)
  const waste = totalArea * (parseFloat(wastePercentage) / 100)
  const totalWithWaste = totalArea + waste

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Hero */}
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="h-8 w-8" />
            <h1 className="text-3xl font-bold">Tile Calculator</h1>
          </div>
          <p className="text-white/80 max-w-2xl">
            Calculate exactly how many tiles you need for your project.
            Enter your room dimensions and we&apos;ll work out the total area including recommended waste allowance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Room Inputs */}
            <div className="bg-white rounded-lg p-6 border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Room Dimensions</h2>
                <Button variant="outline" size="sm" onClick={addRoom}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Room
                </Button>
              </div>

              <div className="space-y-4">
                {rooms.map((room, index) => (
                  <div
                    key={room.id}
                    className="p-4 border rounded-lg bg-muted/20"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Input
                        value={room.name}
                        onChange={(e) => updateRoom(room.id, "name", e.target.value)}
                        className="w-40 font-medium"
                      />
                      {rooms.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeRoom(room.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`length-${room.id}`}>Length (metres)</Label>
                        <Input
                          id={`length-${room.id}`}
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="e.g. 4.5"
                          value={room.length}
                          onChange={(e) => updateRoom(room.id, "length", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`width-${room.id}`}>Width (metres)</Label>
                        <Input
                          id={`width-${room.id}`}
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="e.g. 3.2"
                          value={room.width}
                          onChange={(e) => updateRoom(room.id, "width", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    {roomCalculations[index].area > 0 && (
                      <p className="text-sm text-muted-foreground mt-3">
                        Area: <span className="font-medium text-foreground">{roomCalculations[index].area.toFixed(2)} m²</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Waste Allowance */}
            <div className="bg-white rounded-lg p-6 border">
              <h2 className="text-xl font-bold mb-4">Waste Allowance</h2>
              <p className="text-sm text-muted-foreground mb-4">
                We recommend adding extra tiles to account for cuts, breakages, and future repairs.
              </p>
              <div className="flex flex-wrap gap-2">
                {["5", "10", "15", "20"].map((percent) => (
                  <button
                    key={percent}
                    onClick={() => setWastePercentage(percent)}
                    className={`px-4 py-2 rounded-md border transition-colors ${
                      wastePercentage === percent
                        ? "bg-primary text-white border-primary"
                        : "hover:border-primary"
                    }`}
                  >
                    {percent}%
                  </button>
                ))}
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    min="0"
                    max="50"
                    value={wastePercentage}
                    onChange={(e) => setWastePercentage(e.target.value)}
                    className="w-20"
                  />
                  <span className="text-muted-foreground">%</span>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-4 p-3 bg-blue-50 rounded-lg">
                <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> Use 10% for simple rooms, 15% for rooms with alcoves or obstacles,
                  and 20% for diagonal patterns or complex layouts.
                </p>
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-white rounded-lg p-6 border">
              <h2 className="text-xl font-bold mb-4">Measuring Tips</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                  <span>Measure the longest length and widest width of each room</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                  <span>For L-shaped rooms, split into separate rectangles and add each as a separate room</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                  <span>Include door thresholds and any alcoves in your measurements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                  <span>Always round up to the nearest whole number when ordering</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 border sticky top-24">
              <h2 className="text-xl font-bold mb-4">Your Calculation</h2>

              {/* Room breakdown */}
              {roomCalculations.some((r) => r.area > 0) && (
                <div className="space-y-2 mb-4">
                  {roomCalculations
                    .filter((r) => r.area > 0)
                    .map((room) => (
                      <div key={room.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{room.name}</span>
                        <span>{room.area.toFixed(2)} m²</span>
                      </div>
                    ))}
                </div>
              )}

              <Separator className="my-4" />

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal Area</span>
                  <span className="font-medium">{totalArea.toFixed(2)} m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Waste ({wastePercentage}%)
                  </span>
                  <span className="font-medium">+{waste.toFixed(2)} m²</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold">Total Required</span>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primary">
                    {Math.ceil(totalWithWaste)} m²
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ({totalWithWaste.toFixed(2)} m² exact)
                  </p>
                </div>
              </div>

              <Button asChild className="w-full" size="lg">
                <Link href="/shop">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Shop Tiles
                </Link>
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Need help? Call us on{" "}
                <a href="tel:+447931993010" className="text-primary">
                  +44 7931 993010
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
