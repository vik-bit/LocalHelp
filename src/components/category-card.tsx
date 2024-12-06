import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export default function CategoryCard({ title, description, icon }: CategoryCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

