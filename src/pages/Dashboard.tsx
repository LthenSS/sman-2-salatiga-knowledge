import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, FolderOpen, Users, Eye, Clock, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { dashboardStats, knowledgeItems } from '@/data/mockData';

const statCards = [
  {
    title: 'Total Artikel',
    value: dashboardStats.totalArticles,
    icon: FileText,
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Kategori',
    value: dashboardStats.totalCategories,
    icon: FolderOpen,
    color: 'bg-success/10 text-success',
  },
  {
    title: 'Pengguna',
    value: dashboardStats.totalUsers,
    icon: Users,
    color: 'bg-accent/10 text-accent-foreground',
  },
  {
    title: 'Total Views',
    value: dashboardStats.totalViews.toLocaleString(),
    icon: Eye,
    color: 'bg-warning/10 text-warning',
  },
];

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  const recentKnowledge = knowledgeItems.slice(0, 5);

  const filteredKnowledge = searchQuery
    ? knowledgeItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : recentKnowledge;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          Selamat Datang, {user?.name?.split(' ')[0]}! 👋
        </h1>
        <p className="text-muted-foreground text-lg">
          Knowledge Management System SMAN 2 Salatiga
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-2xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Cari pengetahuan, artikel, atau materi..."
          className="h-14 pl-12 pr-4 text-base rounded-xl border-2 border-border focus:border-primary transition-colors"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, index) => (
          <Card
            key={stat.title}
            className="card-interactive border-border/50"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Knowledge */}
      <Card className="border-border/50">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">
            {searchQuery ? 'Hasil Pencarian' : 'Pengetahuan Terbaru'}
          </CardTitle>
          <Button
            variant="ghost"
            className="text-primary hover:text-primary"
            onClick={() => navigate('/categories')}
          >
            Lihat Semua
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredKnowledge.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                Tidak ada hasil yang ditemukan untuk "{searchQuery}"
              </p>
            ) : (
              filteredKnowledge.map((item, index) => (
                <div
                  key={item.id}
                  className="group p-4 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-primary/30 transition-all cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => navigate(`/knowledge/${item.id}`)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {item.views}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                        <span>{item.author}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {new Date(item.createdAt).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
