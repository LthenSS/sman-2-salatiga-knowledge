import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categories, knowledgeItems } from '@/data/mockData';

export default function CategoryDetail() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = categories.find((c) => c.id === categoryId);
  const categoryKnowledge = knowledgeItems.filter(
    (item) => item.categoryId === categoryId
  );

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <p className="text-muted-foreground">Kategori tidak ditemukan</p>
        <Button onClick={() => navigate('/categories')}>
          Kembali ke Kategori
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/categories')}
          className="shrink-0"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">{category.name}</h1>
          <p className="text-muted-foreground">{category.description}</p>
        </div>
      </div>

      <div className="space-y-4">
        {categoryKnowledge.length === 0 ? (
          <Card className="border-border/50">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <p className="text-muted-foreground mb-4">
                Belum ada artikel dalam kategori ini
              </p>
              <Button variant="outline" onClick={() => navigate('/categories')}>
                Jelajahi Kategori Lain
              </Button>
            </CardContent>
          </Card>
        ) : (
          categoryKnowledge.map((item, index) => (
            <Card
              key={item.id}
              className="card-interactive cursor-pointer border-border/50 group"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => navigate(`/knowledge/${item.id}`)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {item.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                      <span>{item.author}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {new Date(item.createdAt).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {item.views} views
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-2" />
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
