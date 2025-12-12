import { useNavigate } from 'react-router-dom';
import { School, FileText, Trophy, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { categories } from '@/data/mockData';

const iconMap: Record<string, React.ElementType> = {
  School,
  FileText,
  Trophy,
  BookOpen,
};

const colorMap: Record<string, string> = {
  primary: 'bg-primary/10 text-primary border-primary/20',
  success: 'bg-success/10 text-success border-success/20',
  accent: 'bg-accent/10 text-accent-foreground border-accent/20',
  warning: 'bg-warning/10 text-warning border-warning/20',
};

export default function Categories() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Kategori Pengetahuan</h1>
        <p className="text-muted-foreground text-lg">
          Jelajahi berbagai kategori pengetahuan SMAN 2 Salatiga
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => {
          const Icon = iconMap[category.icon] || FileText;
          const colorClass = colorMap[category.color] || colorMap.primary;

          return (
            <Card
              key={category.id}
              className="card-interactive cursor-pointer group border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/categories/${category.id}`)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-xl border ${colorClass}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {category.articleCount} artikel tersedia
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
